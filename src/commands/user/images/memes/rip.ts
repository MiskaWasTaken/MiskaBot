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