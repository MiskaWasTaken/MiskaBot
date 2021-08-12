import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const HMfull = require("hmfull");

export default class hug extends BotCommand {
    constructor() {
        super('hug', {
            aliases: ['hug'],
            description: 'Hug someone',
            usage: '$hug @user',
            cooldown: 2000,
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                },

        ],

        slash:true,
        slashOptions: [
            {
                name: 'user',
                description: 'the person you want to hug',
                type:'USER',  
                required: true
            }
        ]

        })
    }
    async exec(message, args) {




        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

        if (args.user){

            

            const res = HMfull.Nekos.sfw.hug()

        const hugEmbed = new MessageEmbed()
            .setDescription(`**${message.author} hugs ${user} :heart:**`)
            .setImage(`${res.url}`)
        
            message.reply({ embeds: [hugEmbed] });
        }

        if (!args.user) return message.reply("Please add a user without your command")

        }

}