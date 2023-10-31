// Base Ori KirBotz
// Recode By Yuuki Modz !!
// Error ? Report To wa.me//6289530291942
// Jgn Di Hapus Kntol !! 
require("./config.js")

const fs = require("fs")
const _ = require('lodash')
const pino = require("pino")
const yargs = require("yargs")
const chalk = require("chalk")
const readline = require("readline")
const FileType = require("file-type")
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const PhoneNumber = require('awesome-phonenumber')

const { default: makeWASocket,
	DisconnectReason,
	downloadContentFromMessage,
	useMultiFileAuthState,
	jidDecode,
	areJidsSameUser,
	makeInMemoryStore,
	makeCacheableSignalKeyStore,
	getAggregateVotesInPollMessage
} = require('@whiskeysockets/baileys')

const { smsg } = require('./lib/function/myfunc')
const { msges } = require("./lib/function/message")
const { getImg } = require('./lib/function/functions')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/function/exif')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }
const pairingCode = process.argv.includes("--pairing-code")
//const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//const question = (text) => new Promise((resolve) => rl.question(text, resolve))

const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

const msgRetryCounterCache = new NodeCache()

var low
try {
	low = require("./lib/lowdb")
} catch (e) {
	low = require("lowdb")
}
const { Low, JSONFile } = low
const {
	mongoDB,
	mongoDBV2
} = require('./lib/function/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`lib/data/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
    if (!global.db.READ) {
      clearInterval(this)
      resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
    }
  }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read().catch(console.error)
  global.db.READ = null
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write().catch(console.error)
  }, 60 * 1000)
  
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

async function connectToWhatsApp() {
	const { state, saveCreds } = await useMultiFileAuthState("session")
	const Seika = makeWASocket({
		logger: pino({ level: "silent" }).child({ level: "silent" }),
		printQRInTerminal: !pairingCode,
		auth: {
			creds: state.creds,
			keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
			},
			browser: ['Chrome (Linux)', '', ''],
			markOnlineOnConnect: false, // Set true for online
			generateHighQualityLinkPreview: true,
			getMessage: async (key) => {
				if (store) {
					const msg = await store.loadMessage(key.remoteJid, key.id)
					return msg.message || undefined
					}
					return {
						conversation: "Hai Im Shiro Bot"
					}
				},
				msgRetryCounterCache,
				defaultQueryTimeoutMs: undefined,
			})


console.log(color('[ ' + 'Tiada Hari Tanpa Fix Fitur' + ' ]\n\n', 'yellow'), color('≪ • INFO SCRIPT • ≫\n❈ Script Ori : KirBotz\n❈ Direcode : Yuuki Modz\n❈ Library : Whiskeysockets\n❈ Baileys : Multi Device\n', 'magenta'))

store.bind(Seika.ev)
if (pairingCode && !Seika.authState.creds.registered) {
const phoneNumber = await question(chalk.green(`Please type your WhatsApp number : `))
let code = await Seika.requestPairingCode(phoneNumber)
code = code.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.bgWhite(code)))
}

Seika.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
const botNumber = await Seika.decodeJids(Seika.user.id)
const isCreators = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (!Seika.public && !m.key.fromMe && isCreators && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
msge = msges(Seika, store)
msg = await smsg(Seika, m, msge, store)
require('./message/seika.js')(Seika, msg, msge, chatUpdate, store)
} catch (err) {
console.log(err)}})

// Respon Cmd PollMessage
async function getMessage(key) {
if (store) {
var msg = await store.loadMessage(key.remoteJid, key.id)
return msg.message
}
return {
conversation: "Hai Im Shiro Botz"
}
}
Seika.ev.on("messages.update", async chatUpdate => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (toCmd == undefined) return
var prefCmd = prefix+toCmd
Seika.appenTextMessage(prefCmd, chatUpdate)
}
}
}
})
    
Seika.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
	console.log(chalk.red('⏹️ Koneksi berhenti dan mencoba menghubungkan kembali...'))
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
  console.log(chalk.blue('Connected ✅'))
  console.log(update)
  Seika.sendMessage(ownerNumb+'@s.whatsapp.net', { text: 'Bot Berhasil Terhubung'}, )
}
// console.log('Connected...', update)
});
Seika.ev.on('creds.update', saveCreds)
Seika.decodeJids = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
},

