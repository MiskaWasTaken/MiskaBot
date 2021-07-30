import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('trigger', {
            aliases: ['trigger'],
            description: 'trigger someone kek',
            usage: '$blink @user',
        })
    }
    async exec(message) {

//nothing to do here but, if user mentions a role make it say "please do not mention a role. instead mention a user or yourself"
        const user = message.mentions.users.first() || message.author;
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });


        // Make the image
        const img = await new DIG.Triggered().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.gif");

        message.reply({ files: [attach]  })
       
    }}