// Ingin Buat Fitur Tapi Tidak Bisa ?
// Tenang, Itu Masalah Anda Bukan Masalah Saya🗿

// Base Ori KirBotz
// Recode By Yuuki Modz !!

// Error ? Report To wa.me//6289530291942

// Project Juli - 2023
// Jgn Di Hapus Kntol !!

require('../config')

const os = require('os')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const path = require('path')
const sharp = require("sharp")
const moment = require('moment-timezone')
const speed = require("performance-now")
const { totalmem, freemem } = require("os")
const { sizeFormatter } = require("human-readable")
const { performance } = require("perf_hooks")
const { exec, spawn, execSync } = require("child_process")

const { BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType,
	getBinaryNodeChild
} = require('@whiskeysockets/baileys')

// Scraper Module
const { sholat, pinterest, fbdown, igdl } = require("api-telnyx")
const { tiktokdl, instagramdl, youtubedl, youtubedlv2, youtubeSearch, savefrom, bucin, wallpaper, wallpaperv2 } = require("@bochilteam/scraper")
const Cill = require("@bochilteam/scraper")
const Ca = require("caliph-api")
const Nyx = require("api-telnyx")
const Da = require("dandi-api")
const Dhn = require("dhn-api")
const Hxz = require("hxz-api")
const Dylux = require("api-dylux")
const Neko = require("akaneko")
const Xfarr = require("xfarr-api")
const Scp1 = require("../lib/random/scraper.js")
const Canvafy = require("canvafy")
const Knigh = require("knights-canvas")
const Canvac = require("canvacord")
const { Instagram, JadwalSholat, INews, Facebook, Pinterest } = require("xfarr-api")
const { uptotelegra } = require("../lib/function/upload")
const { Darkjokes, Quotes, Cerpen} = require("dhn-api")
const yts = require("yt-search")
const { sleep, getBuffer, clockString, clockStringP, runtime, formatp, format, getRandom, getCase, getGroupAdmins, generateProfilePicture, pickRandom, createSerial, jsonformat, reSize } = require('../lib/function/myfunc')
const textPro = require("../lib/function/textpro")
const content = JSON.stringify(m.message)
const { writeExif, writeExifImg } = require("../lib/function/exif")

// List Virtex
const { buttonvirus } = require("../lib/virtex/buttonvirus")
const { ngazap } = require("../lib/virtex/ngazap")
const { notif1 } = require("../lib/virtex/notif1")
const { notif2 } = require("../lib/virtex/notif2")
const { notif3 } = require("../lib/virtex/notif3")
const { menunya } = require("./menu")

module.exports = Seika = async (Seika, m, chatUpdate, store) => {
 try {  
const Zyn = await (await import("arifzyn-scraper")).default
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
// var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix // No Prefix
const isCmd = body.startsWith(prefix)
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushName = m.pushName || "No Name"
const botNumber = await Seika.decodeJid(Seika.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
//const isBan = banned.includes(m.sender)
const { quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = msg.key.remoteJid
const groupMetadata = m.isGroup ? await Seika.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
//const welcm = m.isGroup ? wlcm.includes(from) : true
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmin = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPrem = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const user = global.db.data.users[m.sender]

const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"        
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false


// Public & Self
if (!Seika.public) {
if (!m.key.fromMe) return
}

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgBlue(budy || m.type)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushName), '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushName : 'Private Chat', from))

}

// Waktu 

const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucap = "Selamat " +  salam
function ucapp() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Malam"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}

function ucapWaktu() { 
	let times = parseInt(moment.tz("Asia/Jakarta").format("HH"));
	let ucap = "";
	if (times < 3 || times >= 23) {
		ucap = "Selamat Tengah Malam 🌃";
	}
	else if (times < 5) {
		ucap = "Subuh Cuy 🌆";
	}
	else if (times < 10) {
		ucap = "Selamat Pagi 🌄";
	}
	else if (times < 15) {
		ucap = "Selamat Siang 🌤️";
	}
	else if (times < 18) {
		ucap = "Selamat Sore 🌇";
	}
	else if (times < 19) {
		ucap = "Selamat Petang 🌆";
	}
	else {
		ucap = "Selamat Malam 🌆";
	}

	return ucap;
}

let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let dates = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
// Function Tambahan
	try {
		let isNumber = x => typeof x === 'number' && !isNaN(x)
		let limitUser = isPrem ? saldo.prem : saldo.limit
		let moneyUser = isPrem ? saldo.prem : saldo.money
		let user = global.db.data.users[m.sender]
		if (typeof user !== 'object') global.db.data.users[m.sender] = {}
		if (user) {
			if (!isNumber(user.afkTime))
				user.afkTime = -1
			if (!("afkReason" in user))
				user.afkReason = ""
			if (!isNumber(user.limit))
				user.limit = limitUser
			if (!isNumber(user.money))
				user.money = moneyUser
				
			if (!isNumber(user.premium))
				user.premium = false
			if (!isNumber(user.premiumTime))
				user.premiumTime = 0
		} else {
			global.db.data.users[m.sender] = {
			afkTime: -1,
			afkReason: "",
			limit: limitUser,
			money: moneyUser
		}
		}
		let chats = global.db.data.chats[m.chat]
		if (typeof chats !== 'object')
		global.db.data.chats[m.chat] = {}
		if (chats) {
			if (!('mute' in chats))
				chats.mute = false
			if (!('welcome' in chats))
				chats.welcome = true
			if (!('detect' in chats))
				chats.detect = true
		} else {
			global.db.data.chats[m.chat] = {
			mute: false,
			welcome: true
		}
		}
		let settings = global.db.data.settings[botNumber]
		if (typeof settings !== 'object') db.data.settings[botNumber] = {}
		if (settings) {
			if (!('self' in settings))
				settings.self = true
		} else {
			global.db.data.settings[botNumber] = {
			self: true,
		}
		}
		} catch (err) {
			console.log(err)
			Seika.sendMessage(ownerNumb+'@s.whatsapp.net', { text: err }, { quoted: m })
		}
const contacts = JSON.parse(fs.readFileSync("./lib/data/contacts.json"))
const isContacts = contacts.includes(sender)
const userz = global.db.data.users[m.sender]
const chats = global.db.data.chats[m.chat]
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const seika = async (teks) => {
return Seika.sendMessage(from, { text: teks, contextInfo: { "externalAdReply": { 
	"title": ucap +  ' :> ' + pushName,
	"body": wm,
	"previewType": "PHOTO",
	"thumbnailUrl": thumbUrl,
	"thumbnail": '',
	"sourceUrl": ''
	}
  }
}, { quoted: m })
};

const adReply = { contextInfo: { externalAdReply: { forwardingScore: 9999, showAdAttribution: true, title: ucapWaktu(), body: `              『 ${botName} 亗 』`, mediaUrl: thumbUrl, description: `Created By Seika`, previewType: "VIDEO", thumbnailUrl: thumbUrl, sourceUrl: sig
} } }
		
const ftroli = { key: { id: '', remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2023, status: 1, surface: 1,
message: "🤙 Credit Ori Yuuki Modz", // Edit Disini !!
orderTitle: `Hi ${m.pushName} ${ucapp}`, sellerJid: '0@s.whatsapp.net' } } }

const fkontak = { key: { id: '', fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': {
'displayName':` 『 ✧✩  🎀  ՏᕼIᖇOᗷOTᘔ ᗰᗪ 🎀  ✩✧ 』`, // Edit Disini !!
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;yoooo,;;;\nFN: yoooooy,\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': '', thumbnailUrl: thumbUrl, sendEphemeral: true}}}

function useLimit() {
    let limitUser = db.data.users[m.sender].limit
    if (limitUser < 1) return seika(mess.endLimit)
    m.reply(`1 Lɪᴍɪᴛ Tᴇʀᴘᴀᴋᴀɪ, Tᴇʀsɪsᴀ ${userz.limit -= 1} Lɪᴍɪᴛ`)
}

function useLimits(lmt) {
let limitUser = db.data.users[m.sender].limit
if (limitUser < lmt) return seika(mess.endLimit)
m.reply(`${lmt} Lɪᴍɪᴛ Tᴇʀᴘᴀᴋᴀɪ, Tᴇʀsɪsᴀ ${userz.limit -= lmt} Lɪᴍɪᴛ`)
}

const isLimit = async() => {
return Seika.sendMessage(from, { text: `- 1 Limit Terpakai, Tersisa ${userz.limit -= 1} Limit` }, { quoted: m })
//global.db.data.users[m.sender].limit -= 1
}
const isLimits = async(Jum) => {
return Seika.sendMessage(from, { text: `${Jum} Limit Terpakai, Tersisa ${userz.limit -= Jum} Limit `}, { quoted: m })
}

const stickWait = async() => {
return Seika.sendImageAsSticker(from, imgWait, m, { packname: stickPack, author: stickAuth, contextInfo: { externalAdReply: { forwardingScore: 9999, showAdAttribution: true, title: ucapWaktu(), body: `              『 ${botName} 亗 』`, mediaUrl: thumbUrl, description: `Created By Seika`, previewType: "VIDEO", thumbnailUrl: thumbUrl, sourceUrl: sig
} } } )
}

const onlyOwners = async() => {
return Seika.sendImageAsSticker(from, imgOwner, m, { packname: stickPack, author: stickAuth })
}

const onlyGroups = async() => {
return Seika.sendImageAsSticker(from, imgGroups, m, { packname: stickPack, author: stickAuth })
}

const onlyPrivate = async() => {
return Seika.sendText(from, "Fitur Ini Hanya Dapat Di Gunakan Di Private Chat !!", m)
}

const onlyBotAdmins = async() => {
return Seika.sendImageAsSticker(from, imgBotAdmin, m, { packname: stickPack, author: stickAuth })
}

const onlyAdmins = async() => {
return Seika.sendImageAsSticker(from, imgOnlyAdmins, m, { packname: stickPack, author: stickAuth })
}

const getError = async(cmd, e) => {
return Seika.sendMessage('6289530291942@s.whatsapp.net', { text: `Fitur Gw Error Nih Todz, Fix Kek !!\n\n*Fitur:* ${cmd}\n*Logs:* ${e}\n\nSɪᴍᴘʟᴇ Wʜᴀᴛsᴀᴘᴘ Bᴏᴛᴢ`})
}

const sendError = async(errs) => {
return Seika.sendMessage(from, { text: errs }, { quoted: m })
}

async function loading () {
var sheika = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
`_𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..._\n\n${wm}`
]
let { key } = await Seika.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'}, { quoted: m}) //Pengalih isu

for (let i = 0; i < sheika.length; i++) {
/*await delay(10)*/
await Seika.sendMessage(from, {text: sheika[i], edit: key }, { quoted: m});//PESAN LEPAS
}
}

switch(command) {
 //${global.opts["self"] ? "Private Mode" : "Public Mode"}
 


case "menu": {
//await useLimit(m.sender)
const mot = pickRandom(["⌬", "⏣", "❐", "❑", "✯", "⛾", "⛐", "☫", "◳", "✎"])
var files = fs.readFileSync("./message/seika.js", "utf8")
var regex = /break/g;
var matches = [];
var match;
while ((match = regex.exec(files))) {
	matches.push(match[1]);
}
await Seika.sendText(from, "『 plēคŞē ຟคit ค ๓໐๓ēຖt !! 』", m, adReply)
const mentionedJid = [m.sender]
var mn = `*${ucapWaktu()} @${m.sender.split`@`[0]}*
☰⃟⃟ᭁ═━┈━┈༓
┯┩Hᴏᴡ Aʀᴇ Yᴏᴜ ?
┡────────────┈ ⳹
┠━☰⃟⃟ᭁ「 *U s e rI n f o 克* 」
┋↬✗• *ɴᴀᴍᴇ:* ${pushName}
║↬✗• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
╏↬✗• *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == ownerNumb ? 'Developer' : (userz.premiumTime >= 1 ? 'Premium User' : 'Free User')}
╎↬✗• *ᴘʀᴇᴍɪᴜᴍ:* ${userz.premiumTime > 1 ? 'Yes': 'No'}
╅╌┉┈┈╳
╭╼╼╼╼╼╼╼╼╺╴╴╳
┊ 「 *S t a t u sI n f o 比* 」
┊⧠ *ᴜᴘᴛɪᴍᴇ:* ${runtime(process.uptime())}
┊⧠ *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')}.${moment.tz('Asia/Jakarta').format('mm')}.${moment.tz('Asia/Jakarta').format('ss')}
┊⧠ *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
┊⧠ *ʟɪᴍɪᴛ:* ${userz.limit}
┊⧠ *ᴍᴏɴᴇʏ:* ${userz.money}
┗––––––––––––––––––✥
┊↬✗• *ᴄʀᴇᴅɪᴛ ᴏʀɪ уυυкι мσ∂z*

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
       「 ${botName} 」

  ⏤͟͟͞͞★ 𝐃𝐀𝐅𝐓𝐀𝐑 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓 ꗄ➺
${readMore}
${menunya()}
`
var teks =`Hɪ ᴋᴀᴋ @${m.sender.split("@")[0]} 👋, ${ucapp()}

╔════════════════════
║       亗 *U S E R  I N F O*
╠╦═══════════════════
║║ *Nama:* ${pushName}
║║ *Tags:* @${m.sender.split("@")[0]}
║║ *Limit:* ${userz.limit}
║║ *Status:* ${m.sender.split`@`[0] == ownerNumb ? 'Developer' : (userz.premiumTime >= 1 ? 'Premium User' : 'Free User')}
╠╩══════════════════
║       亗 *B O T Z  I N F O*
╠╦══════════════════
║║ *Nama Bot:* ${botName}
║║ *Nama Owner:* ${ownerName}
║║ *Mode Bot:* --
║║ *Prefix:* ᴍᴜʟᴛɪ ᴘʀᴇғɪx 
║║ *Total:* ${matches.length} Fitur
║║ *Runtime:* ${runtime(process.uptime())}
╠╩══════════════════
║ © ᴄʀᴇᴅɪᴛ ᴏʀɪ уυυкι мσ∂z
╚═══════════════════

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
       「 ${botName} 」

  ⏤͟͟͞͞★ 𝐃𝐀𝐅𝐓𝐀𝐑 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓 ꗄ➺
${readMore}
${menunya()}
`
Seika.sendMessage(from, { text: pickRandom([mn, teks]), contextInfo: { mentionedJid, externalAdReply: { showAdAttribution: true,
title: ucapWaktu(),
body: "      Cʀᴇᴅɪᴛ Oʀɪ 𝐘 𝐔 𝐔 𝐊 𝐈  𝐌𝐎𝐃𝐙",
thumbnailUrl: thumbUrl,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })

}
break
// Info Menu
case "sc": { 
// await testLimit()
var teks = `

*Bot Ini Menggunakan Sc :*
*Di Recode Oleh : Seika*
  
${wm}`
 await seika(teks)
}
break;

case "limit": {
await useLimit(m.sender)
if (db.data.users[m.sender].limit < 1) return
var teks = `Jumlah Limit Tersisa: ${global.db.data.users[m.sender].limit}`
await seika(teks)
}
break;

case "creator": case "owner": {
	const mentionedJid = [m.sender]
	const sentMsg = await Seika.sendContactArray(m.chat, [
	[ownerNumb, await Seika.getName(ownerNumb+'@s.whatsapp.net'), '💌 Developer Bot', '😉 Jangan Lupa Save', '📧 Private', '🇮🇩 Indonesia', '🌐 https://xnxx.com', '🙏 Masih Pemula Puh'],
	[botNumber.split('@')[0], await Seika.getName(botNumber), '🎈Bot Whatsapp', '📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢', 'Nothing', '🇮🇩 Indonesia', '🌐 https://xnxx.com', 'Jangan Lupa Donasi Cuy ☺']
	], m, mentionedJid)

return await Seika.sendMessage(m.chat, { text: `👋 Hai *@${m.sender.split`@`[0]}*, 
Nih Nomor Creator Saya
Jangan Spam Ya Kak ☺`, contextInfo: { mentionedJid }}, { quoted: sentMsg})
}
break

case "runtime": {
var teks = `Bot telah aktif selama: ${runtime(process.uptime())}`
await seika(teks)
}
break;
case "speed": { 
	var times = speed()
	var latensi = speed() - times
	await seika(`*Speed Bot:* ${latensi.toFixed(4)} Seconds`)
	}
	break
case "ping": case "botstatus": case "statusbot": {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let session = fs.statSync("./session")
let timestamp = speed()
await seika("_Testing Speed..._")
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `𝐒 𝙿 𝙴 𝙴 𝙳
  ⭔ ${latensi.toFixed(4)} Seconds
  ⭔ ${oldd - neww} MiliSeconds

𝐑 𝚄 𝙽 𝚃 𝙸 𝙼 𝙴
  ⭔ ${runtime(process.uptime())} 

𝐂 𝙷 𝙰 𝚃 𝚂
  ⭔  *Not Fixed !!*
  
𝐒 𝙴 𝚁 𝚅 𝙴 𝚁
  ⭔ 𝚁𝚊𝚖: ${formatp(totalmem() - freemem())} / ${formatp(totalmem())}
  ⭔ 𝙵𝚛𝚎𝚎𝖱𝖺𝗆: ${formatp(freemem())}
  ⭔ 𝚂𝚎𝚜𝚜𝚒𝚘𝚗𝖲𝗂𝗓𝖾: ${formatp(session.size)}
  ⭔ 𝙿𝚕𝚊𝚝𝙵𝚘𝚛𝚖: ${os.platform()}
  ⭔ 𝚂𝚎𝚛𝚟𝚎𝚛: ${os.hostname()}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length))," ")}: ${formatp(used[key])}`).join("\n")}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + "*").padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join("\n")}`).join("\n\n")}` : ""}

${wm2}`.trim()
Seika.sendImage(from, thumbUrl, respon, m)
}
break
case "totalcase": {
	var fil = fs.readFileSync("./message/seika.js", "utf8")
	var regex = /case\s+['"]([^'"]+)['"]:/g;
	var matches = [];
	var match;
	while ((match = regex.exec(fil))) {
		matches.push(match[1]);
	}
	let teks = `*Total case Bot Saat Ini:*  ± ${matches.length}\n\n`
    teks += '*Daftar Case:*\n\n'
    matches.forEach(function (x) {
        teks += `  • ${x}\n`
       })
	await seika(teks)
	}
	break;
	
        case "totalfitur": { // Create By Yuuki Modz
        	var ab = fs.readFileSync("./message/seika.js", "utf8")
            var bc = /case\s+['"]([^'"]+)['"]:/g;
            var matchs = [];
            var matsh;
            while ((matsh = bc.exec(ab))) {
            	matchs.push(matsh[1]);
            }
            var filee = fs.readFileSync("./message/seika.js", "utf8")
            var regex = /break/g;
            var matches = [];
            var match;
            while ((match = regex.exec(filee))) {
                matches.push(match[1]);
             }
             var img = pickRandom(["https://telegra.ph/file/8f8cc17aec1e4c6a1e7e2.mp4", "https://telegra.ph/file/d21689a363fbe4dfdab0c.mp4", "https://telegra.ph/file/bec47eafd0fa210ea397d.mp4", "https://telegra.ph/file/c38652b31a495fe7cdf3a.mp4"])
            let teks = `*Total fitur bot saat ini:* ${matches.length}`
            Seika.sendMessage(from, { video: { url: img }, caption: `*Total Fitur Bot Saat Ini:*\n🔖 Fitur : ${matches.length}\n🔖 Case : ${matchs.length}\n${wm}`, gifPlayback: true, fileLength: 999999, contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: ucapWaktu(),
                        body: 'Total Cintaku Padamu ><',         
                        previewType: 0,
                        thumbnailUrl: thumbUrl,
                        sourceUrl: sig
                      }}}, { quoted: m })
            }
        break;
	case "test": case "bot": case "tes": {
		var teks = 'Yes, I`m Here Mastah'
		var mesa = generateWAMessageFromContent(from, {
			liveLocationMessage:{ 
				degreesLatitude: 0,
				degreesLongitude: 0,
				accuracyInMeters: 0,
				speedInMps: 0,
				degreesClockwiseFromMagneticNorth: 0,
				caption: teks,
				sequenceNumber: 0,
				timeOffset: 8600,
				jpegThumbnail: thumbBot,
				contextInfo: {
					mentionedJid: [m.sender]
				}
			}
		}, { quoted: m })
		Seika.relayMessage(from, mesa.message, { messageId: mesa.key.id })
	}
	break; 
