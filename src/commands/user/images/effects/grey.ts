import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class grey extends BotCommand {
    constructor() {
        super('grey', {
            aliases: ['grey'],
            description: 'Greyscale someone',
            usage: '$grey @user',
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
                    description: "The person you want to greyscale",
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

        const img = await new DIG.Greyscale().getImage(user.displayAvatarURL({format:'png'}))

        const attach = new Discord.MessageAttachment(img, "grey.png");

        message.reply({ files: [attach]  })

        } catch (err) {
            message.reply("User must have sent a message before incorporating them with this command.")
        }
       
    }}