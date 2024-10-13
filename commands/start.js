let webPage =
  "https://m.youtube.com/shorts/"
Api.sendMessage({
  text:
    "*Gᴏ Bᴇʟᴏᴡ Tᴏ Vɪᴇᴡ YᴏᴜTᴜʙᴇ Sʜᴏʀᴛs*\n\n*Pᴏᴡᴇʀᴇᴅ Bʏ »» @HarshithXBot*",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: " 😃YᴏᴜTᴜʙᴇ Sʜᴏʀᴛs😃", web_app: { url: webPage } }]
  },
  parse_mode: "Markdown"
}
