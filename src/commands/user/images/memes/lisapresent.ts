import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('present', {
            aliases: ['present'],
            description: 'present something',
            usage: '$present <text>',
            args: [
                {
                    id: 'text',
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }

    
    async exec(message, args) {

        const texts = args.text

        // Make the image
        const img = await new DIG.LisaPresentation().getImage(texts)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}