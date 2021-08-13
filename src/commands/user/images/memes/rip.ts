import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class rip extends BotCommand {
    constructor() {
        super('rip', {
            aliases: ['rip'],
            description: 'Make someones funeral come early :)',
            usage: '$rip @user',
            cooldown: 5000,
            args: [
                {
                    id: 'userid',
                    type: 'user',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

                {
                    name: 'user',
                    description: "RIP",
                    type:'USER'
                }

            ],
        })
    }
    async exec(message, args) {
        try {

<<<<<<< HEAD
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
=======
            let user
            
            if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
            else user = message.author
    
            const img = await new DIG.Rip().getImage(user.displayAvatarURL({format:'png'}))
    
            const attach = new Discord.MessageAttachment(img, "rip.png");
    
            message.reply({ files: [attach]  })
    
            } catch (err) {
                message.reply("User must have sent a message before incorporating them with this command.")
            }
           
        }}
>>>>>>> 74b153700e636a8f014b9da90bc52e857b1774c0