// Tools menu
case "tagme": {
var mentionedJid = [m.sender]
var teks = '@'+m.sender.split("@")[0]
Seika.sendMessage(from, { text: teks, contextInfo: { mentionedJid }}, { quoted: m })
}
break;
	/*case "hd": { 
		if (!/image/.test(mime)) return seika(`Reply Image Dengan Caption: ${prefix+command}`)
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		try {
		var gets = await Seika.downloadAndSaveMediaMessage(quoted)
		var gets_Url = await fetch(`https://api.yanzbotz.my.id/api/tools/enhance?url=${gets}`)
		var gets_Result = await gets_Url.json()
		//await Seika.sendImage(from, gets_Url.url, "Nih Cuy Hasilnya ><", m)
		seika(`yoo ${gets_Result.url}`)
		} catch (e) {
			getError(command, e)
			sendError("Gagal Memproses Gambar Menjadi HD !!")
		}
	}
	break;*/
	case "hd2": { 
	if (!/image/.test(mime)) throw `Reply Image`
	var imgs = await Seika.downloadAndSaveMediaMessage(quoted)
	var hgs = sharp(imgs)
	var hgss = await hgs.metadata()
	var newWidth = hgss.width * 2;
	var newHeight = hgss.height * 2;
	hgs.resize(newWidth, newHeight);
	hgs.sharpen();
	var buffer = await hgs.jpeg({ quality: 80 }).toBuffer();
	Seika.sendImage(from, buffer, wm, m)
	}
	break
	case "get": case "fetch": {
    if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://';
    let _url = new URL(text);
    let url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY');
    let res = await fetch(url);
    if (parseInt(res.headers.get('content-length')) > 100 * 1024 * 1024) {
        throw `Content-Length: ${res.headers.get('content-length')}`;
    }
    if (!/text|json/.test(res.headers.get('content-type'))) {
        await Seika.sendFile(m.chat, url, 'file', text, m);
        return;
    }
    let txt = await res.arrayBuffer();
    try {
        txt = util.format(JSON.parse(Buffer.from(txt).toString()));
    } catch (e) {
        txt = Buffer.from(txt).toString();
    } finally {
        m.reply(txt.slice(0, 65536));
    }
}
break;
	case "urltoimg": {
		if (!/^https?:\/\//.test(text)) throw 'Awali *URL* dengan http:// atau https://';
		try {
		await stickWait()
		Seika.sendImage(from, text, '\n' + wm2, m)
		} catch (e) {
			seika(`Terjadi Kesalahan Yang Tidak Terduga\nError : ${e}`)
	}
	}
	break;
	case "npm": case "npmsearch": {
		if (!text) return seika(`Penggunaan Salah\nExample: ${command} dylux-api`)
		try {
			var kon = await Dylux.npmSearch(text)
			var tol = `*Result From :* ${text}
			
	⭔ *Name:* ${kon.name}
	⭔ *PackageName:* ${kon.packageName}
	⭔ *Version:* ${kon.version}
	⭔ *Author:* ${kon.owner}
	⭔ *Published:* ${kon.publishedDate}
	⭔ *PackageLink:* ${kon.packageLink}
	⭔ *PackageDownload:* ${kon.downloadLink}
	⭔ *Decription:* ${kon.description}
			
${wm}`
		Seika.sendText(from, tol, m)
		} catch {
			Seika.sendText(from, "Package Tidak Ditemukan !!", m)
		}
	}
	break;
	case "tourl": {
		try {
		if (!/image/.test(mime) && !/webp/.test(mime)) return seika("Imagenya ?")
		var imgs = await m.quoted.download()
		var url = await Zyn.scrape.Scraper.uploadImage(imgs)
		var res = `*Succsess Convert Media To Url*\n\n⭔ ${url.data.url}\n\n${wm}`
		Seika.sendText(from, res, m)
		} catch (e) {
			Seika.sendText(ownerNumb+'@s.whatsapp.net', e, m)
		}
	}
	break;
	case "getbio": {
		try {
		var who
		if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
		else who = m.quoted.sender ? m.quoted.sender : m.sender
		var bio = await Seika.fetchStatus(who)
		await seika(bio.status)
		} catch {
			if (text) return seika("Bio is private !!")
			else try {
				var who = m.quoted ? m.quoted.sender : m.sender
				var bio = await conn.fetchStatus(who)
				await seika(bio.status)
		} catch {
				throw 'Bio is private !!'
		}
	}
	}
	break;
	case "ssweb": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Linknya Mana Cuy ??\nExample: ${prefix+command} https://xnxx.com/`)
		try {
			var web = await Dylux.ssweb(text)
			var imgs = await Buffer.from(web, 'image')
			Seika.sendImage(from, imgs, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Terjadi Kesalahan Yang Tidak Terduga !!")
		}
	}
	break;/*
	case "removebg": { // Apikey
		await useLimit()
		if (userz.limit < 1) return 
		if (!m.quoted) return seika("Reply Atau Tag Image Yg Ingin Di Hapus Backgroundnya !!")
		try {
			var imgs = await Seika.downloadAndSaveMediaMessage(quoted)
			var gets = await fetch(`https://api.akuari.my.id/other/removebg?link=${imgs}`)
			var json = await gets.json()
			Seika.sendImage(from, json.hasil, "Nih Cuy Hasilnya 😎☝️", m)
		} catch (e) {
			getError(command, e)
			sendError("Terjadi Kesalahan !!\nSilahkan Coba Lagi")
		}
	}
	break;*/
	
// Convert Menu
	case "toptv": {
		await useLimit()
		if (userz.limit < 1) return
		if (!m.quoted) return seika(`Tag Video Dengan Caption ${prefix+command}`)
		if (!/video/.test(mime)) return seika("Only Video !!")
		await stickWait()
		//var gets = m.quoted
		var ptv = generateWAMessageFromContent(from, proto.Message.fromObject({
			"ptvMessage": m.quoted
		}), { userJid: from, quoted:m })
		Seika.relayMessage(from, ptv.message, { messageId: ptv.key.id })
		}
	break;
		
// Owner Menu
case 'public': {
if (!isCreator) return m.reply(mess.owner)
Seika.public = true
m.reply('Sukses Change To Public Mode')
}
break;

case 'self': {
if (!isCreator) return m.reply(mess.owner)
Seika.public = false
m.reply('Sukses Change To Self Mode')
}
break;
	case "getcase": {
		if (!isCreator) return onlyCreator()
		if (!text) throw "Cari Fitur Apa?"
		try {
			seika(getCase(text))
		} catch {
			m.reply("Case Tidak Ditemukan !!")
		}
	}
	break;
 case "cekidgc": {
	if(!isCreator) return onlyOwners()
	var getGroups = await Seika.groupFetchAllParticipating()
	var groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
	var anj = groups.map((v) => v.id)
	var teks = `*Total* ${anj.length} *Groups*\n`
	var count = 1
	for (let x of anj) {
	var metas = await Seika.groupMetadata(x)
	teks += `
    *❏ INFO GROUP ${count++}*
	│⭔ *Nama:* ${metas.subject}
	│⭔ *Id:* ${metas.id}
	│⭔ *Total:* ${metas.participants.length} Member
	╰────|\n`
	}
	seika(teks)
	}
	break;
	case "cekid": { // Simple Kan? wkwkwkwk
		if (!isCreator) return onlyOwners()
		var idc = m.chat
		m.reply(idc)
	}
	break;
	case "setppbot": {
		if (!isCreator) return onlyOwners()
		if (!/image/.test(mime)) throw 'Gambarnya Manaa ?'
		var imags = await m.quoted.download()
		if (!imags) throw 'GambarNya Manaa ?'
		await Seika.updateProfilePicture(botNumber, imags)
		return seika("Success menganti foto profile Bot")
	}
	break;
	case "setppbotfull": {
		if (!isCreator) return onlyOwners()
		if (/image/g.test(mime) && !/webp/g.test(mime)) { //throw 'Gambarnya Manaa ?'
		try {
			var imags = await m.quoted.download()
			await stickWait()
			var { img } = await generateProfilePicture(imags)
			await Seika.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type: 'set',
					xmlns: 'w:profile:picture'
				},
				content: [
				{
					tag: 'picture',
					attrs: { type: 'image' },
					content: img
					}
				]
			})
			await seika('Success menganti foto profile Bot')
			} catch (e) {
				console.log(e)
				seika('Terjadi kesalahan, coba lagi nanti !!\n' + e)
			}
		} else {
			seika(`Kirim gambar dengan caption *${command}* atau tag gambar yang sudah dikirim`)
		}
	}
	break;
	case "pushkontak": { // Create By Yuuki Modz !!
		if (!isCreator) return onlyOwners()
		if (!m.isGroup) return onlyGroups()
		if (!text) return seika(`Teksnya ?\nExample: ${prefix+command} Hallo Saya Yuuki,\nJgn Lupa Save Yaa ><`)
		await seika("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
		var grup = await groupMetadata.participants.filter(v => v.id.endsWith("net")).map(v => v.id)
		for (let mem of grup) {
			await Seika.sendMessage(mem, { text: text }, { quoted: fkontak })
			await sleep(3000)
		}
		await seika(`Success PushKontak Sebanyak ${grup.length} Kontak ><`)
	}
	break;
	case "pushkontakv2": { // Create By Yuuki Modz !!
		if (!isCreator) return onlyOwners()
		if (m.isGroup) return onlyPrivate()
		var [idgc, teks] = text.split`|`
		if (!idgc) return seika(`Teksnya ?\nExample: ${prefix+command} idGroup|Hallo Saya Yuuki,\nJgn Lupa Save Yaa ><\n\n*Note:*\nSetiap Mengirim Pesan Pushkontak Ke Target Dari PushKontak\nMaka Kontak Dari Target Tersebut Akan Otomatis Terkirim Ke Owner\nKontak Target Akan Terpisah Dari Target Lainnya !!`)
		if (!teks) return seika(`Teksnya ?\nExample: ${prefix+command} idGroup|Hallo Saya Yuuki,\nJgn Lupa Save Yaa ><\n\n*Note:*\nSetiap Mengirim Pesan Pushkontak Ke Target Dari PushKontak\nMaka Kontak Dari Target Tersebut Akan Otomatis Terkirim Ke Owner\nKontak Target Akan Terpisah Dari Target Lainnya !!`)
		try {
			var target = await Seika.groupMetadata(idgc).then(async res => { 
				var ress = res.participants.filter(v => v.id.endsWith(".net")).map(v => v.id)
				for (let kont of ress) {
					var Namez = Seika.getName(kont)
					Seika.sendMessage(kont, { text: teks }, { quoted: ftroli })
					Seika.sendContactArray(ownerNumb+'@s.whatsapp.net', [kont, Namez, Namez, Namez, "Create By Yuuki Modz", "I`m Not A Mastah"], ftroli)
					await sleep(3000)
				}
				seika(`Success Push Kontak Sebanyak ${ress.length} Kontak`)
			})
		} catch (e) {
			getError(command, e)
			sendError("Terjadi Kesalahan Yang Tidak Terduga !!")
		}
	}
	break;
	case "pushkontakv3": {
		if (!isCreator) return onlyOwners()
		if (m.isGroup) return onlyPrivate()
		var [teks1, teks2] = text.split`|`
		if (!teks1) return seika(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${command} idGroup|teksPushKontak\nUntuk Liat Id Group Silahkan Ketik [ cekidgc ]`)
		if (!teks2) return seika(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${command} idGroup|teksPushKontak\nUntuk Liat Id Group Silahkan Ketik [ ${prefix+'cekidgc'} ]`)
		await seika("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
		var groupData = !m.isGroup? Seika.groupMetadata(from).catch(e => {}) : ""
		var particiPants = !m.isGroup? await groupData.participants : ""
		var memb = await particiPants.filter(v => v.id.endsWith(".net")).map(v => v.id)
		global.tekspushkon = teks2
		for (let all of memb) {
			if (isContacts) return seika(`Sudah Pernah Push Kontak Di Group Ini\nUntuk Mengambil Contact, Ketik [ ${prefix+"getcontact"} ]`)
			contacts.push(all)
			fs.writeFileSync("./lib/data/contacts.json", JSON.stringify(contacts))
			if (/image/.test(mime)) {
				media = await Seika.downloadAndSaveMediaMessage(quoted)
				tourl = await uptotelegra(media)
				await Seika.sendMessage(all, { image: { url: tourl }, caption: global.tekspushkon }, { quoted: fkontak })
				await sleep(3000)
			} else {
					await Seika.sendMessage(all, { text: global.tekspushkon }, { quoted: fkontak })
				await sleep(3000)
			}
		}
		try {
			var uniqueContacts = [...new Set(contacts)];
			var vcardContent = uniqueContacts.map((contact, index) => {
				var vcard = [
				"BEGIN:VCARD",
				"VERSION:3.0",
				`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
				`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
				"END:VCARD",
				"", ].join("\n");
				return vcard; }).join("");
				fs.writeFileSync("./lib/data/contacts.vcf", vcardContent, "utf8");
		} catch (err) {
			seika(util.format(err))
		} finally {
			await Seika.sendMessage(from, { document: fs.readFileSync("./lib/data/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
			contacts.splice(0, contacts.length)
			fs.writeFileSync("./lib/data/contacts.vcf", JSON.stringify(contacts))
		}
	}
	break;
	case "o-hidetag": {
		if (!m.isGroup) return onlyGroups()
		if (!isCreator) return onlyOwners()
		Seika.sendMessage(from, { text: `*Pesan:* ${q ? q : 'Kosong'}\n${wm}`, mentions: participants.map(a => a.id)}, { quoted: m })
    }
    break;
	case "getcontact": {
		if (!isCreator) return onlyOwners()
		if (!isContacts) return seika(`Daftar Contact Masih Kosong !!`)
		await seika(mess.wait)
		var kont = fs.readFileSync("./lib/data/contacts.vcf")
		await Seika.sendMessage(from, { document: kont, fileName: "contact.vcf", caption: "Nih Cuy Daftar Kontaknya\nUntuk Save, Klik Document Ini, Lalu Klik Kontak, Lalu Save 😎☝️", mimetype: "text/vcard"}, { quoted: m })
	}
	break;
	case "bcgc": case "bcgroup": case "broadcastgroup": {
		if (!isCreator) return onlyOwners()
		if (!text) return seika(`Textnya Mana Puh ??\nExample: ${prefix+command} Hallo Saya ShiroBotz MD, Ada Yang Bisa ShiroBotz Bantu?`)
		try {
		var gets_Info = await Seika.groupFetchAllParticipating()
		var gets_Result = Object.entries(gets_Info).slice(0).map(entry => entry[1])
		var gets_Memb = gets_Result.map(v => v.id)
		var teks = `× •-•-•-•-•-•⟮ SʜɪʀᴏBᴏᴛᴢ - ᴍᴅ Bʀᴏᴀᴅᴄᴀsᴛ ⟯•-•-•-•-•-• ×

⍻ ❮❮  𝐌 𝐄 𝐒 𝐒 𝐀 𝐆 𝐄 𝐒  ❯❯

${text}

${wm}`
		await seika(`Sedang Mengirim Broadcast Ke *${gets_Memb.length}* Group, Waktu Selesai ± *${gets_Memb.length * 2}* Detik`)
		for (let lol of gets_Memb) {
			Seika.sendImage(lol, "https://telegra.ph/file/b91ae99256b0a5d46094d.jpg", teks, ftroli)
			await sleep(2000)
		}
		await seika(`Success Broadcast Ke *${gets_Memb.length}* Group ><`)
		} catch (e) { // Error ? Yo Ndak Tau Kok Tanya Saya 🗿
			getError(command, e)
			sendError(`Terjadi Kesalahan !!\nLog: ${e}`)
		}
	}
	break;
	case "getsesi": {
		if (!isCreator) return onlyOwners()
		try {
			var gets_Sesi = fs.readFileSync("./session/creds.json")
			await Seika.sendMessage(from, { document: gets_Sesi, mimetype: "application/json", fileName: "creds.json" }, { quoted: m })
		} catch (e) {
			getError(command, e)
			sendError("Gagal Menggambil Session :(")
		}
	}
	break;
	case "culikmem": { // Rawan Bann 🗿
		if (!m.isGroup) return onlyGroups()
		if (!isCreator) return onlyOwners()
		if (!isBotAdmin) return onlyBotAdmins()
		if (!text) return seika(`Format Salah !!\nExample: ${prefix+command} idGroup

*Note:* Fitur Ini Adalah Fitur Hasil Modifikasi *Yuuki Modz* 

Cara Penggunaan:

	1. Ambil id dari group yang pesertanya ingin di culik,
	2. Cara menggambil id Group, Ketik ${prefix+'cekid'} di group Tersebut,
	3. Pergi ke group tempat anda ingin menambahkan peserta penculikan,
	4. Kemudian ketik perintah ${prefix+command} idGroupnya
	5. Tunggu sampai botz berhasil mendapatkan data dari Group tersebut
	6. Bot akan menculik peserta dengan delay 3 detik, Ini bertujuan untuk mengurangi Resiko Nomor Bot Terbanned

Gunakan Fitur Ini Dengan Sebijak" nya
Creator Tidak Bertanggung Jawab Jika Nomormu Di Banned Oleh MarkJuzkerbeg !!`)
		try {
			var get_Info = Seika.groupMetadata(text).then(async res => {
				var gets_Info = await res.participants.filter(v => v.id.endsWith(".net")).map(v => v.id)
				var gets_Res = `Berhasil Mendapatkan Informasi Dari Id Group Tersebut, Berikut Hasilnya

*Total Peserta:* ${gets_Info.length}

*Note:* Botz Akan Melakukan Penculikan !!
Jika botz gagal menculik peserta, Mungkin peserta tersebut memprivasi "Siapa Yang Dapat Menambahkan Nya Ke Group".
Akan Terjadi Delay (3 Second) Saat Menculik Peserta, Itu Bertujuan Untuk Mengurangi Resiko Terbannya Nomor Bot !!

*Resiko Di Tanggung Sendiri !!*

Fitur Ini Di Buat Oleh *Yuuki Modz*`
				seika(gets_Res)
				for (let all of gets_Info) {
					Seika.groupParticipantsUpdate(from, [all], "add")
					await sleep(3000)
				} // Error ? Yo Ndak Tau Kok Tanya Saya 🗿
			})
			seika(`Success`)
		} catch (e) {
			getError(command, e)
			sendError(`Terjadi Kesalahan !!\nLogs: ${e}`)
		}
	}
	break;



/*
	case "buatsw": case "createsw": {
		if (!isCreator) return onlyOwners()
		if (!quoted) return seika(`Balas Sticker Dengan Caption ${prefix+command}`)
		if (!/webp/.test(mime)) return seika(`Balas Sticker Dengan Caption ${prefix+command}`)
		var imgs = await Seika.downloadAndSaveMediaMessage(quoted)
		Seika.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
	
	
	await loading ()
 if (!quoted) throw `Balas Sticker Dengan Caption ${prefix + command}`
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
const media = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage('status@broadcast', { sticker: { url: media }}, {statusJidList: pengguna})
}
m.reply(`*Sukses mengirim status whatsapp ke ${pengguna.length} Orang Yang Ada Di database*`)
break
	*/
	
	
// Islami Menu
case "jadwalsholat": {
if (!text) return m.reply(`Example: ${prefix + command} Bengkulu`)
const Jad = await JadwalSholat(text).then(res => {
const teks = `Wilayah: ${text}
Tanggal: ${res.tanggal}
Imsyak: ${res.imsyak}
Shubuh: ${res.subuh}
Dzuhur: ${res.dzuhur}
Ashar: ${res.ashar}
Maghrib: ${res.maghrib}
Isya: ${res.isya}

${wm}
`
m.reply(teks)
})
}
break;
	case "islamic": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/islamic.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "×͜× Sᴛᴀʏ Hᴀʟᴀʟ Bʀᴀᴅᴇʀ ×͜×", m)
	}
	break;
	case "kisahnabi_adam": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/adam.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Aᴅᴀᴍ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, fla + 'Kisah Nabi', teksJson, m)
	}
	break;
	case "kisahnabi_ayub": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ayub.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Aʏᴜʙ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, fla + 'Kisah Nabi', teksJson, m)
	}
	break;
	case "kisahnabi_daud": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ayub.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Dᴀᴜᴅ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, fla + 'Kisah Nabi', teksJson, m)
	}
	break;
	case "kisahnabi_dzulkifli": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/dzulkifli.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Dᴢᴜʟᴋɪғʟɪ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_harun": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/harun.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Hᴀʀᴜɴ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_hud": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/hud.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Hᴜᴅ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_ibrahim": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ibrahim.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Iʙʀᴀʜɪᴍ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_idris": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/idris.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Iᴅʀɪs As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_ilyas": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ilyas.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Iʟʏᴀs As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_ilyasa": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ilyasa.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Iʟʏᴀsᴀʜ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_isa": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/isa.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Isᴀ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_ishaq": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ishaq.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Isʜᴀǫ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_ismail": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/ismail.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Isᴍᴀɪʟ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_luth": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/luth.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Lᴜᴛʜ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_muhammad": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/muhammad.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Mᴜʜᴀᴍᴍᴀᴅ Sᴀᴡ ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_musa": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/musa.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Mᴜʜᴀᴍᴍᴀᴅ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_nuh": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/nuh.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Nᴜʜ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_sholeh": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/sholeh.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Mᴜʜᴀᴍᴍᴀᴅ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_sulaiman": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/sulaiman.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Sᴜʟᴀɪᴍᴀɴ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_syuaib": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/syuaib.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Sʏᴜᴀɪʙ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_yahya": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/yahya.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Yᴀʜʏᴀ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_yaqub": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/yaqub.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Yᴀǫᴜʙ As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_yunus": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/yunus.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Yᴜɴᴜs As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_yusuf": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/yusuf.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ Yusuf As ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "kisahnabi_zakariya": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/islamic/kisah_nabi/zakariya.json"))
		var teksJson = `× •-•-•-•⟮ Kɪsᴀʜ Nᴀʙɪ ZakariyaAs ⟯•-•-•-• ×

⭔*Nama:* ${json.name}
⭔*Thn Kelahiran:* ${json.thn_kelahiran}
⭔*Usia:*${json.usia}
⭔*Description:* ${json.description}

${wm}`
		Seika.sendImage(from, json.image_url, teksJson, m)
	}
	break;
	case "niatsholat": case "niatshalat": case "niatsolat": { // Apikey
		await stickWait()
		try {
		var gets = await fetch("https://api.akuari.my.id/islami/niatshalat")
		var json = await gets.json()
		var teks = "× •-•-•-•-•-•⟮ Dᴀғᴛᴀʀ Nɪᴀᴛ Sʜᴏʟᴀᴛ ⟯•-•-•-•-•-• ×\n\n"
		Object.values(json.result).map((v) => { 
			teks += `⭔ *Index:* ${v.id}
⭔ *Nama:* ${v.name}
⭔ *Arab:* ${v.arabic}
⭔ *Latin:* ${v.latin}
⭔ *Terjemahan:* ${v.terjemahan}

✿❯────「 Pᴇᴍʙᴀᴛᴀs Iɴᴅᴇx 」────❮✿\n\n`})
		Seika.sendImage(from, fla + "Niat Sholat", teks, m)
	} catch (e) {
		getError(command, e)
		sendError(`Terjadi Kesalahan\nLog: ${e}`)
	}
	}
	break;
	case "renunganislam": case "renungan_islam": { // apikey
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var gets = await fetch("https://api.akuari.my.id/islami/renunganislam")
		var json = await gets.json()
		Seika.sendImage(from, json, "Tᴇᴛᴀᴘ Sᴇᴍᴀɴɢᴀᴛ Kᴀᴋᴀ ×͜×", m)
	}
	break; 
	
