import { BotListener } from '@extensions/BotListener';
const Math = require('math.js');

class chatbot extends BotListener {
    constructor() {
        super('chatbot', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    async exec(message) {

        if(message.channel.name == 'chat-bot') {

            if(!message.guild.me.permissions.toArray().includes('MANAGE_MESSAGES')) return message.reply("Sorry I need the permission 'Manage Messages' once you have granted me that permission I will be happy to assist you. Looking forward to helping out :blush:")

            if (message.author.id == this.client.user.id) return


            const undefinedreplies = ["Uh oh, looks like I dont have a response for your message", "Try asking me again", "Maybe try asking me something else?", "Try asking me things like: Whats the day today? Whats the time today?", "Try saying somethine else", "no", "Better not tell you now.", "Sorry, I dont understand", "Can you try saying that again in a different way?", "never", "I don't understand", "I dont know.", "Sorry, I still don't understand", "Could you repeat that differently?", "Try asking me again", "Could you repeat that?", "Try asking me that differently", "Sorry could you repeat that differently?"];


                    message.react('<a:gload:878279436661850112>')
                
    
                this.client.assistant.query(message.content)
          .then(response => {

            if(response.text == undefined){

                const result = Math.floor((Math.random() * undefinedreplies.length));

                message.reply(undefinedreplies[result]);
                return;
           }
            
            message.reply(`${response.text}`) 
          })
          .catch(err => {
            console.error('ERROR: ', err); 
            message.reply(`<:notlikethis:878263980647415838> This wasn't what was supposed to happen (an error occured)`)
          })
                  if(message.content.includes('@')){
          return message.reply('I am too powerful for your tricks'); 
        } 

        setTimeout(() => {
            message.reactions.removeAll()
            .catch(error => console.error('Failed to clear reactions:', error));
          }, 1000);
    
            }
        }
    }

module.exports = chatbot;