module.exports = async (Seika, m) => {
try {
		let isNumber = x => typeof x === 'number' && !isNaN(x)
		let user = global.db.data.users[m.sender]
		const botNumber = await Seika.decodeJid(Seika.user.id)
		if (typeof user !== 'object') global.db.data.users[m.sender] = {}

		if (user) {
			if (!isNumber(user.afkTime))
				user.afkTime = -1
			if (!("afkReason" in user))
				user.afkReason = ""
			if (!isNumber(user.limit))
				user.limit = 100
			if (!isNumber(user.money))
				user.money = 100000
			if (!isNumber(user.exp))
				user.exp = 100
			if (!("premium" in user))
				user.premium = false
			if (!isNumber(user.premiumTime))
				user.premiumTime = 0
			if (!isNumber(user.role))
				user.role = 'Newbie ㋡'
			if (!isNumber(user.level))
				user.level = 0
			// Rpg Features 
			if (!isNumber(user.lastngw))
				user.lastngw = 0
			if (!isNumber(user.warn))
				user.warn = 0
			if (!isNumber(user.ngw))
				user.ngw = 0
			if (!isNumber(user.stamina))
				user.stamina = 100
			if (!isNumber(user.lastngocok))
				user.lastngocok = 0
			if (!isNumber(user.lastberburu))
				user.lastberburu = 0
			if (!isNumber(user.lastdagang))
				user.lastdagang = 0
			if (!isNumber(user.lastweekly))
				user.lastweekly = 0
			if (!isNumber(user.lasthunt))
				user.lasthunt = 0
			if (!isNumber(user.lastmulung))
				user.lastmulung = 0
			if (!isNumber(user.lastbunuh))
				user.lastbunuh = 0
			if (!isNumber(user.diamond))
				user.diamond = 0
			if (!isNumber(user.iron))
				user.iron = 0
			if (!isNumber(user.gold))
				user.gold = 0
			if (!isNumber(user.emerald))
				user.emerald = 0
			if (!isNumber(user.rock))
				user.rock = 0
			if (!isNumber(user.clay))
				user.clay = 0
			if (!isNumber(user.sands))
				user.sands = 0
			if (!isNumber(user.coal))
				user.coal = 0
			if (!isNumber(user.banteng))
				user.banteng = 0
			if (!isNumber(user.harimau))
				user.harimau = 0
			if (!isNumber(user.gajah))
				user.gajah = 0
			if (!isNumber(user.kambing))
				user.kambing = 0
			if (!isNumber(user.panda))
				user.panda = 0
			if (!isNumber(user.kerbau))
				user.kerbau = 0
			if (!isNumber(user.sapi))
				user.sapi = 0
			if (!isNumber(user.monyet))
				user.monyet = 0
			if (!isNumber(user.babihutan))
				user.babihutan = 0
			if (!isNumber(user.babi))
				user.babi = 0
			if (!isNumber(user.ayam))
				user.ayam = 0
			if (!isNumber(user.botol))
				user.botol = 0
			if (!isNumber(user.kaleng))
				user.kaleng = 0
			if (!isNumber(user.kardus))
				user.kardus = 0
			if (!isNumber(user.gelas))
				user.gelas = 0
			if (!isNumber(user.plastik))
				user.plastik = 0
			if (!isNumber(user.healt))
				user.healt = 100
			if (!isNumber(user.sword))
				user.sword = 100
			if (!isNumber(user.armor))
				user.armor = 100
			if (!isNumber(user.bunuh))
				user.bunuh = 0
				
			// Game Features
		} else {
			global.db.data.users[m.sender] = {
			afkTime: -1,
			afkReason: "",
			limit: 100,
			money: 100000,
			premium: false,
			premiumTime: 0,
			level: 0,
			// Rpg Features !!
			lastngw: 0,
			warn: 0,
			ngw: 0,
			stamina: 100,
			lastngocok: 0,
			lastberburu: 0,
			lastweekly: 0,
			lasthunt: 0,
			lastmulung: 0,
			lastbunuh: 0,
			diamond: 0,
			iron: 0,
			gold: 0,
			emerald: 0,
			rock: 0,
			clay: 0,
			sands: 0,
			coal: 0,
			banteng: 0,
			harimau: 0,
			kambing: 0,
			panda: 0,
			kerbau: 0,
			sapi: 0,
			monyet: 0,
			babihutan: 0,
			babi: 0,
			ayam: 0,
			botol: 0,
			kaleng: 0,
			kardus: 0,
			gelas: 0,
			plastik: 0,
			healt: 100,
			sword: 100,
			armor: 100,
			bunuh: 0
			
			// Game Features !!
		}
		}
		let chats = global.db.data.chats[m.chat]
		if (typeof chats !== 'object')
		global.db.data.chats[m.chat] = {}
		if (m.isGroup && chats) {
			if (!('mute' in chats))
				chats.mute = false
			if (!('welcome' in chats))
				chats.welcome = false
			if (!('detect' in chats))
				chats.detect = true
			if (!("antiLinkGc" in chats))
				chats.antiLinkGc = false
			if (!("autoKickBot" in chats))
				chats.autoKickBot = false
			if (!("antiviewOnce" in chats))
				chats.antiviewOnce = false
			if (!("antidelete" in chats))
				chats.antidelete = false
			if (!("autoLevelUp" in chats))
				chats.autoLevelUp = true
		} else 
			if (m.isGroup) global.db.data.chats[m.chat] = {
			mute: false,
			welcome: false,
			detect: true,
			antiLinkGc: false,
			autoKickBot: false,
			antiviewOnce: false,
			antidelete: false,
			autoLevelUp: true
		}
		let settings = global.db.data.settings[botNumber]
		if (typeof settings !== 'object') db.data.settings[botNumber] = {}
		if (settings) {
			if (!('self' in settings))
				settings.self = true
			if (!("autoResetLimit" in settings))
				settings.autoResetLimit = true
			if (!("botMode" in settings))
				settings.botMode = false
		} else {
			global.db.data.settings[botNumber] = {
			self: true,
			autoResetLimit: true,
			botMode: false
		}
		}
	  

} catch (err) {
console.log(err)
Seika.sendMessage(ownerNumb+'@s.whatsapp.net', { text: err }, { quoted: m })
}
}