// Ai Menu
	case "googlebard": { // Apikey
		await useLimit()
		if (userz.limit < 1) return 
		if (!text) return seika("Text Nya Mana Cuyy ??")
		try {
		var gets = await fetch(`https://api.yanzbotz.my.id/api/ai/bard?query=${text}`)
		var json = await gets.json()
		seika(json.result.msg) 
		} catch (e) {
			getError(command, e)
			sendError("Apikey Limit, Harap Tunggu Beberapa Saat !!")
		}
	}
	break;
	case "chatgpt3.5": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika("Textnya Mana Cuyy ??")
		try {
		var gets = await fetch(`https://api.yanzbotz.my.id/api/ai/gpt3?query=${text}`)
		var json = await gets.json()
		seika(json.result)
		} catch (e) {
			getError(command, e)
			sendError("Apikey Limit, Harap Tunggu Beberapa Saat !!")
		}
	}
	break;
	case "txt2img": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika("Textnya Mana cuyy ??")
		try {
			var gets = `https://api.yanzbotz.my.id/api/text2img/text2img?prompt=${text}`
			Seika.sendImage(from, gets, `Result From: ${text}`, m)
		} catch (e) {
			getError(command, e)
			sendError("Terjadi Kesalahan, Mungkin Limit Apikey Cooldown !!")
		}
	}
	break;
	case "midjourney": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika("Textnya Mana ??")
		try { 
			var imgs = `https://api.yanzbotz.my.id/api/text2img/midjourney?prompt=${text}`
			await Seika.sendFileUrl(from, imgs, `Result From : ${text}\n\n${botName}`, m)
		} catch (e) {
			getError(command, e)
			sendError("Jeda 5 Detik Per Command !!")
		}
	}
	break;
	case "diffusion": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika("Textnya Manaa ??")
		try {
			var imgs = `https://api.yanzbotz.my.id/api/text2img/diffusion?prompt=${text}`
			await Seika.sendFileUrl(from, imgs, `Result From : ${text}\n\n${botName}`, m)
		} catch (e) {
			getError(command, e)
			sendError("Jeda 5 Detik Per Command !!")
		}
	}
	break;
	case "ai": case "openai": {
		await useLimits(10)
		if (userz.limit < 10) return
		if (!text) return seika("Textnya Mana ??")
		try {
			var imgs = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`)
			var json = await imgs.json()
			Seika.sendText(from, json.respon, m)
		} catch (e) {
			getError(command, e)
			sendError("Terjadi Kesalahan, Mungkin Fitur Cooldown !!")
		}
	} 
	break;
		
// TextPro Menu
	case "led": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/led?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "neon-love": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/neon-love?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "3dgolden": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/3dgolden?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "christmas": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/christmas?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "3drainbow": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/3drainbow?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "hallowenskeleton": case "hallowen_skeleton": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/halloweenskeleton?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "magma": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/magma?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "space": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/textpro/space?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;

// Ephoto Menu
	case "blackpink": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/blackpink?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "bear": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/bear?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "avengers": {
		await useLimit()
		if (userz.limit < 1) return
		var [te1, te2] = text.split`|`
		if (!te1) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki|Modz`)
		if (!te2) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki|Modz\n*Note:* Gunakan Tanda *|* Untuk Memisahkan Teks 1 Dan Teks 2 !!`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/avengers?text=${te1}&text_2=${te2}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "angel": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/angel?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "queen": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/queen?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-1": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-1?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-2": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-2?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-3": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-3?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-4": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-4?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-5": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-5?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-6": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-6?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-7": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-7?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-8": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-8?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "team-logo-ninja-9": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki Modz`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/team-logo-ninja-9?text=${text}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;
	case "captain-america": {
		await useLimit()
		if (userz.limit < 1) return
		var [te1, te2] = text.split`|`
		if (!te1) return seika(`Textnya Mana Cuyy ??\nExample: ${prefix+command} Yuuki|Modz`)
		if (!te2) return seika(`Format Salah !!\nExample: ${prefix+command} Yuuki|Modz\n*Note:* Gunakan Tanda *|* Untuk Memisahkan Teks 1 Dan Teks 2`)
		await stickWait()
		try {
			var gets = `https://api.akuari.my.id/ephoto/captainamerica?text=${te1}&text_2=${te2}`
			await Seika.sendImage(from, gets, "Nih Cuy Hasilnya ><", m)
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!\nHarap Coba Lagi Lain Waktu")
		}
	}
	break;

// Sound Menu
	case "mangkane1": {
		if (userz.limit < 1) return seika(endLimit)
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane1.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane2": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane2.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane3": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane3.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane4": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane4.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane5": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane5.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane6": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane6.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane7": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane7.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane8": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane8.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane9": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane9.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane10": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane10.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane11": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane11.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane12": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane12.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane13": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane13.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane14": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane14.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane15": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane15.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane16": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane16.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane17": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane17.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane18": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane18.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane19": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane19.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane20": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane20.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane21": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane21.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane22": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane22.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane23": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane23.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane24": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/mangkane24.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane25": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane25.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane26": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane26.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane27": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane27.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane28": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane28.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane29": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane29.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane30": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane30.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane31": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane31.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane32": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane32.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane33": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane33.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane34": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane34.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane35": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane35.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane36": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane36.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane37": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane37.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane38": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane38.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane39": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane39.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	case "mangkane40": {
		await useLimit()
		if (userz.limit < 1) return
		await stickWait()
		var webs = "https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/mangkane40.mp3"
		Seika.sendMessage(from, { audio: { url: webs }, caption: 'Azekk', mimetype: "audio/mpeg", seconds: 7200, contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: sig, mediaType: 2, description: wm, title: "Nᴏᴡ Pʟᴀʏɪɴɢ...", body: '       『 '+botName+' 』', thumbnailUrl: thumbAnime, sourceUrl: sig } }
	}, { quoted: m })
	}
	break;
	
