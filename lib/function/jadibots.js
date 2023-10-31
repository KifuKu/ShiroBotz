
const chalk = require("chalk")
const fs = require("fs")
const FileType = require("file-type")
const path = require("path")
const process = require("process")
const PhoneNumber = require("awesome-phonenumber")
const { Boom } = require("@hapi/boom")

const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }
const log = (pino = require("pino"));
const qrcode = require("qrcode");
const { smsg } = require('../function/myfunc')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (Seika, msg, from) => {
const { sendImage, sendMessage } = Seika;
const { reply, sender } = msg;

async function connectToJadibot() {
	const { state } = await useMultiFileAuthState('../jadibot/userJadibot/' + from)
	const Seika = makeWaSocket({
		logger: pino({ level: "silent" }).child({ level: "silent" }),
		printQRInTerminal: false,
		auth: state,
		browser: ["Jadibot By Seika", "Desktop", "3.0"]
	})

store.bind(Seika.ev)

Seika.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (!Seika.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
msg = smsg(Seika, m, store)
require('../message/msg')(Seika, msg, chatUpdate, store)
} catch (err) {
console.log(err)}})

Seika.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \nQR Expired dalam 30 detik', m)
console.log(connection)
if (connection == "open") {
Seika.id = Seika.decodeJid(Seika.user.id)
Seika.time = Date.now()
global.conns.push(Seika)
user = `${Seika.decodeJid(Seika.user.id)}`
txt = `*_Hallo ${ownerName}👋_*\n*Terdeteksi User Jadibot*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`${ownerNumb}@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectToWhatsApp() : ''
}
})

Seika.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Seika.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Seika.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

Seika.getName = (jid, withoutContact  = false) => {
id = Seika.decodeJid(jid)
withoutContact = Seika.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Seika.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Seika.decodeJid(Seika.user.id) ?
Seika.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Seika.public = true

Seika.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Seika.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const { getImg } = require('../function/functions')

Seika.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Seika.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Seika.sendButMessage = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Seika.sendMessage(jid, buttonMessage, { quoted, ...options })
}

}
connectToJadibot()
}

module.exports = { jadibot, conns }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})