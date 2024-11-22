const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "tron",
        version: "1.0",
        countDown: 5,
        role: 0,
        author: "dipto",
        description: "Owner information",
        category: "owner",
        guide: "{p}"
    },
  onStart: async ({ api, message ,event }) => {
        try {
            const botName = "Your Baby";
            const botPrefix = "/";
            const authorName = "亗 SAKIBIN 亗";
            const ownAge = "20";
            const teamName = "Noobs team";
      const authorFB = "https://m.facebook.com/imsakibin007";
          const authorInsta = "@imsakibin007";
  const link = "https://i.ibb.co.com/TK3HK9n/Screenshot-20241122-171500-1.jpg";
        const now = moment().tz('Asia/Dhaka');
      const date = now.format('MMMM Do YYYY');
          const time = now.format('h:mm:ss A');
            const uptime = process.uptime();
      const seconds = Math.floor(uptime % 60);
const minutes = Math.floor((uptime / 60) % 60);
const hours = Math.floor((uptime / (60 * 60)) % 24);
const days = Math.floor(uptime / (60 * 60 * 24));
const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
            const buttons = {
                inline_keyboard: [
                    [
        { text: "Start💲", url:`https://t.me/TronKeeperBot/app?startapp=5349003018` }
                    ]
                ]
            };

            const caption = `🌟 Tron wallet Giving 0.25$ per raffer. 10$ Joining bonus💸🤑`;

            const hh = await api.sendPhoto(event.chat.id ,link, {caption: caption, reply_markup: buttons });
            setTimeout(() => {
             message.unsend(hh.message_id);
            }, 400000000);
        } catch (error) {
            console.error("Error reading config file:", error);
        }
    },
    onChat: async function ({ event, message }) {
        if (event.body?.toLowerCase() === "info" || event.body?.toLowerCase() === "owner") {
            this.onStart({ message });
        }
    }
};