// Sticker Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await stickWait()
let media = await quoted.download()
let encmedia = await Seika.sendImageAsSticker(from, media, m, { packname: stickPack, author: stickAuth })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 22) return m.reply('Maksimal 20 detik!')
let media = await quoted.download()
let encmedia = await Seika.sendVideoAsSticker(from, media, m, { packname: stickPack, author: stickAuth })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
isLimit()
}
break;

case "swm": {
try {
const [spack, sauth] = text.split`|`
if (!quoted) throw `Balas Sticker Dengan Caption ${prefix + command + pushName}`
if (!/webp/.test(mime)) return 
var stick = await Seika.downloadAndSaveMediaMessage(quoted)
var ran = await getRandom('.png')
exec(`ffmpeg -i ${stick} ${ran}`, (err) => {
fs.unlinkSync(stick)
if (err) throw err
let buffer = fs.readFileSync(ran)
Seika.sendImageAsSticker(from, buffer, m, { packname: spack, author: sauth })
})
} catch (e) {
throw e
}
}
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
await stickWait()
if (!/webp/.test(mime)) return seika(`Balas sticker dengan caption *${prefix + command}*`)
let media = await Seika.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Seika.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case "smeme": {
try { 
if (!quoted) throw `Balas Image Dengan Caption ${prefix + command}` 
const [atas, bawah] = text.split`|`
if (!/image/.test(mime)) throw `Reply Image`
await stickWait()
//if (/image/.test(mime)) {
let lol = await Seika.downloadAndSaveMediaMessage(quoted)
let gob = await uptotelegra(lol)
let lok = await getBuffer(`https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${gob}`)
Seika.sendImageAsSticker(m.chat, lok, m, { packname: stickPack, author: stickAuth })
} catch (e) {
throw e
}
}
break

