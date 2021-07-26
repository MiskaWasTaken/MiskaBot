import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('blur', {
            aliases: ['blur'],
            description: 'blur someone kek',
            usage: '$blur @user',
        })
    }
    async exec(message) {
        
        const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        const img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply(attach)
       
    }   


    }