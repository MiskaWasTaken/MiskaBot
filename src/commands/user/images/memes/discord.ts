import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('discord', {
            aliases: ['discord'],
            description: 'Discord',
            usage: '$discord @user',
        })
    }
    async exec(message) {

        const user = message.mentions.users.first() || message.author;
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });
        // Make the image
        const img = await new DIG.DiscordBlue().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}