import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class notstonks extends BotCommand {
    constructor() {
        super('notstonks', {
            aliases: ['notstonks'],
            description: 'Thats not very stonks',
            cooldown: 5000,
            usage: '$notstonks @user',
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
                    description: "not stonks :(",
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
    
            const img = await new DIG.NotStonk().getImage(user.displayAvatarURL({format:'png'}))
    
            const attach = new Discord.MessageAttachment(img, "notverystonks.png");
    
            message.reply({ files: [attach]  })
    
            } catch (err) {
                message.reply("User must have sent a message before incorporating them with this command.")
            }
           
        }}