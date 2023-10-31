const fs = require("fs")
const chalk = require("chalk")
const { pickRandom } = require("../lib/function/myfunc")
const mot = pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪']) 

exports.menunya = (prefix) => {
return `╔──═⊱「 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}menu
╎⧎ ${prefix}bot
╎⧎ ${prefix}afk
╎⧎ ${prefix}delete
╎⧎ ${prefix}report < Laporan >
╎⧎ ${prefix}request < Nama Fitur & Pnjlasan >
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}owner
╎⧎ ${prefix}creator
╎⧎ ${prefix}limit
╎⧎ ${prefix}sc
╎⧎ ${prefix}runtime
╎⧎ ${prefix}totalcase
╎⧎ ${prefix}totalfitur
╎⧎ ${prefix}ping
╎⧎ ${prefix}speed
╎⧎ ${prefix}infobot
╎⧎ ${prefix}donasi
╎⧎ ${prefix}listsewa
╎⧎ ${prefix}sider
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}self
╎⧎ ${prefix}public
╎⧎ ${prefix}getcase
╎⧎ ${prefix}addcass
╎⧎ ${prefix}dellcase
╎⧎ ${prefix}addfile
╎⧎ ${prefix}setppbot
╎⧎ ${prefix}setppbotfull
╎⧎ ${prefix}o-hidetag
╎⧎ ${prefix}cekid
╎⧎ ${prefix}cekidgc
╎⧎ ${prefix}broadcastgroup
╎⧎ ${prefix}bcgc
╎⧎ ${prefix}culikmem
╎⧎ ${prefix}getsesi
╎⧎ ${prefix}getdb
╎⧎ ${prefix}addsewa
╎⧎ ${prefix}delsewa
╎⧎ ${prefix}leave
╎⧎ ${prefix}cheat
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗛𝗢𝗦𝗧 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}adduser *(ᴘᴀɴᴇʟ)*
╎⧎ ${prefix}deluser *(ᴘᴀɴᴇʟ)*
╎⧎ ${prefix}detuser *(ᴘᴀɴᴇʟ)*
╎⧎ ${prefix}addsrv *(ᴘᴀɴᴇʟ)*
╎⧎ ${prefix}spamsms
╎⧎ ${prefix}spamcall
╎⧎ ${prefix}kenon
╎⧎ ${prefix}unbanned
╎⧎ ${prefix}unbannedv2
╎⧎ ${prefix}unbannedv3
╎⧎ ${prefix}unbannedv4
╎⧎ ${prefix}unbannedv5
╎⧎ ${prefix}pushkontak *(ᴛᴇᴋs)*
╎⧎ ${prefix}pushkontakv1 *(ɪᴅɢᴄ|ᴛᴇᴋs)*
╎⧎ ${prefix}pushkontakv2 *(ᴛᴇᴋs)*
╎⧎ ${prefix}pushkontakv3 *(ɪᴅɢᴄ|ᴛᴇᴋs|ᴊᴇᴅᴀ)*
╎⧎ ${prefix}jpm *(ᴛᴇᴋs|ᴊᴇᴅᴀ)*
╎⧎ ${prefix}savecontact *(ɪᴅɢᴄ)*
╎⧎ ${prefix}getcontact 
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗔𝗜 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}googlebard
╎⧎ ${prefix}chatgpt3.5
╎⧎ ${prefix}text2img
╎⧎ ${prefix}midjourney
╎⧎ ${prefix}diffusion
╎⧎ ${prefix}ai
╎⧎ ${prefix}openai
╎⧎ ${prefix}jadianime
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}tagme
╎⧎ ${prefix}remini
╎⧎ ${prefix}hd
╎⧎ ${prefix}hd2
╎⧎ ${prefix}get
╎⧎ ${prefix}fetch
╎⧎ ${prefix}urltoimg < url >
╎⧎ ${prefix}npmsearch < search >
╎⧎ ${prefix}tourl 
╎⧎ ${prefix}getbio < tag user >
╎⧎ ${prefix}ssweb < url >
╎⧎ ${prefix}removebg
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}wpanime
╎⧎ ${prefix}waifu
╎⧎ ${prefix}neko
╎⧎ ${prefix}shinobu
╎⧎ ${prefix}bully
╎⧎ ${prefix}smile
╎⧎ ${prefix}kiss
╎⧎ ${prefix}awoo
╎⧎ ${prefix}megumin
╎⧎ ${prefix}kurumi
╎⧎ ${prefix}akira
╎⧎ ${prefix}emilia
╎⧎ ${prefix}elaina
╎⧎ ${prefix}loli
╎⧎ ${prefix}akiyama
╎⧎ ${prefix}nezuko
╎⧎ ${prefix}husbu
╎⧎ ${prefix}doraemon
╎⧎ ${prefix}miku
╎⧎ ${prefix}hitori
╎⧎ ${prefix}asuna
╎⧎ ${prefix}ana
╎⧎ ${prefix}ayuzawa
╎⧎ ${prefix}boruto
╎⧎ ${prefix}chitanda
╎⧎ ${prefix}chitoge
╎⧎ ${prefix}deidara
╎⧎ ${prefix}erza
╎⧎ ${prefix}gremory
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}simi < text >
╎⧎ ${prefix}apakah < text >
╎⧎ ${prefix}bisakah < text >
╎⧎ ${prefix}bagaimakah < text >
╎⧎ ${prefix}rate < text >
╎⧎ ${prefix}cekmemek
╎⧎ ${prefix}masadepan
╎⧎ ${prefix}kulitkerang
╎⧎ ${prefix}gayy
╎⧎ ${prefix}gaycek
╎⧎ ${prefix}ceksifat
╎⧎ ${prefix}jadian
╎⧎ ${prefix}namaninja
╎⧎ ${prefix}wibucek
╎⧎ ${prefix}nenen
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}family100 *(ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ)*
╎⧎ ${prefix}tebakbom
╎⧎ ${prefix}tebakgambar
╎⧎ ${prefix}caklontong
╎⧎ ${prefix}susunkata
╎⧎ ${prefix}asahotak
╎⧎ ${prefix}tebakkata
╎⧎ ${prefix}tekateki
╎⧎ ${prefix}tebakkimia
╎⧎ ${prefix}siapakahaku
╎⧎ ${prefix}tebaklirik
╎⧎ ${prefix}slot *(ᴊᴜᴍʟᴀʜ)*
╎⧎ ${prefix}tebakanime
╎⧎ ${prefix}suit
╎⧎ ${prefix}tebakbendera
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}ngewe
╎⧎ ${prefix}ngocok
╎⧎ ${prefix}berburu
╎⧎ ${prefix}berdagang
╎⧎ ${prefix}mulung
╎⧎ ${prefix}hunt
╎⧎ ${prefix}mancing
╎⧎ ${prefix}bunuh
╎⧎ ${prefix}karung
╎⧎ ${prefix}profile
╎⧎ ${prefix}myprofile
╎⧎ ${prefix}weekly *(ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ)*
╎ * [ ʏɢ ʟᴀᴇɴ ɴʏᴜsᴜʟ ]*
╚─╌╌═⊱ ${wm}


╔──═⊱「 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}add
╎⧎ ${prefix}kick
╎⧎ ${prefix}promote
╎⧎ ${prefix}demote
╎⧎ ${prefix}hidetag
╎⧎ ${prefix}tagall
╎⧎ ${prefix}ceknamegroup
╎⧎ ${prefix}setdescgroup
╎⧎ ${prefix}setppgroup
╎⧎ ${prefix}totag
╎⧎ ${prefix}group [ Oᴘᴇɴ / Cʟᴏsᴇ ]
╎⧎ ${prefix}enable [ Tʏᴘᴇ ]
╎⧎ ${prefix}disable [ Tʏᴘᴇ ]
╎⧎ ${prefix}getppgc
╎⧎ ${prefix}getdeskgc
╎⧎ ${prefix}setgcname
╎⧎ ${prefix}tagme
╎⧎ ${prefix}sticktag
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}darkjokes
╎⧎ ${prefix}cerpen
╎⧎ ${prefix}quotes
╎⧎ ${prefix}quotesanime
╎⧎ ${prefix}bucin
╎⧎ ${prefix}cersex
╎⧎ ${prefix}quotesyt
╎⧎ ${prefix}katailham
╎⧎ ${prefix}gombal
╎⧎ ${prefix}renungan
╎⧎ ${prefix}truth
╎⧎ ${prefix}dare
╎⧎ ${prefix}darkjoke
╎⧎ ${prefix}hacker
╎⧎ ${prefix}sindiran
╎⧎ ${prefix}katabijak
╎⧎ ${prefix}pantunpakboy
╎⧎ ${prefix}pantun
╎⧎ ${prefix}faktaunik
╎⧎ ${prefix}bacot
╎⧎ ${prefix}quotesanimesad
╎⧎ ${prefix}cerpensearch
╎⧎ ${prefix}cerpenhorror
╎⧎ ${prefix}meme
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」─═⬣
╎
┣─═⊱〖 *ᴛᴇxᴛᴘʀᴏ* 〗
╎⧎ ${prefix}glowing-3D-neon *< ᴛᴇxᴛ >*
╎⧎ ${prefix}sunset-light *< ᴛᴇxᴛ >*
╎⧎ ${prefix}gradient-neon-light *< ᴛᴇxᴛ >*
╎⧎ ${prefix}neon-light-blackpink *< ᴛᴇxᴛ >*
╎⧎ ${prefix}light-glow-sliced *< ᴛᴇxᴛ >*
╎⧎ ${prefix}neon-love *< ᴛᴇxᴛ >*
╎⧎ ${prefix}online-thunder *< ᴛᴇxᴛ >*
╎⧎ ${prefix}3Dneon *< ᴛᴇxᴛ >*
╎⧎ ${prefix}neon-devil-wings *< ᴛᴇxᴛ >*
╎⧎ ${prefix}glitch *< 𝚃𝙴𝚇𝚃 > | < 𝚃𝙴𝚇𝚃 >*
╎⧎ ${prefix}neon-light *< ᴛᴇxᴛ >*
╎⧎ ${prefix}matrix-style *< ᴛᴇxᴛ >*
╎⧎ ${prefix}neon *< ᴛᴇxᴛ >*
╎⧎ ${prefix}bokeh *< ᴛᴇxᴛ >*
╎⧎ ${prefix}advanced-glow *< ᴛᴇxᴛ >*
╎⧎ ${prefix}titanium *< ᴛᴇxᴛ >*
╎⧎ ${prefix}grunge-metallic-3D *< ᴛᴇxᴛ >*
╎⧎ ${prefix}3D-metallic *< ᴛᴇxᴛ >*
╎⧎ ${prefix}3D-comic *< ᴛᴇxᴛ >*
╎⧎ ${prefix}realistic-golden *< ᴛᴇxᴛ >*
╎⧎ ${prefix}white-gold-3D *< ᴛᴇxᴛ >*
╎⧎ ${prefix}thor-logo-style *< ᴛᴇxᴛ >*
╎⧎ ${prefix}realistic-3D-moss *< ᴛᴇxᴛ >*
╎⧎ ${prefix}shiny-black-3D *< ᴛᴇxᴛ >*
╎⧎ ${prefix}gradient-text-shadow *< ᴛᴇxᴛ >*
╎⧎ ${prefix}naruto-logo-style *< ᴛᴇxᴛ >*
╎⧎ ${prefix}3D-hallowen *< ᴛᴇxᴛ >*
╎⧎ ${prefix}led < text >
╎⧎ ${prefix}3Dgolden < ᴛᴇxᴛ >
╎⧎ ${prefix}3Drainbow < ᴛᴇxᴛ >
╎⧎ ${prefix}christmas < ᴛᴇxᴛ >
╎⧎ ${prefix}hallowenskeleton < ᴛᴇxᴛ >
╎⧎ ${prefix}magma < ᴛᴇxᴛ >
╎⧎ ${prefix}space < ᴛᴇxᴛ >
╎⧎ ${prefix}1917Style < ᴛᴇxᴛ >
╎⧎ ${prefix}3Ddeepseametal < ᴛᴇxᴛ >
╎
┣─═⊱〖 *ᴇᴘʜᴏᴛᴏ* 360 〗
╎⧎ ${prefix}blackpink < text >
╎⧎ ${prefix}avengers < ᴛᴇxᴛ >
╎⧎ ${prefix}bear < ᴛᴇxᴛ >
╎⧎ ${prefix}angel < ᴛᴇxᴛ >
╎⧎ ${prefix}queen < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-1 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-2 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-3 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-4 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-5 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-6 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-7 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-8 < ᴛᴇxᴛ >
╎⧎ ${prefix}team-logo-ninja-9 < ᴛᴇxᴛ >
╎⧎ ${prefix}captain-america < ᴛᴇxᴛ >
╎⧎ ${prefix}graffiti < 𝚃𝙴𝚇𝚃 > | < 𝚃𝙴𝚇𝚃 >
╎⧎ ${prefix}pornhub < 𝚃𝙴𝚇𝚃 > | < 𝚃𝙴𝚇𝚃 >
╎
┣─═⊱〖 *ᴘʜᴏᴛᴏᴏxʏ* 〗
╎⧎
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}jadwalsholat < kota >
╎⧎ ${prefix}islamic
╎⧎ ${prefix}niatsholat
╎⧎ ${prefix}renungan_islam
╎⧎ ${prefix}kisahnabi_adam
╎⧎ ${prefix}kisahnabi_ayub
╎⧎ ${prefix}kisahnabi_daud
╎⧎ ${prefix}kisahnabi_dzulkifli
╎⧎ ${prefix}kisahnabi_harun
╎⧎ ${prefix}kisahnabi_hud
╎⧎ ${prefix}kisahnabi_ibrahim
╎⧎ ${prefix}kisahnabi_idris
╎⧎ ${prefix}kisahnabi_ilyas
╎⧎ ${prefix}kisahnabi_ilyasa
╎⧎ ${prefix}kisahnabi_isa
╎⧎ ${prefix}kisahnabi_ishaq
╎⧎ ${prefix}kisahnabi_ismail
╎⧎ ${prefix}kisahnabi_luth
╎⧎ ${prefix}kisahnabi_muhammad
╎⧎ ${prefix}kisahnabi_musa
╎⧎ ${prefix}kisahnabi_nuh
╎⧎ ${prefix}kisahnabi_sholeh
╎⧎ ${prefix}kisahnabi_sulaiman
╎⧎ ${prefix}kisahnabi_syuaib
╎⧎ ${prefix}kisahnabi_yaqub
╎⧎ ${prefix}kisahnabi_yunus
╎⧎ ${prefix}kisahnabi_yusuf
╎⧎ ${prefix}kisahnabi_zakariya
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}sticker
╎⧎ ${prefix}stickergif
╎⧎ ${prefix}swm
╎⧎ ${prefix}smeme
╎⧎ ${prefix}qc < text >
╎⧎ ${prefix}stickersearch [ Search ]
╎⧎ ${prefix}ttp
╎⧎ ${prefix}stickermeta
╎⧎ ${prefix}stickeravatar
╎⧎ ${prefix}anticolong
╎⧎ ${prefix}emojimix 
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗖𝗢??𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}toimg
╎⧎ ${prefix}toptv
╎⧎ ${prefix}tomp3
╎⧎ ${prefix}tomp4
╎⧎ ${prefix}toaudio
╎⧎ ${prefix}tovn
╎⧎ ${prefix}togif
╎⧎ ${prefix}tobass
╎⧎ ${prefix}toblown
╎⧎ ${prefix}todeep
╎⧎ ${prefix}toearrape
╎⧎ ${prefix}tofast
╎⧎ ${prefix}tofat
╎⧎ ${prefix}tonightcore
╎⧎ ${prefix}toreverse
╎⧎ ${prefix}torobot
╎⧎ ${prefix}toslow
╎⧎ ${prefix}tosmooth
╎⧎ ${prefix}tosquirrel
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}tiktokdl < link >
╎⧎ ${prefix}tiktok < link >
╎⧎ ${prefix}play < judul >
╎⧎ ${prefix}gitclone < url >
╎⧎ ${prefix}ytmp3 < link >
╎⧎ ${prefix}ytmp4 < link >
╎⧎ ${prefix}fbdl < link >
╎⧎ ${prefix}igdl < link >
╎⧎ ${prefix}mediafire < link >
╎⧎ ${prefix}ytsearch < text >
╎⧎ ${prefix}tiktokmp3
╎⧎ ${prefix}twitterdl
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 *INTERNET MENU* 」─═⬣
╎
╎⧎ ${prefix}pinterest < search >
╎⧎ ${prefix}kusonime < search >
╎⧎ ${prefix}wallpaper < search >
╎⧎ ${prefix}googleimage
╎⧎ ${prefix}gimage
╎⧎ ${prefix}lyrics [ Jᴜᴅᴜʟ Lᴀɢᴜ ]
╎⧎ ${prefix}kbbi < sᴇᴀʀᴄʜ >
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 *PRIMBON MENU* 」─═⬣
╎
╎⧎ ${prefix}nomorhoki
╎⧎ ${prefix}artimimpi
╎⧎ ${prefix}ramalanjodoh
╎⧎ ${prefix}ramalanjodohbali
╎⧎ ${prefix}suami_istri
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 *BERITA MENU* 」─═⬣
╎
╎⧎ ${prefix}cnnnews
╎⧎ ${prefix}inews
╎⧎ ${prefix}dailynews
╎⧎ ${prefix}detiknews
╎⧎ ${prefix}okezonenews
╎⧎ ${prefix}cnbcnews
╎⧎ ${prefix}kompasnews
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}jadibot ⓟ
╎⧎ ${prefix}stopjadibot ⓟ
╎⧎ ${prefix}listjadibot ⓟ
╎⧎ ${prefix}gore ⓟ
┣─═⊱「  18+ 」
╎⧎ ${prefix}xnxxsearch ⓟ
╎⧎ ${prefix}pornhubsearch ⓟ
╎⧎ ${prefix}xvideossearch ⓟ
╎⧎ ${prefix}vbokep ⓟ
┣─═⊱「  ɴsғᴡ  」
╎⧎ ${prefix}fourk
╎⧎ ${prefix}blowjob
╎⧎ ${prefix}boobs
╎⧎ ${prefix}cum
╎⧎ ${prefix}hentai
╎⧎ ${prefix}yuri
╎  Dosa Ah 🗿
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}addmsg
╎⧎ ${prefix}getmsg
╎⧎ ${prefix}listmsg
╎⧎ ${prefix}delmsg
╎⧎ ${prefix}addcmd
╎⧎ ${prefix}setcmd
╎⧎ ${prefix}delcmd
╎⧎ ${prefix}listcmd
╎⧎ ${prefix}ceklimit
╎⧎ ${prefix}backup
╎
╚─╌╌═⊱ ${wm}

╔──═⊱「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」─═⬣
╎
╎⧎ ${prefix}mangkane1
╎⧎ ${prefix}mangkane2
╎⧎ ${prefix}mangkane3
╎⧎ ${prefix}mangkane4
╎⧎ ${prefix}mangkane5
╎⧎ ${prefix}mangkane6
╎⧎ ${prefix}mangkane7
╎⧎ ${prefix}mangkane8
╎⧎ ${prefix}mangkane9
╎⧎ ${prefix}mangkane10
╎⧎ ${prefix}mangkane11
╎⧎ ${prefix}mangkane12
╎⧎ ${prefix}mangkane13
╎⧎ ${prefix}mangkane14
╎⧎ ${prefix}mangkane15
╎⧎ ${prefix}mangkane16
╎⧎ ${prefix}mangkane17
╎⧎ ${prefix}mangkane18
╎⧎ ${prefix}mangkane19
╎⧎ ${prefix}mangkane20
╎⧎ ${prefix}mangkane21
╎⧎ ${prefix}mangkane22
╎⧎ ${prefix}mangkane23
╎⧎ ${prefix}mangkane24
╎⧎ ${prefix}mangkane25
╎⧎ ${prefix}mangkane26
╎⧎ ${prefix}mangkane27
╎⧎ ${prefix}mangkane28
╎⧎ ${prefix}mangkane29
╎⧎ ${prefix}mangkane30
╎⧎ ${prefix}mangkane31
╎⧎ ${prefix}mangkane32
╎⧎ ${prefix}mangkane33
╎⧎ ${prefix}mangkane34
╎⧎ ${prefix}mangkane35
╎⧎ ${prefix}mangkane36
╎⧎ ${prefix}mangkane37
╎⧎ ${prefix}mangkane38
╎⧎ ${prefix}mangkane39
╎⧎ ${prefix}mangkane40
╎
╚─╌╌═⊱ ${wm}

*Sedang Dalam Tahap Pengembangan*`
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

