// Function Ori By ZiroMD
// Recode By Yuuki Modz 
// Apa Luu ??

// Thanks To 
// ZiroMd ( Creator )
// Yuuki Modz ( Recoder )

var qrcode = require("qrcode")
var { Boom } = require('@hapi/boom')
var { smsg } = require("./myfunc")
var { msges } = require("./message")
var { 
	default: makeWaSocket,
	useMultiFileAuthState,
	fetchLatestBaileysVersion,
	makeInMemoryStore
} = require("@whiskeysockets/baileys")
var pino = require("pino")
var rimraf = require("rimraf")
var { DisconnectReason } = require("@whiskeysockets/baileys/lib/Types");

var Seika = {};

exports.jadibot = async (Seika, jid) => {
	var { state, saveCreds } = await useMultiFileAuthState(`./lib/jadibot/${jid.split("@")[0]}`);
	var { version, isLatest } = await fetchLatestBaileysVersion();
	
	Seika[jid] = makeWaSocket({
		logger: pino({ level: "silent" }),
		printQRInTerminal: false,
		browser: ["Jadibot By Yuuki Modz", "Safari", "1.0.0"],
		auth: state,
		version
	});
	
	var store = makeInMemoryStore({
		logger: pino().child({ level: "fatal", stream: "store" })
	});
	
	Seika[jid].ev.on("creds.update", saveCreds);
	
	Seika[jid].ev.on("contact.update", (update) => {
		for (let contact of update) {
			let id = Seika[jid].decodeJid(contact.id);
			if (store && store.contacts)
			store.contacts[id] = { id, name: contact.notify };
		}
	});
	
	Seika[jid].ev.on("messages.upsert", async (chatUpdate) => {
		try {
			m = chatUpdate.messages[0]
			if (!m.message) return
			m.message = (Object.keys(m.message)[0] === "ephemeralMessage") ? m.message.ephemeralMessage.message : m.message
			if (m.key && m.key.remoteJid === "status@broadcast") return Seika[jid].readMessages([m.key])
			if (!Seika[jid].public && !m.key.fromMe && chatUpdate.type === 'notify') return
			if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
			msge = msges(Seika[jid], store)
			msg = smsg(Seika[jid], m, msge, store)
			require("./message/seika.js")(Seika[jid], msge, msg, chatUpdate, store)
		} catch (err) {
			console.log(err)
		}
	});
	
	Seika[jid].public = true
	
	Seika[jid].ev.on("connection.update", async (update) => {
		var { connection, qr, lastDisconnect } = update;
		if (connection == "open") {
		return Seika[jid].sendMessage(jid, { text: "Connected To Server."
		});
	}
	if (qr) {
		return Seika.sendMessage(jid, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: "Scan QR Ini Untuk Jadi Bot Sementara\n\n 1. Klik titik tiga di pojok kanan atas\n 2. Klik Perangkat tertaut\n 3. Klik Tautkan Perangkat\n 4. Scan QR Ini\n\nKalau Mau Berhentiin Jadibot Silahkan Ketik .stopjadibot"});
	}
	if (connection === "close") {
		var reason = new Boom(lastDisconnect?.error)?.output.statusCode;
		if (reason === DisconnectReason.restartRequired) {
			console.log("Restart Required, Restarting...");
			return this.jadibot(Seika, jid);
		} else if (reason === DisconnectReason.timedOut) {
			console.log("Connection TimedOut, Reconnecting...")
			return this.jadibot(Seika, jid);
		} else {
			return Seika.sendMessage(jid, { text: "Anda Sudah Tidak Lagi Menjadi Bot." }, {})
		}
	}
	});
}

exports.stopjadibot = (Seika, jid) => {
	if (!Object.keys(Seika).includes(jid)) {
		return Seika.sendMessage(jid, { text: "Anda tidak ada di list jadibot" }, { quoted: m });
	}
	try {
		Seika[jid].end("stop");
	} catch {}
	try {
		Seika[jid].logout();
	} catch {}
	delete Seika[jid];
	rimraf.sync(`./lib/jadibot/${jid.split("@")[0]}`);
};

exports.listjadibot = (Seika, m, jid) => {
	var pft = m.key.remoteJid
	var mentions = [];
	var teks = "*List JadiBot By Yuuki Modz*\n\n";
	for (let list of Object.values(Seika[jid])) {
		if (list.user.jid === undefined) return seika("Tidak Ada User Jadibot Yang Terdaftar !!")
		mentions.push(list.user.jid);
		teks += `▶ @${list.user.jid.split("@")[0]}\n`
	}
	return Seika.sendMessage(pft, { text: teks.trim(), mentions }, { quoted: m })
}
