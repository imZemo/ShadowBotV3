let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
let url = pack[Math.floor(Math.random() * pack.length)]
await conn.sendMessage(m.chat, {
contentText: '*_©𝐔𝐧 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭𝐬𝐢𝐭𝐨 𓃵_*',
footerText: '𝐔𝐧 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭𝐬𝐢𝐭𝐨 𓃵',
buttons: [
{ buttonId: '.pack', buttonText: { displayText: 'SIGUIENTE' }, type: 1 }
],
headerType: 4,
imageMessage: (await conn.prepareMessageMedia(await (await fetch(url)).buffer(), 'imageMessage', {})).imageMessage
}, 'buttonsMessage', { quoted: m })
}
handler.command = /^(pack)$/i
handler.tags = ['internet']
handler.help = ['pack']
module.exports = handler

global.pack = [
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg",
]
