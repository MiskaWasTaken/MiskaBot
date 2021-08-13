import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class pride extends BotCommand {
    constructor() {
        super('pride', {
            aliases: ['pride'],
            description: 'Pride filter someone',
            usage: '$pride @user',
            cooldown: 5000,
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

                {
                    name: 'user',
                    description: "The person you want to pride filter",
                    type:'USER'
                }

            ]


        })
    }
    async exec(message, args) {

        try {
        

        
        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

        const img = await new DIG.Gay().getImage(user.displayAvatarURL({format:'png'}))

        const attach = new Discord.MessageAttachment(img, "pride.png");

        message.reply({ files: [attach]  })

        } catch (err) {
            message.reply("User must have sent a message before incorporating them with this command.")
        }
       
    }}