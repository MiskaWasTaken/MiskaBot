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
        
<<<<<<< HEAD
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'gif' });
=======
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
>>>>>>> 597d1bfa728b3314838e5880462da3a68beda7df
        // Make the image
        const img = await new DIG.Triggered().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.gif");

        message.reply({ files: [attach]  })
       
    }}