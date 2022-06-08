let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable nsfw*'
heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©𝐔𝐧 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭𝐬𝐢𝐭𝐨 𓃵', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(foot|nsfwfoot)$/i
module.exports = handler
