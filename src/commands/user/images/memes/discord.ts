import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class discord extends BotCommand {
    constructor() {
        super('discord', {
            aliases: ['discord'],
            description: 'Discord filter someone',
            usage: '$discord @user',
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
                    description: "The user you want to discord filter",
                    type:'USER'
                }

            ],

            
        })
    }
    async exec(message, args) {
        
<<<<<<< HEAD
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
=======
        try {
>>>>>>> 74b153700e636a8f014b9da90bc52e857b1774c0

            let user
            
            if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
            else user = message.author
    
            const img = await new DIG.DiscordBlue().getImage(user.displayAvatarURL({format:'png'}))
    
            const attach = new Discord.MessageAttachment(img, "discordblue.png");
    
            message.reply({ files: [attach]  })
    
            } catch (err) {
                message.reply("User must have sent a message before incorporating them with this command.")
            }
           
        }}