import { BotListener } from '@extensions/BotListener';
const fetch = require('node-fetch');

class chatbot extends BotListener {
    constructor() {
        super('chatbot', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    async exec(message) {

        if(message.channel.name == 'chat-bot') {
            if (message.author.id == this.client.user.id) return
            fetch.default(`https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(message.content)}&uid=${message.author.id}`)
            .then(res => res.json())
            .replace('Aco', 'Miska Bot')
            .then(data => {
                
              if(message.content.includes('@')){
      return message.reply('I am too powerful for your tricks'); 
    } 
                message.reply(data.response)
            })
        }
    }
}

module.exports = chatbot;