const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "airdrop",
        version: "1.0",
        countDown: 20,
        role: 0,
        author: "dipto",
        description: "Airdrop links and channel info",
        category: "general",
        guide: "{p}airdrop"
    },
    onStart: async ({ api, message, event }) => {
        try {
            const botName = "Miuki";
            const channelLink = "https://t.me/sakibin_sinha";
            const airdropLinks = [
               { text: "Moonbix🌕", url: "https://t.me/Binance_Moonbix_bot/start?startapp=ref_5349003018&startApp=ref_5349003018" },
              { text: "Grand Kombat🕹️", url: "https://t.me/grandcombat_bot/start?startapp=FTKTlthS3W" }
            ];

            const now = moment().tz('Asia/Dhaka');
            const date = now.format('MMMM Do YYYY');
            const time = now.format('h:mm:ss A');

            const buttons = {
                inline_keyboard: [
                    [{ text: "Join Channel", url: channelLink }],
                    [{ text: "Ducks🦆", url: "https://t.me/duckscoop_bot/app?startapp=6DJW0ac2Zy" }, 
                { text: "CEX.IO☯️", url: "https://t.me/cexio_tap_bot?start=1717081239790594" }],
                    [ { text: "Rats🐀", url: "http://t.me/RatsKingdom_Bot/join?startapp=66df0979919870e8f99b34ec" },
                { text: "YesCoin🪙", url: "https://t.me/theYescoin_bot/Yescoin?startapp=OUkvVZ" }],
                    airdropLinks
                ]
            };

            const caption = `🌟
Welcome to ${botName}'s Airdrop🎁 Section!
╰‣ Date: ${date} Time: ${time} 
💎 Check out the Verified☑️ airdrop links below!`;

            await api.sendMessage(event.chat.id, caption, {
                reply_markup: JSON.stringify(buttons)
            });
        } catch (error) {
            console.error("Error in airdrop command:", error);
        }
    },
    onChat: async function ({ event, message }) {
        if (event.body?.toLowerCase() === "airdrop") {
            this.onStart({ api: message.api, message, event });
        }
    }
};
