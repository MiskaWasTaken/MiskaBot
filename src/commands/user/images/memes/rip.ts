import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('rip', {
            aliases: ['rip'],
            description: 'rip',
            usage: '$rip @user',
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
        
<<<<<<< HEAD
        if(!args.userid) return message.reply("Please mention a user, or yourself.")
=======
       if(!args.userid) return message.reply("Please mention a user, or yourself.")
>>>>>>> 597d1bfa728b3314838e5880462da3a68beda7df

        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });
        // Make the image
        const img = await new DIG.Rip().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}