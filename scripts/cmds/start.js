const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "start",
        version: "1.0",
        countDown: 20,
        role: 0,
        author: "dipto",
        description: "Bot start information",
        category: "general",
        guide: "{p}start"
    },
    onStart: async ({ api, message, event }) => {
        try {
            const botName = "Your Baby";
            const welcomeMessage = "\nJoin our Telegraph channel:\nhttps://t.me/sakibin_sinha.\n Use /help or /info";
            const helpLink = "https://t.me/+9hyN_NodFjo4MmFl";
            const contactLink = "https://m.facebook.com/imsakinin007";

            const now = moment().tz('Asia/Dhaka');
            const date = now.format('MMMM Do YYYY');
            const time = now.format('h:mm:ss A');

            const buttons = {
                inline_keyboard: [
                    [
                        { text: "Join Group", url: helpLink },
                        { text: "Owner", url: contactLink }
                    ]
                ]
            };

            const caption = `
Welcome to ${botName}!
╰‣ Date: ${date}
╰‣ Time: ${time}
${welcomeMessage}`;

            // Telegram API expects 'text' and 'reply_markup' to be directly passed in the method
            await api.sendMessage(event.chat.id, caption, {
                reply_markup: JSON.stringify(buttons) // Properly stringify the buttons object
            });
        } catch (error) {
            console.error("Error in start command:", error);
        }
    },
    onChat: async function ({ event, message }) {
        if (event.body?.toLowerCase() === "start") {
            this.onStart({ api: message.api, message, event });
        }
    }
};
