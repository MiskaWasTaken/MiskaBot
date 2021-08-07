import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class trigger extends BotCommand {
    constructor() {
        super('trigger', {
            aliases: ['trigger'],
            description: 'trigger someone kek',
            usage: '$blink @user',
            cooldown: 5000,
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                }
            ],
        })
    }
    async exec(message, args) {
        const user = args.user || message.author

        if(!user) return message.reply("Please mention a user")
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        // Make the image
        const img = await new DIG.Triggered().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.gif");

        message.reply({ files: [attach]  })
       
    }}