case  'qc':{
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return m.reply(`Cara Penggunaan ${prefix}qc teks`)
await stickWait()
const text = teks
const username = await Seika.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await Seika.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await Seika.sendImageAsSticker(m.chat, buffer, m, { packname: stickPack,
author: stickAuth,
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 
case "ttp": {
	if (!text) return seika(`Kata - KataNya ?\nExample: ${command} Seika My Creator `)
	var imgg = await Dylux.ttp(text)
	
	//var imgy = await fetch(imgg.result)
	Seika.sendImageAsSticker(from, imgg.result, m, { packname: stickPack, author: stickAuth })
	//Seika.sendFileUrl(from, stik, "sticker.webp", '', m)
	}
	break;
	case "stickersearch": case "sticksearch": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Penggunaan Salah !!\nExample: ${prefix+command} One Piece`)
		try {
			var gets = await Dylux.StickerSearch(text)
			var stick = pickRandom(gets.sticker_url)
			Seika.sendImageAsSticker(from, stick, m, { packname: stickPack, author: stickAuth})
		} catch (e) {
			getError(command, e)
			sendError("Sticker Tidak Ditemukan !!")
		}
	}
	break;
	case "stickeravatar": case "stickermeta": case "anticolong": {
		await useLimit()
		if (userz.limit < 1) return
		try {
		if (!/image/.test(mime) && !/webp/.test(mime)) return seika("Reply Atau Tag Image")
		var imgs = await m.quoted.download()
		Seika.sendImageAsAvatar(from, imgs, m, { packname: stickPack, author: stickAuth })
		} catch (e) {
			getError(command, e)
			sendError("Gagal !!")
		}
	}
	break;
			
// Group Menu 

case "add": {
try {
if (!m.isGroup) return onlyGroups()
if (!isBotAdmin) return onlyBotAdmins()
if (!isAdmin) return onlyAdmins()
if (!text) throw `Nomornya mana?\nExample: ${prefix + command} 62895××××××`
var cekno = /628/i.exec(m.text)
if (!cekno == true) return await seika(`Pengunaan salah !!\nExample: ${prefix + command} 6289530291942`)
let userss = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Seika.groupParticipantsUpdate(from, [userss], "add")
} catch (err) {
m.reply(err) 
}
}
break;

case "kick": {
if (!m.isGroup) return await onlyGroups()
if (!isBotAdmin) return await onlyBotAdmins()
if (!isAdmin) return await onlyAdmins()
var usr = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Seika.groupParticipantsUpdate(from, [usr], "remove")
//m.reply(
}
break;

case "promote": {
if (!m.isGroup) return onlyGroups()
if (!isBotAdmin) return onlyBotAdmins()
if (!isAdmin) return onlyAdmins()
 var usr = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Seika.groupParticipantsUpdate(from, [usr], "promote")
}
break

case "demote": {
    if (!m.isGroup) return onlyGroups()
    if (!isBotAdmin) return onlyBotAdmins()
    if (!isAdmin) return onlyAdmins()
    if (!quoted) return seika('Tag user yg ingin di Turunkan Jabatannya !!')
    var usr = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@whatsapp.net'
Seika.groupParticipantsUpdate(from, [usr], "demote")
    } 
    break;
    
    case "hidetag": case "ht": {
	if (!m.isGroup) return onlyGroups()
    if (!isAdmin) return onlyAdmins()
    Seika.sendMessage(from, { text: `*Pesan:* ${q ? q : 'Kosong'}\n${wm}`, mentions: participants.map(a => a.id)}, { quoted: m })
    }
    break;
    
    case "tagall": {
    if (!m.isGroup) return onlyGroups()
    if (!isAdmin) return onlyAdmins()
    var geks = `*Pesan:* ${q ? q : "Kosong"}

╔════ ≪ • Tᴀɢ Aʟʟ Mᴇᴍʙᴇʀ • ≫ ════╗
║
`
    for (let mem of participants) {
geks += `║ ➲ @${mem.id.split("@")[0]}\n`
}
    Seika.sendMessage(from, {text: geks + '║\n╚═══════════════──', mentions: participants.map(a => a.id) }, { quoted: ftroli })
    }
    break;
	case "ceknamegroup": case "ceknamegc": case "getnamegc": {
		if (!m.isGroup) return onlyGroups()
		var gets = groupMetadata.subject
		seika(`${gets}`)
	}
	break;
	case "setdesc": case "setdescgroup": case "setdescgc": {
		if (!m.isGroup) return onlyGroups()
		if (!isBotAdmin) return onlyBotAdmins()
		if (!isAdmin) return onlyAdmins()
		try {
		if (!text) return seika(`Teks nya ??\nExample: ${command} #Bukan Maen`)
		var sets = await Seika.groupUpdateDescription(from, text)
		await seika(`Success mengganti desc Group Ke *${text}*`)
		} catch { 
			seika("Gagal mengganti Descripsi Group !!")
		}
	}
	break;
	case "totag": {
		if (!m.isGroup) return onlyGroups()
		if (!m.quoted) return seika("✳️ Reply Pesan")
		var usr = participants.map(u => u.id).filter(v => v !== Seika.user.jid)
		await Seika.sendMessage(from, { forward: m.quoted.fakeObj, mentions: usr }, { quoted: ftroli })
	}
	break;
	case "group": {
		if (!m.isGroup) return onlyGroups()
		if (!isBotAdmin) return onlyBotAdmins()
		if (!isAdmin) return onlyAdmins()
		if (args[0] === 'close') {
			await Seika.groupSettingUpdate(from, "announcement").then((res) => seika("Success Menutup Group")).catch((err) => seika(jsonformat(err)))
		} else if (args[0] === 'open') {
			await Seika.groupSettingUpdate(from, 'not_announcement').then((res) => seika("Success Membuka Group")).catch((err) => seika(jsonformat(err)))
		} else {
			seika(`Penggunaan Salah !!\nExample: ${command} open [ Uɴᴛᴜᴋ Mᴇᴍʙᴜᴋᴀ Gʀᴏᴜᴘ ] \n${command} close [Uɴᴛᴜᴋ Mᴇɴᴜᴛᴜᴘ Gʀᴏᴜᴘ ]`)
		}
	}
	break;
	case "setppgc": case "setppgroup": {
		if (!m.isGroup) return onlyGroups()
		if (!isBotAdmin) return onlyBotAdmins()
		if (!isAdmin) return onlyAdmins()
		try { 
			if (!/image/.test(mime)) throw 'Media Tidak Di Dukung !!'
			var imags = await Seika.downloadAndSaveMediaMessage(quoted)
			if (!imags) throw 'Media Tidak Di Dukung !!'
			await Seika.updateProfilePicture(from, imags)
			return seika("Success menganti foto profile Bot")
		} catch (e) {
			console.log(e)
			seika(`Gagal Mengganti Foto Profile Group !!\n\nLog: ${e}`)
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Owner Gubluk Pake Salah Recode Fitur !!\n\nLog: ${e}`, ftroli)
		}
	}
	break;
	case "enable": case "on": {
		try {
		if (!m.isGroup) return onlyGroups()
		if (!isAdmin && !isCreator) return onlyAdmins()
		if (!text) return seika(`Penggunaan Salah\nExample: ${command} welcome\n\nOptions:\n\n${command} welcome\n\nTʜᴇ Sɪᴍᴘʟᴇ Wʜᴀᴛsᴀᴘᴘ Bᴏᴛᴢ`)
		if (args[0] === "welcome") {
			if (chats.welcome) return seika("Welcome Sudah On Dari Tadi Kak ><")
			chats.welcome = true
			seika(`Success Mengaktifkan Welcome Di Group [ *${groupMetadata.subject}* ]`)
		}
	} catch (e) {
		getError(command, e)
	}
	}
	break;
	case "disable": case "off": {
		try { 
			if (!m.isGroup) return onlyGroups()
			if (!isAdmin && !isCreator) return onlyAdmins()
			if (!text) return seika(`Penggunaan Salah\nExample: ${command} welcome\n\nOptions:\n\n${command} welcome\n\nTʜᴇ Sɪᴍᴘʟᴇ Wʜᴀᴛsᴀᴘᴘ Bᴏᴛᴢ`)
			if (args[0] === "welcome") {
				if (!chats.welcome) return seika("Welcome Sudah Off Dari Tadi Kak ><")
				chats.welcome = false
				seika(`Success MenonAktifkan Welcome Di Group [ *${groupMetadata.subject}* ]`)
			}
		} catch (e) {
			getError(command, e)
			sendError("Terjadi Error !!")
		}
	}
	break;
	case "getppgc": case "getppgroup": {
		if (!m.isGroup) return onlyGroups()
		try {
			var gets = await Seika.profilePictureUrl(from, 'image')
			await Seika.sendImage(from, gets, `Nih Cuy PP Dari Group ${groupMetadata.subject}`, m)
		} catch (e) {
			getError(command, e)
			sendError(`Gagal Menggambil PP Group !!\nLogs: ${e}`)
		}
	}
	break;
	case "getsubject": case "getdesk": case "getdeskgc": {
		if (!m.isGroup) return onlyGroups()
		try {
			var gets = await groupMetadata.desc
			await seika(gets)
		} catch (e) {
			getError(command, e)
			sendError(`Gagal Mengambil Teks Descripsi Group !!\nLogs: ${e}`)
		}
	}
	break;
	case "delete": case "del": {
		if (!m.isGroup) return onlyGroups()
		var key = {}
		try {
			key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
			key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
			key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
			key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
		} catch (e) {
			getError(command, e)
			sendError("Pesan Tersebut Bukan Di Kirim Oleh Bot !!")
		}
	}
	break;
	case "setgcname": case "setsubjectname": {
		if (!m.isGroup) return onlyGroups()
		if (!isAdmin) return onlyAdmins()
		if (!isBotAdmin) return onlyBotAdmins()
		if (!text) return seika(`Teksnya Apa Cuy ??\nExample: ${prefix+command} Yuuki Modz`)
		try { 
			await Seika.groupUpdateSubject(from, text)
			await seika(`Succes Mengganti Subject Group Ke : *${text}*`)
		} catch (e) {
			getError(command, e)
			sendError(`Terjadi Kesalahan, Kode Kesalahan:\n${e}`)
		}
	}
	break;
	





/*
case "group": {
		if (!m.isGroup) return onlyGroups()
		if (!isBotAdmin) return onlyBotAdmins()
		if (!isAdmin) return onlyAdmins()
		if (args[0] === 'close') {
			await Seika.groupSettingUpdate(from, "announcement").then((res) => seika("Success Menutup Group")).catch((err) => seika(jsonformat(err)))
		} else if (args[0] === 'open') {
			await Seika.groupSettingUpdate(from, 'not_announcement').then((res) => seika("Success Membuka Group")).catch((err) => seika(jsonformat(err)))
		} else {
			seika(`Penggunaan Salah !!\nExample: ${command} open [ Uɴᴛᴜᴋ Mᴇᴍʙᴜᴋᴀ Gʀᴏᴜᴘ ] \n${command} close [Uɴᴛᴜᴋ Mᴇɴᴜᴛᴜᴘ Gʀᴏᴜᴘ ]`)
		}
	}
	break;*/
// Random Menu
case "darkjokes": {
var imagee = await Darkjokes()
var teks = `𝐑𝐀𝐍𝐃𝐎𝐌 𝐃𝐀𝐑𝐊 𝐉𝐎𝐊𝐄𝐒`
Seika.sendMessage(from, { image: { url: imagee }, caption: teks + '\n\n' + wm }, { quoted: m })
}
break;

case "quotes": {
var quot = await Quotes()
var teks = `*Author:* ${quot.author}
*Quotes:* ${quot.quotes}

${wm}`
Seika.sendMessage(from, { image: { url: fla + 'Random Quotes' }, caption: teks }, { quoted: m})
}
break;

case "cerpen": {
var cerp = await Cerpen()
var teks = `*Cerpen:* ${cerp}\n\n${wm}`
Seika.sendMessage(from, { image: { url: fla + 'Random Cerpen' }, caption: teks }, { quoted: m})
}
break;

case "bucin": { 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/bucin.json"))
		var bucin = pickRandom(json)
		var kon = `× •-•-•-•⟮ *Random Bucin* ⟯•-•-•-• ×\n\n${bucin}\n\n${wm}`
		Seika.sendImage(from, fla + 'Random Kata" Bucin', kon, m)
	}
	break;

case "quotesanime": {
var ani = await Ca.random.quotesanime()
var { anime, quotes, date, char_name, episode } = ani.result
var me = `× •-•-•-•⟮ *Random Quotes* ⟯•-•-•-• ×

${quotes}

*Character:* ${char_name}
*Anime:* ${anime}
*Episode:* ${episode}
*Date:* ${date}

${wm}`
Seika.sendMessage(from, { image: { url: fla + 'Quotes Anime' }, caption: me }, { quoted: m })
}
break;
        
case "cersex": case "ceritasexs": case "cerita_sexs": {
    var csex = await Zyn.scrape.Cersex.random()
    var { title, thumb, tanggal, cerita } = csex
   // var base64 = thumb.split`,`[1]
   // var imgg = buffer.from(base64, "base64").toString()
    var teks = `*Judul:* ${title}
*Date:* ${tanggal}

*Cerita:* ${cerita}

${wm}`
    Seika.sendImage(from, fla + 'Random Cerita Sexs', teks, m )
}
break;
case "quotesyt": {
	await stickWait()
	var json = JSON.parse(fs.readFileSync("./lib/random/quotesyt.json"))
	var imgJson = pickRandom(json)
	Seika.sendImage(from, imgJson, "×͜× Nɪʜ ᴋᴀᴋ Qᴜᴏᴛᴇsɴʏᴀ ×͜×", m)
	}
	break;
	case "katailham": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/katailham.json"))
		var teksJson = pickRandom(json)
		Seika.sendImage(from, fla + 'Random Kata Ilham', `\n${teksJson}\n\n${wm}`, m)
	}
	break;
	case "gombal": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/gombal.json"))
		var teksJson = pickRandom(json)
		Seika.sendImage(from, fla + 'Random Teks Gombal', `\n${teksJson}\n\n${wm}`, m)
	}
	break;
	case "renungan": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/renungan.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "×͜× Tᴇᴛᴀᴘ Sᴇᴍᴀɴɢᴀᴛ Cᴜʏ\n"+wm, m)
	}
	break;
	case "truth": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/truth.json"))
		var teksJson  = pickRandom(json)
		Seika.sendImage(from, fla + 'Truth Or Dare', `× •-•-•-•-•⟮ Tʀᴜᴛʜ ⟯•-•-•-•-• ×\n\n${teksJson}\n\n${wm}`, m)
	}
	break;
	case "dare": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/dare.json"))
		var teksJson  = pickRandom(json)
		Seika.sendImage(from, fla + 'Dare Or Truth', `× •-•-•-•-•⟮ Dᴀʀᴇ ⟯•-•-•-•-• ×\n\n${teksJson}\n\n${wm}`, m)
	}
	break;
	case "hacker": case "hackerbucin": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/hekerbucin.json"))
		var teksJson = pickRandom(json)
		Seika.sendImage(from, fla + 'Hacker Bucin', `× •-•-•-•-•-•-•⟮ Hᴇᴋᴇʟ Bᴜᴄɪɴ ⟯•-•-•-•-•--•-×\n\n${teksJson}\n\n${wm}`, m)
	}
	break;
	case "darkjoke": {
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/kata-kata/darkjoke.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, `Lᴀᴍᴘᴜ Mᴀɴᴀ Lᴀᴍᴘᴜ🗿\n${wm}`, m)
	}
	break;
	case "sindiran": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		var gets = await fetch("https://api.akuari.my.id/randomtext/sindiran")
		var json = await gets.json()
		Seika.sendText(from, json.hasil.result, m)
	}
	break;
	case "katabijak": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		var gets = await fetch("https://api.akuari.my.id/randomtext/katabijak")
		var json = await gets.json()
		seika(`${json.hasil.quotes}\n\n© ${json.hasil.author}\n\n${botName}`)
	}
	break;
	case "pantunpakboy": case "pantun_pakboy": { // Apikey
		await useLimit()
		if (userz.limit < 1) return 
		var gets = await fetch("https://api.akuari.my.id/randomtext/pantunpakboy")
		var json = await gets.json()
		seika(json.hasil.result)
	}
	break;
	case "pantun": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		var gets = await fetch("https://api.akuari.my.id/randomtext/pantun")
		var json = await gets.json()
		seika(json.hasil)
	}
	break;
	case "faktaunik": case "fakta_unik": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		var gets = await fetch("https://api.akuari.my.id/randomtext/faktaunik")
		var json = await gets.json()
		seika(json.hasil)
	}
	break;
	case "bacot": { // Apikey
		await useLimit()
		if (userz.limit < 1) return
		var gets = await fetch("https://api.akuari.my.id/randomtext/bacot")
		var json = await gets.json()
		seika(json.hasil.result)
	}
	break;
	case "quotesanimesad": case "q_animesad": {
		await useLimit()
		if (userz.limit < 1) return
		var json = JSON.parse(fs.readFileSync("./lib/random/quotesanimesad.json"))
		var teksJson = pickRandom(json)
		await Seika.sendImage(from, fla + "Jangan Sad Cuy ><", `× •-•-•-•-•⟮ Qᴜᴏᴛᴇs Aɴɪᴍᴇ Sᴀᴅ ⟯•-•-•-•-• ×\n\n${teksJson}\n\n${wm}`, m)
	}
	break;
	case "quotesmotivasi": case "q-motivasi": case "quotes-motivasi": {
		await useLimit()
		if (userz.limit < 1) return
		var json = JSON.parse(fs.readFileSync("./lib/random/q-motivasi.json"))
		var teksJson = pickRandom(json)
		await Seika.sendImage(from, fla + "Asikk ><", `× •-•-•-•-•⟮ Qᴜᴏᴛᴇs Mᴏᴛɪᴠᴀsɪ ⟯•-•-•-•-• ×\n\n${teksJson}\n\n${wm}`, m)
	}
	break;
	


// Anime Menu
	case "wallpaperanime": case "wpanime": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await Neko.wallpapers()
		Seika.sendImage(from, imgg, "≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐀𝐍𝐈𝐌𝐄 • ≫\n\n"+wm2, m)
	}
	break;
	case "waifu": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await fetch('https://api.waifu.pics/sfw/waifu')
		var imgJson = await imgg.json()
		Seika.sendImage(from, imgJson.url, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	//case "foxgirl": {
	case "neko": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await Neko.neko()
		Seika.sendImage(from, imgg, "      ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐍𝐄𝐊𝐎 • ≫\n\n"+wm2, m)
	}
	break;
	case "shinobu": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await fetch('https://waifu.pics/sfw/shinobu')
		var imgJson = await imgg.json()
		Seika.sendFileUrl(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐒𝐇𝐈𝐍𝐎𝐁𝐔 • ≫\n\n"+wm2, m)
	}
	break;
	case "bully": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await fetch("https://waifu.pics/sfw/bully")
		var imgJson = await imgg.json()
		Seika.sendFileUrl(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐁𝐔𝐋𝐋𝐘 • ≫\n\n"+wm2, m)
	}
	break;
	case "smile": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await fetch("https://waifu.pics/sfw/smile")
		var imgJson = await imgg.json()
		Seika.sendFileUrl(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐒𝐌𝐈𝐋𝐄 • ≫\n\n"+wm2, m)
	}
	break;
	case "kiss": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await fetch("https://waifu.pics/sfw/kiss")
		var imgJson = await imgg.json()
		Seika.sendFileUrl(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐊𝐈𝐒𝐒 • ≫\n\n"+wm2, m)
	}
	break;
	case "awoo": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = await fetch("https://waifu.pics/sfw/awoo")
		var imgJson = await imgg.json()
		Seika.sendFileUrl(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐀𝐍𝐈𝐌𝐄 • ≫\n\n"+wm2, m)
	}
	break;
	case "megumin": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = JSON.parse(fs.readFileSync('./lib/random/megumin.json'))
		var imgJson = pickRandom(imgg)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐌𝐄𝐆𝐔𝐌𝐈𝐍 • ≫\n\n"+wm2, m)
	}
	break;
	case "kurumi": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var imgg = JSON.parse(fs.readFileSync("./lib/random/kurumi.json"))
		var imgJson = pickRandom(imgg)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃??𝐌 𝐈𝐌𝐀𝐆𝐄 𝐊𝐔𝐑𝐔𝐌𝐈 • ≫\n\n"+wm2, m)
	}
	break;
	case "akira": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var kon = JSON.parse(fs.readFileSync("./lib/random/akira.json"))
		var jsonRes = pickRandom(kon)
		Seika.sendImage(from, jsonRes,  "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐀𝐊𝐈𝐑𝐀 • ≫\n\n"+wm2, m)
	}
	break;
	case "emilia": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/emilia.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐄𝐌𝐈𝐋𝐈𝐀 • ≫\n\n"+wm2, m)
	}
	break;
	case "elaina": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/elaina.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐄𝐋𝐀??𝐍𝐀 • ≫\n\n"+wm2, m)
	}
	break;
	case "loli": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/loli.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐋𝐎𝐋𝐈 • ≫\n\n"+wm2, m)
	}
	break;
	case "akiyama": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/akiyama.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐀𝐊𝐈𝐘𝐀𝐌𝐀 • ≫\n\n"+wm2, m)
	}
	break;
	case "nezuko": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/nezuko.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐍𝐄𝐙𝐔𝐊𝐎 • ≫\n\n"+wm2, m)
	}
	break;
	case "husbu": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/husbu.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐇𝐔𝐒𝐁𝐔 • ≫\n\n"+wm2, m)
	}
	break;
	case "doraemon": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/doraemon.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐃𝐎𝐑𝐀𝐄𝐌𝐎𝐍 • ≫\n\n"+wm2, m)
	}
	break;
	case "miku": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./lib/random/miku.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "        ≪ • 𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐋𝐎𝐋𝐈 • ≫\n\n"+wm2, m)
	}
	break;
	case "hitori": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/hitorigottoh.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "asuna": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/asuna.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "ana": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/ana.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "ayuzawa": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/ayuzawa.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "boruto": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/boruto.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "chitanda": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/chitanda.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "chitoge": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/chitoge.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "deidara": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/deidara.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "erza": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/erza.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	case "gremory": {
		await useLimit()
		if (userz.limit < 1) return 
		await stickWait()
		var json = JSON.parse(fs.readFileSync("./node_modules/arifzyn-scraper/src/database/anime/gremory.json"))
		var imgJson = pickRandom(json)
		Seika.sendImage(from, imgJson, "Dᴀsᴀʀ Wɪʙᴜᴜ 😝\n\n"+wm2, m)
	}
	break;
	
	
	
	/*case "bully": {
		await stickWait()
		var */
// Fun Menu
        case "simi": case "simsimi": {
            if (!text) throw `Mau Nanya Apaa ?`
            var sim = await Zyn.scrape.Scraper.simsimi(text)
        //    var aud = `https://api.yanzbotz.my.id/api/tts/aoi?query=${sim.msg}`
            //var simi = await sim.json()
  //          await Seika.sendMessage(from, { audio: { url: aud }, mimetype: "audio/mp4" }, { quoted: m })
  seika(sim.msg)
           }
    break;
	case "apakah": {
		if (!text) return seika(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
		var apa = pickRandom(["Iya", "Tidak", "Bisa Jadi", "Betul"])
		seika(`*Pertanyaan:* ${command} ${text}\n*Jawaban:* ${apa}`)
	}
	break;
	case "bisakah": {
		if (!text) return seika(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
		var bisa = pickRandom(["Bisa","Gak Bisa","Gak Bisa Aaokawpk","TENTU PASTI KAMU BISA!!!!"])
		await seika(`*Pertanyaan:* ${command} ${text}\n*Jawaban:* ${bisa}`)
	}
	break;
	case "bagaimanakah": {
		if (!text) return seika(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
		var aduh = pickRandom(["Gak Gimana2", "Sulit Itu Bro", "Maaf Bot Tidak Bisa Menjawab", "Coba Deh Cari Di Gugel","astaghfirallah Beneran???","Pusing ah","Owhh Begitu:(","Yang Sabar Ya Bos:(","Gimana yeee"])
		await seika(`*Pertanyaan:* ${command} ${text}\n*Jawaban:* ${aduh}`)
	}
	break;
	case "rate": {
		if (!text) return seika(`Penggunaan ${command} text\n\nContoh : ${command} Seberapa cantik aku`)
		var ra = pickRandom(["5", "10", "15" ,"20", "25","30","35","40","45","50","55","60","65","70","75","80","85","90","100"])
		await seika(`*Rate:* ${text}\n*Jawaban:* ${ra}%`)
	}
	break;
	case "react": {
		if (!m.quoted) return seika(`Tag pesan yg ingin di beri emoji !!`)
		if (!text) return seika(`Emoji nya mana ??`)
		try {
			var key = {}
			key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
			key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
			key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
			key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
			
			Seika.sendMessage(from, { react: { text: text, key: key } })
		} catch (e) {
			getError(command, e)
			sendError(`Only Emoji !!\nExample: ${prefix+command} 😝`)
		}
	}
	break;
	case "slots": { // Fix By Yuuki Modz !!
		var num = /([0-9])$/i
		if (!text) return seika("Masukkan jumlah uang yang ingin anda slots !!")
		if (!num.test(text)) return seika("Hanya angka !!")
		var money = text * 1
		var jackpot = Math.ceil(money * 5)
		var win = Math.ceil(money * 2)
		if (money < 10) return seika("Minimal 10 !!")
		if (money > userz.money) return seika("Uang Anda Tidak Cukup !!")
		var emojis = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐","🍒","🥥","🍌"];
		var a = Math.floor(Math.random() * emojis.length);
		var b = Math.floor(Math.random() * emojis.length);
		var c = Math.floor(Math.random() * emojis.length);
		var x = [],
			y = [],
			z = [];
		for (let i = 0; i < 3; i++) {
			x[i] = emojis[a];
			a++;
			if (a == emojis.length) a = 0;
		}
		for (let i = 0; i < 3; i++) {
			y[i] = emojis[b];
			b++;
			if (b == emojis.length) b = 0;
		}
		for (let i = 0; i < 3; i++) {
			z[i] = emojis[c];
			c++;
			if (c == emojis.length) c = 0;
		}
		var end;
		if (a == b && b == c) {
			end = "*𝙹𝙰𝙲𝙺𝙿𝙾𝚃*";
			hasil = `Win With 3 Thing Common +${jackpot} Money`;
			gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
			userz.money += jackpot
			await Seika.fakeReply(from, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
		} else if (a == b || a == c || b == c) {
			end = "*𝚈𝙾𝚄 𝚆𝙸𝙽*";
			hasil = `Win With 2 Things Common +${win} Money`;
			gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
			userz.money += win
			await Seika.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
		} else { 
			end = "*𝚈𝙾𝚄 𝙻𝙾𝚂𝙴*"
			hasil = `Hopefully You Are Lucky Next -${money} Money`;
			gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`;
			userz.money -= money
			await Seika.fakeReply(m.chat, `*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
		}
	}
	break;

// Downloader Menu
case "tt":  case "tiktokdl": case "tiktok": {
if (!isPrem && userz.limit < 1) return seika("Limit Kau Abis deck")
if (!text) return await seika(`Linknya mana cuy??\nContoh: ${prefix+command} https://vm.tiktok.com/watch?`)
var cekLink = /tiktok.com/i.exec(m.text)
if (!cekLink == true) return await seika("Khusus Downloader TikTok !!")
try {
await stickWait()
var bang = await Dylux.tiktok2(text)

//const { nickname, download_count, duration, description } = bang
 //const url = bang.hdplay || bang.play

var teks =`𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞

*Author:* ${bang.author.name}
*Diunduh:* ${bang.stats.saveCount}
*Durasi:* ${bang.video.duration}
*Dibuat Pada:* ${bang.created_at}

*Description:* ${bang.title}

${wm}`
Seika.sendMessage(from, { video: { url: bang.video.noWatermark }, caption: teks }, { quoted: m })
await isLimit()
} catch {
	var bangs = await Dylux.tiktok2(text)
	var tekz = `*TIKTOK SLIDE DOWNLOAD*
*Author:* ${bangs.author.name}
*Diunduh:* ${bangs.stats.saveCount}
*Dibuat Pada:* ${bangs.created_at}

*Description:* ${bangs.title}
`
for (let its of bangs.images) {
	Seika.sendImage(m.sender, its.url, tekz, m)
}
}
}
break;

case "play": {
if (!text) return seika("Mau Cari apaa??")
await stickWait()
const kon = await yts(text)
const { author: { name }, url, thumbnail, title, description, ago, duration, views } = pickRandom(kon.all)

const tol = `❑『 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 𝐒𝐄𝐀𝐑𝐂𝐇 』❑

❑ 𝐀𝐮𝐭𝐡𝐨𝐫: ${name}
❑ 𝐓𝐢𝐭𝐥𝐞: ${title}
❑ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${duration}
❑ 𝐏𝐮𝐛𝐥𝐢𝐬𝐡𝐞𝐝: ${ago}
❑ 𝐕𝐢𝐞𝐰𝐬: ${views}

❑ 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${description}

${wm}`

Seika.sendMessage(from, { text: tol, contextInfo: { mentionedJid, externalAdReply: { showAdAttribution: true,
title: "Audio Sedang Di Kirim...",
body: wm,
thumbnailUrl: thumbnail,
sourceUrl: url,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

const aud = await youtubedl(url).catch(async _=> await youtubedlv2(url))
const audd = await aud.audio['128kbps'].download()

return Seika.sendMessage(from, { audio: { url: audd }, mimetype: "audio/mpeg", fileName: `${title}.mp3`}, { quoted: m })
} 
break;

case "gitclone": {
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return seika(`Example user ${prefix + command } https://github.com/Hyuura-Official/YushinoMdV2`)
if (!regex.test(args[0])) throw "Link Salah"
await stickWait()
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Seika.sendMessage(from, { document: { url: url }, mimetype: "application/zip", caption: filename }, { quoted: m })
isLimit()
}
break;

case "fb":  case "fbdl": {
if (!args[0]) return seika("Linknya mana ??")
await stickWait()
var kon = await Zyn.scrape.Downloader.fbdl(text)
var tol = `𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 ✅\n\n*Nih Cuy Videonya`
var vid = kon.urls.hd || kon.urls.sd
Seika.sendMessage(from, { video: { url: vid }, caption: tol }, { quoted: m })
isLimit() 
}
break;

case "ytmp3": case "yta": {
if (!text) return seika("Linknya mana ??")
var cekLink = /youtube.com|youtu.be/i.exec(m.text)
if (!cekLink == true) return seika("Khusus Downloader Youtube !!")
await stickWait()
var aud = await youtubedl(text).catch(async _=> await youtubedlv2(text))
var aud_url = await aud.audio["128kbps"].download()
Seika.sendMessage(m.chat, { audio: { url: aud_url }, mimetype: "audio/mpeg", fileName: aud.title + ".mp3" }, { quoted: m })
isLimit()
}
break;
 
case "ytmp4": case "ytv": {
try {
await useLimit()
if (userz.limit < 1) return
if (!text) return seika("Linknya mana ??")
var cekLink = /youtube.com|youtu.be/i.exec(m.text)
if (!cekLink == true) return seika("Khusus Downloader Youtube !!")
await stickWait()
var vid = await youtubedl(text).catch(async _=> await youtubedlv2(text))
var vid_url = await vid.video["720p"].download()
var vid_quality = await vid.video["720p"].quality
var vid_fileSizeH = await vid.video["720p"].fileSizeH
var capt = `𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 ✅\n*Judul:* ${vid.title}\n*Resolusi:* ${vid_quality}\n*Size:* ${vid_fileSizeH}\n\n${wm}`
Seika.sendMessage(m.chat, { video: { url: vid_url }, caption: capt }, { quoted: m})
} catch (e) {
	getError(command, e)
}
}
break;

case "igdl": case "instagramdl": {
if (!text) return seika("Linknya mana ??")
var cekLink = /instagram.com/i.exec(m.text)
if (!cekLink == true) return seika("Khusus Downloader Instagram !!")
try {
var vid = await fetch(`https://api.yanzbotz.my.id/api/downloader/instagram?url=${text}`)
var vid_url = await vid.json()
Seika.sendMessage(from, { video: { url: vid_url.result.url }, caption: "Nih Cuy Hasilnya ><" }, { quoted: m })
} catch (e) {
getError(command, e)
sendError("Terjadi Kesalahan, Pesan Error Telah Terkirim Ke Owner !!")
}
}
break;

case "mediafire": { 
if (!text) throw 'Linknya mana puh?'
var cekLink = /mediafire.com/i.exec(m.text)
if (!cekLink == true) return seika("Khusus Downloader MediaFire !!")
await stickWait()
var coll = await Cill.mediafiredl(text)
var doc_url = coll.url || coll.url2
Seika.sendMessage(from, { document: { url: doc_url }, mimetype: coll.ext, fileName: coll.filename }, { quoted: m })
isLimit()
}

break
	case "yts": case "ytsearch": {
		if (!text) return seika(`Mau Cari Apa ??\nExample: ${command} dj azab terbaru`)
		try {
			var kon = await yts(text)
			//for (let v of kon.all) {
				var teks = `*══━━━━✥ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐒𝐄𝐀𝐑𝐂𝐇 ✥━━━━══*\n\n`
				Object.values(kon.all).map((v) => { 
				teks += `⭔ *Judul:* ${v.title}
⭔ *Author:* ${v.author.name}
⭔ *Views:* ${v.views}
⭔ *Published:* ${v.ago}
⭔ *Durasi:* ${v.timestamp}
⭔ *Link:* ${v.url}
⭔ *Description:* ${v.description}
	
✿❯────「 ${wm} 」────❮✿\n\n`})

	Seika.sendImage(from, kon.all[0].image, teks, m)
	} catch (e) {
		m.reply(`Terjadi Kesalahan !! \nSilahkan Coba Lagi`)
	}
	}
	break;
	case "tiktokmp3": case "tiktokaud": case "tiktokmusic": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika("Linknya Mana cuyy??")
		var cekLink = /tiktok.com/i.exec(m.text)
		if (!cekLink == true) return seika("Khusus Downloader Tiktok !!")
		try {
		var gets = await Dylux.tiktok2(text)
		Seika.sendMessage(from, { audio: { url: gets.music.play_url }, fileName: gets.music.title, caption: gets.music.title, mimetype: "audio/mp4" }, { quoted: m })
		} catch (e) {
			getError(command, e)
			sendError("Gagal Mendapatkan Result :(")
		}
	}
	break;
		


// Internet Menu
case "pinterest": case "pin": case "pinteres": {
if (!text) return m.reply(`Example: ${prefix + command} Akagami No Shanks `)
await stickWait()
var pint = await pinterest(text)
var rest = pickRandom(pint)
var teks = `𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓 𝐒𝐄𝐀𝐑𝐂𝐇\n\n*Judul:* ${text}\n*Url:* ${rest}\n\n${wm}`
Seika.sendMessage(from, { image: { url: rest }, caption: teks }, { quoted: m})
}
break;

case "wallpaper": {
if (!text) throw `Mau Cari Apa?`
await stickWait()
var wall = await Zyn.scrape.Tools.imageSearch(text)
var pp = pickRandom(wall)
var paper = `*Result From:* ${text}

*Title:* ${pp.title}
*Ukuran:* ${pp.size}
*Lebar:* ${pp.width}
*Tinggi:* ${pp.height}

${wm}`
Seika.sendMessage(from, { image: { url: pp.url }, caption: paper }, { quoted: m })
}
break;

case "kusonime": {
if (!text) throw 'Mau Cari Anime Apa??'
await stickWait()
var ser = await Ca.search.kusonime(text)
var { judul, genre, status, produser, rate, type, total_eps, durasi, link, tgl_rilis, thumb, desk, result } = ser.result
var teks = `══━━━━✥ *Kusonime Search* ✥━━━━══

*Judul:* ${judul}
*Genre:* ${genre}
*Produser:* ${produser}
*Type:* ${type}
*Status:* ${status}
*TotalEps:* ${total_eps}
*Rating:* ${rate}
*Durasi:* ${durasi}
*TanggalRilis:* ${tgl_rilis}
*Link:* ${link}

*Sinopsis:* ${desk}

${wm}`
Seika.sendMessage(from, { image: { url: thumb }, caption: teks }, { quoted: m })
}
break;
	case "googleimage": case "gimage": case "gogleimage": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Format Salah !!\nExample: ${prefix+command} Sayu Ogiwara`)
		try {
			var gets = await Dylux.googleImage(text)
			var res = pickRandom(gets)
			Seika.sendImage(from, res, `Result From [ ${text} ]`, m)
		} catch (e) {
			getError(command, e)
			sendError("Image Tidak Di Temukan !!")
		}
	}
	break;
	case "lyrics": {
		await useLimit()
		if (userz.limit < 1) return
		if (!text) return seika(`Format Salah !!\nExample: ${prefix+command} Coco Song`)
		try {
			var gets = await Dylux.lyrics(text)
			var teks = `Result From [ ${text} ]\n\n*Title:* ${gets.title}\n*Artist:* ${gets.artist}\n🅻 🆈 🆁 🅸 🅲 🆂 ⟇⟇⟇⟇\n${gets.lyrics}\n\n${botName}`
			Seika.sendImage(from, gets.thumb, teks, m)
		} catch (e) {
			getError(command, e)
			sendError("Lirik Tidak Di Temukan !!")
		}
	}
	break;

// Berita Menu
	case "cnnnews": {
		useLimit()
		if (userz.limit < 1) return 
		try {
			var all = await Dhn.CNNNews()
			var teks = "× •-•-•-•-•-•-•-•⟮  𝐂 𝐍 𝐍  𝐍 𝐄 𝐖 𝐒  ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Url:* ${v.berita_url}\n\n✿❯────「 ${botName} 」────❮✿\n\n`})
			Seika.sendImage(from, all[0].berita_thumb, teks, m)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Owner Gubluk Pake Salah Recode !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
	case "inews": {
		useLimit()
		if (userz.limit < 1) return
		try {
			var all = await Dhn.iNews()
			var teks = "× •-•-•-•-•-•-•-•⟮  𝐈 𝐍 𝐄 𝐖 𝐒  ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Published:* ${v.berita_diupload}\n⭔ *Jenis:* ${v.berita_jenis}⭔ *Link:* ${v.berita_url}\n\n✿❯────「 ${botName} 」────❮✿\n\n`})
			seika(teks)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Gw Error Noh Todz, Benerin Kek !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
	case "dailynews": {
		useLimit()
		if (userz.limit < 1) return
		try {
			var all = await Dhn.DailyNews()
			var teks = "× •-•-•-•-•-•-•-•⟮  𝐈 𝐍 𝐄 𝐖 𝐒  ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Link_Berita:* ${v.berita_url}\n\n✿❯────「 ${botName} 」────❮✿\n\n`})
			Seika.sendFileUrl(from, all[0].berita_thumb, teks, m)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Gw Error Noh Todz, Benerin Kek !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
	case "detiknews": {
		useLimit()
		if (userz.limit < 1) return
		try {
			var all = await Dhn.DetikNews()
			var teks = "× •-•-•-•-•-•-•-•⟮ Dᴇᴛɪᴋ Nᴇᴡs ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Link_Berita:* ${v.berita_url}\n⭔ *Published:* ${v.berita_diupload}\n\n✿❯────「 ${botName} 」────❮✿\n\n`})
			Seika.sendFileUrl(from, all[0].berita_thumb, teks, m)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Gw Error Noh Todz, Benerin Kek !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
	case "okezonenews": {
		useLimit()
		if (userz.limit < 1) return
		try {
			var all = await Dhn.OkezoneNews()
			var teks = "× •-•-•-•-•-•-•-•⟮ Oᴋᴇᴢᴏɴᴇ Nᴇᴡs ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Link_Berita:* ${v.berita_url}\n⭔ *Published:* ${v.berita_diupload}\n\n✿❯────「 ${botName} 」────❮✿\n\n`})
			Seika.sendFileUrl(from, all[0].berita_thumb, teks, m)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Gw Error Noh Todz, Benerin Kek !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
	case "cnbcnews": {
		useLimit()
		if (userz.limit < 1) return
		try {
			var all = await Dhn.CNBCNews()
			var teks = "× •-•-•-•-•-•-•-•⟮ Cɴʙᴄ Nᴇᴡs ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Link_Berita:* ${v.berita_url}\n⭔ *Published:* ${v.berita_diupload}\n\n✿❯────「 ${botName} 」────❮✿\n\n`})
			Seika.sendFileUrl(from, all[0].berita_thumb, teks, m)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Gw Error Noh Todz, Benerin Kek !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
	case "kompasnews": {
		useLimit()
		if (userz.limit < 1) return
		try {
			var all = await Dhn.KompasNews()
			var teks = "× •-•-•-•-•-•-•-•⟮  Kᴏᴍᴘᴀs Nᴇᴡs  ⟯•-•-•-•-•-•-•-• ×\n\n"
			Object.values(all).map((v) => {
				teks +=`⭔ *Berita:* ${v.berita}\n⭔ *Published:* ${v.berita_diupload}\n⭔ *Jenis:* ${v.berita_jenis}\n⭔ *Berita_Jenis:* ${v.berita_jenis}\n⭔ *Link_Berita:* ${v.berita_url}\n✿❯────「 ${botName} 」────❮✿\n\n`})
			Seika.sendFileUrl(from, all[0].berita_thumb, teks, m)
		} catch (e) {
			seika("Terjadi Kesalahan Yang Tidak Terduga !!")
			Seika.sendText(ownerNumb+'@s.whatsapp.net', `Gw Error Noh Todz, Benerin Kek !!\n\nLog: ${e}`, fkontak)
		}
	}
	break;
		
// War Menu 
case "sendcrash": {
if (!isCreator) return m.reply(mess.owner)
var teks = `Hallo Kak ${name}\n\nApa yang bisa Bot bantu?`
Seika.sendMessage(from, { text: teks }, { quoted: fbugs })
}
break;

case 'bugstik':{
if (!isCreator) return seika(mess.owner)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
Seika.sendMessage(m.chat, {sticker: thumbBug},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break

// Whatsapp Menu
	case "banned": { 
		if (!isCreator) return onlyOwners()
		if (m.quoted || q) {
			var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
			if (tosend === ownerNumb) return seika("Tidak Bisa Verif My Creator !!")
			var target = tosend.split("@")[0]
			try {
				var axioss = require("axios")
				var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
				var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
				var cookie = ntah.headers["set-cookie"].join("; ")
				var cheerios = require("cheerio");
				var $ = cheerios.load(ntah.data)
				var $form = $("form");
				var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
				var form = new URLSearchParams()
				form.append("jazoest", $form.find("input[name=jazoest]").val())
				form.append("lsd", $form.find("input[name=lsd]").val())
				form.append("step", "submit")
				form.append("country_selector", "+")
				form.append("phone_number", `+${target}`,)
				form.append("email", email.data[0])
				form.append("email_confirm", email.data[0])
				form.append("platform", "ANDROID")
				form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${target}`)
				form.append("__user", "0")
				form.append("__a", "1")
				form.append("__csr", "")
				form.append("__req", "8")
				form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
				form.append("dpr", "1")
				form.append("__ccg", "UNKNOWN")
				form.append("__rev", "1007965968")
				form.append("__comment_req", "0")
				var res = await axioss({
					url,
					method: "POST",
					data: form,
					headers: {
						cookie
					}
				})
				var payload = String(res.data)
				//if (payload.includes(`"payload":true`)) {
				seika(util.format(res.data))
			} catch (e) {
				seika(`Nih cuy error\n${e}`)
			}
		} else seika("Reply Numornya !!")
	}
	break;


default: 

//if (budy.includes("assalamualaikum|ass|asala")) {

if (budy.includes("whatsapp.com")) {
m.reply("Link Terdeteksi !!")
}

	if (budy.startsWith("=>")) {
		if (!isCreator) return m.reply(mess.owner)
		function Return(sul) {
			sat = JSON.stringify(sul, null, 2)
			bang = util.format(sat)
			if (sat == undefined) {
				bang = util.format(sul)}
			return m.reply(bang)}
		try {
			m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`
			)
		)
	)
		} catch (e) {
			m.reply(String(e))
		}
	}
	if (budy.startsWith('>')) {
		if (!isCreator) return m.reply(mess.owner)
		try {
			let evaled = await eval(budy.slice(2))
			if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
			await m.reply(evaled)
			} catch (err) {
				m.reply(String(err))
			}
		}
		if (budy.startsWith('$')) {
			if (!isCreator) return m.reply(mess.owner)
			exec(budy.slice(2), (err, stdout) => {
				if(err) return m.reply(err)
				if (stdout) return m.reply(stdout)
			}
		)
	}
	if (isCmd && budy.toLowerCase() != undefined) {
		if (m.chat.endsWith('status@broadcast')) return
		if (m.isBaileys) return
		let msgs = global.db.data.database
		if (!(budy.toLowerCase() in msgs)) return
		Seika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
	}
	} catch (e) {
		Seika.sendMessage(ownerNumb+"@s.whatsapp.net", { text: `Error: \n${e}` })
	}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
