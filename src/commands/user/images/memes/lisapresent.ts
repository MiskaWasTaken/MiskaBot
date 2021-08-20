import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class present extends BotCommand {
    constructor() {
        super('present', {
            aliases: ['present'],
            description: 'Present something',
            usage: '$present <text>',
            cooldown: 5000,
            args: [
                {
                    id: 'text',
                    type: 'string',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

                {
                    name: 'text',
                    description: "The text you would like to present",
                    type:'STRING',
                    required: true
                }

            ]

        })
    }

    
    async exec(message, args) {



        const texts = args.text
        
        if(!args.text) return message.reply("Please provide text. Maximum charecters are 300")

        // Make the image
        const img = await new DIG.LisaPresentation().getImage(texts)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "present.png");

        message.reply({ files: [attach]  })
       
    }}