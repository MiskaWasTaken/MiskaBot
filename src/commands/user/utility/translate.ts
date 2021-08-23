import { BotCommand } from '@extensions/BotCommand';
const translates = require('@vitalets/google-translate-api');
import { MessageEmbed } from "discord.js"

export default class translate extends BotCommand {
    constructor() {
        super('translate', {
            aliases: ['translate'],
            description: 'Translate text to different languages',
            usage: 'gassist',
            cooldown: 5000,
            args: [
                {
                    id: 'translatefrom',
                    type: 'string',
                    match: 'restContent'
                },

                {
                    id: 'translateto',
                    type: 'string',
                    match: 'restContent'
                },

              {
                  id: 'yourquery',
                  type: 'string',
                  match: 'restContent'
              }
          ],

          slash:true,
          slashOptions:[


            {
                name:'translateto',
                description:'ISO code of the language you want to translate to',
                type:'STRING',
                required: true
            },

              {
                  name:'yourquery',
                  description:'The text you would like me to translate',
                  type:'STRING',
                  required: true
              },

              {
                name:'translatefrom',
                description:'ISO code of the language you want to translate from | leave blank for auto-detect language',
                type:'STRING',
                required: false
            },
          ],
            typing: true
        })
    }
    async exec(message, args) {


        const query = args.yourquery
        const translatefrom = args.translatefrom
        const translateto = args.translateto  
        

        translates(query, message, {from: translatefrom, to: translateto}).then(res => {


            if(translatefrom == undefined){
                
                const translateto = args.translateto
                const result = new MessageEmbed()
                .setColor("RANDOM") 
                .setTitle(`Translation of: ${query}. Translate from: ${res.from.language.iso} (auto-detect), Translate to: ${translateto}`)  
                .setDescription(`Translated text: ${res.text}`)
                .setURL('https://discordbotlist.com/bots/miska-bot')
                message.reply({ embeds: [result] });
                return;
            }

            const result = new MessageEmbed()
            .setColor("RANDOM") 
            .setTitle(`Translation of: ${query}. Translate from: ${translatefrom}, Translate to: ${translateto}`)  
            .setDescription(`Translated text: ${res.text}`)
            .setURL('https://discordbotlist.com/bots/miska-bot')

            message.reply({ embeds: [result] });
        }).catch(err => {
            console.error(err);
            message.reply(`<:notlikethis:878263980647415838> This wasn't what was supposed to happen (you entered an invalid ISO code, or google return an invalid response.)`)
        });
    }}