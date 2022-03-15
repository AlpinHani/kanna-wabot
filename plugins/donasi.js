let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝‷✧ *Pulsa:* 6282287750102
│┝‷✧ *Dana:* 6282287750102
│┝‷✧ *Linkaja:* 6282287750102
│┝‷✧ *Gopay:* 6282287750102
│┝‷✧ *Ovo:* 6282287750102
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6282287750102?text=kak+mau+donasi
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Owner', '.owner')

module.exports = handler

let wm = global.botwm
