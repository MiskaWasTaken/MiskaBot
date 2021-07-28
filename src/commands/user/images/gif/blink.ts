import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('blink', {
            aliases: ['blink'],
            description: 'blink someone kek',
            usage: '$blink @user',
        })
    }
    async exec(message) {

        const user = message.mentions.users.first() 
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });

        const user2 = message.author

        const avatar2 = user2.displayAvatarURL({ dynamic: false, format: 'jpg' });


        // Make the image
        const img = await new DIG.Blink().getImage(avatar, avatar2)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.gif");

        message.reply({ files: [attach]  })
       
    }}