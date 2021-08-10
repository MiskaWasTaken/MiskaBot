import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('discord', {
            aliases: ['discord'],
            description: 'Discord',
            usage: '$discord @user',
            cooldown: 5000,
            args: [
                {
                    id: 'userid',
                    type: 'user',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {
        
        const user = args.userid  || message.author
        
        if(!args.userid) return message.reply("Please mention a user, or yourself.")

<<<<<<< HEAD
        const avatar = user.userid.displayAvatarURL({ dynamic: false, format: 'jpg' });
=======
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });
>>>>>>> 597d1bfa728b3314838e5880462da3a68beda7df
        // Make the image
        const img = await new DIG.DiscordBlue().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}