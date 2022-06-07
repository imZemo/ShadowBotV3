let handler = async m => m.reply(`
vacio igual que el corazon de tu ex xd
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
