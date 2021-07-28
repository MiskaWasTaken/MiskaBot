import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('doublestonks', {
            aliases: ['doublestonks'],
            description: 'doublestonks',
            usage: '$doublestonks @user',
        })
    }
    async exec(message) {

        const user = message.mentions.users.first() 
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });

        const user2 = message.author

        const avatar2 = user2.displayAvatarURL({ dynamic: false, format: 'jpg' });


        // Make the image
        const img = await new DIG.DoubleStonk().getImage(avatar2, avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}