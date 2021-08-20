import { BotCommand } from '@extensions/BotCommand';
const Math = require('math.js');

export default class google extends BotCommand {
    constructor() {
        super('google', {
            aliases: ['google'],
            description: 'Use Google Assistant to search something',
            usage: 'gassist',
            cooldown: 2000,
            args: [
              {
                  id: 'query',
                  type: 'string',
                  match: 'restContent'
              }
          ],

          slash:true,
          slashOptions:[
              {
                  name:'query',
                  description:'your query',
                  type:'STRING',
                  required: true
              }
          ],
            typing: true
        })
    }
    async exec(message, args) {



      const thinking = await message.reply(`<a:mthink:878148898366050314> Using all my braincells on your command`)

      const undefinedreplies = ["Uh oh, looks like I dont have a response for your message", "Try asking me again", "Maybe try asking me something else?", "Try asking me things like: Whats the day today? Whats the time today?", "Try saying somethine else", "no", "Better not tell you now.", "Sorry, I dont understand", "Can you try saying that again in a different way?", "never", "I don't understand", "I dont know.", "Sorry, I still don't understand", "Could you repeat that differently?", "Try asking me again", "Could you repeat that?", "Try asking me that differently", "Sorry could you repeat that differently?"];


      

        this.client.assistant.query(args.query || 'Hi')
  .then(async response => {

    if(response.text == undefined){

      const result = Math.floor((Math.random() * undefinedreplies.length));

      message.reply(undefinedreplies[result]);
      return;
 }
    
    thinking.edit(`${response.text}`)
  })
  .catch(err => {
    console.error('ERROR: ', err); 
    message.reply(`<:notlikethis:878263980647415838> This wasn't what was supposed to happen (an error occured)`)
  })
 
}}