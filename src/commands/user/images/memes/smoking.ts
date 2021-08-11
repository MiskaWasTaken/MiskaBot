import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('smoking', {
            aliases: ['smoking'],
            description: 'Dont do it',
            usage: '$smoking @user',
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
                    description: "The user you want to affect",
                    type:'USER',
                    required: false
                }

            ]

        })
    }
    async exec(message, args) {
        try {

            let user
            
            if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
            else user = message.author
    
            const img = await new DIG.Affect().getImage(user.displayAvatarURL({format:'png'}))
    
            const attach = new Discord.MessageAttachment(img, "affect.png");
    
            message.reply({ files: [attach]  })
    
            } catch (err) {
                message.reply("User must have sent a message before incorporating them with this command.")
            }
           
        }}