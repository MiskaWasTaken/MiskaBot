import { BotCommand } from '@extensions/BotCommand';
const Math = require('math.js');

export default class ball extends BotCommand {
    constructor() {
        super('eightball', {
            aliases: ['eightball'],
            description: 'Ask me something',
            usage: '$present <text>',
            cooldown: 5000,
            args: [
                {
                    id: 'text',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash: true,
            slashOptions: [

                {
                    name: 'text',
                    description: "Your question",
                    type:'STRING',
                    required: true
                }

            ]

        })
    }
 


    async exec(message, args) {

        const replies = ["yes", "Outlook seems good", "yes", "of course", "Yes - definitely", "no", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*..", "not a chance", "I think so.", "only for today!", "not for today", "sadly..yes", "sadly no..", "maybe", "ask againlater..", "Yea probably", "Yea no", "lol of course not", "not sure", "woah my cap detectors are flying", "lets not talk about that", "but why do you need to know"];


        if (args.text){

            const result = Math.floor((Math.random() * replies.length));

            message.reply(replies[result]);
        }

        if (!args.text) return message.reply("Please provide a question!")

        }

}