Seika.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Seika.decodeJids(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

// Welcome 
Seika.ev.on("group-participants.update", async (anu) => {
//if (!wlcm.includes(anu.id)) return
console.log(anu)
try {
const metadata = await Seika.groupMetadata(anu.id)
const participants = anu.participants
const chats = global.db.data.chats[anu.id]
const mem = metadata.participants.length

for (let num of participants) {
try { // Get Pp User
ppuser = await Seika.profilePictureUrl(num, 'image')
} catch { 
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try { // Get Pp Group
ppgroup = await Seika.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const getNames = Seika.getName(num)
const fkont = { key: { participant: '0@s.whatsapp.net', ...(anu.id ? { remoteJid: "status@broadcast" } : {})}, message: { 'contactMessage': { 
'displayName': `『 ${botName} 亗 』`, // Edit Teks Di Sini 
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${num.split("@")[0]};;;\nFN:${num.split("@")[0]}, \nitem1.TEL;waid=${num.split("@")[0]}:${num.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbBot, thumbnailUrl: thumbUrl, sendEphemeral: true
}}}

if (anu.action == 'add') { // Function Add
if (!chats?.welcome) return
var teks = `
× •-•-•-•-•⟮ Wᴇʟᴄᴏᴍᴇ Iɴ Gʀᴏᴜᴘ ⟯•-•-•-•-•- ×

┏━───────────────────╼
│  ☲  *${metadata.subject}*
┣────────────────────╼
│【 *Hai Kak @${num.split("@")[0]}* 】
│✎ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ 😎☝️
│✎ Sᴇᴍᴏɢᴀ Bᴇᴛᴀʜ 
┣────────────────────╼
│ ☲  𝐈 𝐍 𝐓 𝐑 𝐎 𝐃 𝐔 𝐂 𝐓 𝐈 𝐍 𝐆
┣────────────────────╼
│⍰ NᴀᴍᴀMᴜ: 
│⍰ Uᴍᴜʀᴍᴜ:
│⍰ GᴇɴᴅᴇʀMᴜ:
│⍰ SᴛᴀᴛᴜsMᴜ: 
┗────────────────────╼

× •-•-•-•-•-•-•⟮ Dᴇsᴄʀɪᴘᴛɪᴏɴ ⟯•-•-•-•-•-•-• ×
${readMore}
${metadata.desc ? metadata.desc : "Gʀᴏᴜᴘ Tɪᴅᴀᴋ Mᴇᴍɪʟɪᴋɪ Dᴇsᴋʀɪᴘsɪ"}

${botName}`
/*
Seika.sendMessage(from, { text: teks, contextInfo: { mentions: [num], externalAdReply: { showAdAttribution: true,
title: `Hallo Kak ${getNames}`,
body: `Jangan Jadi Sider Ya Kak >//<`,,
thumbnailUrl: ppuser,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkont })
*/
var docMessa = {
document: { url: "https://wa.me/6289530291942" },
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
jpegThumbnail: '',
mentions: [num],
fileName: ` 𝗪𝗘𝗟𝗖𝗢𝗠𝗘  𝗠𝗘𝗦𝗦𝗔𝗚𝗘  `,
fileLength: 99999999999999,
caption: teks,
headerType: 1,
contextInfo: {
externalAdReply: {
title: `Hallo Kak ${getNames}`,
body: `Jangan Jadi Sider Ya Kak >//<`,
mediaType: 1,
thumbnailUrl: ppuser,
renderLargerThumbnail: true,
sourceUrl: "",
mediaUrl: sig,
} } }
Seika.sendMessage(anu.id, docMessa, { quoted: fkont })

} else if (anu.action == 'remove') { // Function Leave 
if (!chats?.welcome) return
var tekss = `Yᴀʜʜ @${num.split("@")[0]} Lᴇᴀᴠᴇ ×᷼×

Kᴀʟᴏ Bᴀʟɪᴋ Lᴀɢɪ,
Jᴀɴɢᴀɴ Lᴜᴘᴀ Bᴀᴡᴀ Gᴏʀᴇɴɢᴀɴ ><

Tᴇʀsɪsᴀ *${mem}* Mᴇᴍʙᴇʀ Lᴀɢɪ !!

${botName}`
/*
Seika.sendMessage(anu.id, { text: tekss, contextInfo: { mentions: [num], externalAdReply: { showAdAttribution: true,
title: `Berisirahatlah Dengan Tenang >//<`,
body: `Date : ${dates}`,
thumbnailUrl: ppuser,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkont })*/
var docMessaa = {
document: { url: "https://wa.me/6289530291942" },
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
jpegThumbnail: '',
mentions: [num],
fileName: `『  𝗟𝗘𝗔𝗩𝗘 𝗠𝗘𝗦𝗦𝗔𝗚𝗘  』`,
fileLength: 99999999999999,
caption: tekss,
headerType: 1,
contextInfo: {
externalAdReply: {
title: `Beristirahatlah Dgn Tenang >//<`,
body: `Date : ${dates}`,
mediaType: 1,
thumbnailUrl: ppuser,
renderLargerThumbnail: true,
sourceUrl: "",
mediaUrl: sig,
} } }
Seika.sendMessage(anu.id, docMessaa, { quoted: fkont })

} else if (anu.action == 'promote') { // Function Memb To Admin
if (!chats?.detect) return
var teksss = `× •-•-•-•-•⟮ Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs ⟯•-•-•-•-•- ×

Cɪᴇᴇ >< @${num.split("@")[0]}
Jᴀᴅɪ Aᴅᴍɪɴ Dɪ Gʀᴏᴜᴘs [ *${metadata.subject}* ]

${botName}`
Seika.sendMessage(anu.id, { text: teksss, mentions: [num] }, { quoted: fkont })
} else if (anu.action == 'demote') { // Function Admin To Memb
if (!chats?.detect) return
var tekssss = `× •-•-•-•-•⟮ Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs ⟯•-•-•-•-•- ×

Cɪᴇᴇ >< @${num.split("@")[0]}
Jᴀʙᴀᴛᴀɴɴʏᴀ Dɪᴛᴜʀᴜɴᴋᴀɴ Dɪ Gʀᴏᴜᴘ [ *${metadata.subject}* ]

${botName}`
Seika.sendMessage(anu.id, { text: tekssss, mentions: [num] }, { quoted: fkont })
}
}
} catch (err) {
	console.log(err)
	Seika.sendMessage(ownerNumb+'@s.whatsapp.net', { text: `Error :\n${err}`})
} 
})

// Detect Group Update 
Seika.ev.on("groups.update", async (json) => {
try {
console.log(json)
const res = json[0];
const chats = global.db.data.chats[res.id]
const ftrolii = { key: { participant: '0@s.whatsapp.net', ...(res.id ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 2023, status: 1, surface: 1,
message: `亗 ${botName}`, // Edit Teks Di Sini
orderTitle: wm, sellerJid: '0@s.whatsapp.net'
} } }

if (res.announce == true) { // Group Close
if (!chats?.detect) return
var teks = `× •-•-•-•-•-•-•⟮ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ⟯•-•-•-•-•-•-• ×

Gʀᴏᴜᴘ Hᴀs Bᴇᴇɴ Cʟᴏsᴇᴅ Bʏ Aᴅᴍɪɴ,
Nᴏᴡ Oɴʟʏ Aᴅᴍɪɴ Cᴀɴ Sᴇɴᴅ Mᴇssᴀɢᴇs !!

${botName}`

Seika.sendMessage(res.id, { text: teks }, { quoted: ftrolii })
} else if (res.announce == false) { // Group Open
if (!chats?.detect) return
var tekss = `× •-•-•-•-•-•-•⟮ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ⟯•-•-•-•-•-•-• ×

Gʀᴏᴜᴘ Hᴀs Bᴇᴇɴ Oᴘᴇɴᴇᴅ Bʏ Aᴅᴍɪɴ,
Nᴏᴡ Pᴀʀᴛɪᴄɪᴘᴀɴᴛs Cᴀɴ Sᴇɴᴅ Mᴇssᴀɢᴇs !!

${botName}`

Seika.sendMessage(res.id, { text: tekss }, { quoted: ftrolii })
} else if (res.restrict == true) { // Edit Info Group Lock
if (!chats?.detect) return
var teksss =`× •-•-•-•-•-•-•⟮ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ⟯•-•-•-•-•-•-• ×

Gʀᴏᴜᴘ Iɴғᴏ Hᴀs Bᴇᴇɴ Rᴇsᴛʀɪᴄᴛᴇᴅ,
Nᴏᴡ Oɴʟʏ Aᴅᴍɪɴ Cᴀɴ Eᴅɪᴛ Gʀᴏᴜᴘ Iɴғᴏ !!

${botName}`

Seika.sendMessage(res.id, { text: teksss }, { quoted: ftrolii })
} else if (res.restrict == false) { // Edit Info Group Unlock
if (!chats?.detect) return
var tekssss =`× •-•-•-•-•-•-•⟮ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ⟯•-•-•-•-•-•-• ×

Gʀᴏᴜᴘ Iɴғᴏ Hᴀs Bᴇᴇɴ Oᴘᴇɴᴇᴅ,
Nᴏᴡ Pᴀʀᴛɪᴄɪᴘᴀɴᴛs Cᴀɴ Eᴅɪᴛ Gʀᴏᴜᴘ Iɴғᴏ !!

${botName}`

Seika.sendMessage(res.id, { text: tekssss }, { quoted: ftrolii })
} else if (!res.desc == '') { // Detect Edit Deskripsi Group
if (!chats?.detect) return
var teksssss =`× •-•-•-•-•-•-•⟮ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ⟯•-•-•-•-•-•-• ×

Gʀᴏᴜᴘ Dᴇsᴋ Hᴀs Bᴇᴇɴ Cʜᴀɴɢᴇᴅ Tᴏ ⟇⟇⟇⟇

${res.desc}

${botName}`

Seika.sendMessage(res.id, { text: teksssss }, { quoted: ftrolii })
} else { // Detect Edit Subject Group
if (!chats?.detect) return
var tekssssss =`× •-•-•-•-•-•-•⟮ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ⟯•-•-•-•-•-•-• ×

Gʀᴏᴜᴘ Sᴜʙᴊᴇᴄᴛ Hᴀs Bᴇᴇɴ Cʜᴀɴɢᴇᴅ Tᴏ ⟇⟇⟇⟇

${res.subject}

${botName}`

Seika.sendMessage(res.id, { text: tekssssss }, { quoted: ftrolii })
} 
} catch (err) {
	console.log(err)
	Seika.sendMessage(ownerNumb+'@s.whatsapp.net', { text: `Error :\n${err}`})
} 
})

Seika.public = false // true for public, false for Private

} 

connectToWhatsApp()

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})