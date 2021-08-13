import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const HMfull = require("hmfull");

export default class hug extends BotCommand {
    constructor() {
        super('15', {
            aliases: ['15'],
            description: '[NSFW CHANNELS ONLY] See /helpnsfw',
            usage: '$fuck @user',
            cooldown: 1000,
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
                    description: 'the person you want to fuck',
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

        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const res = HMfull.HMtai.nsfw.gif()

        if (args.user){

        const hugEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**${message.author} fucks ${user} <a:pepesex:872026071170699305>**`)
            .setImage(`${res.url}`)
            .setTimestamp()
        
            message.reply({ embeds: [hugEmbed], ephemeral: true });
        }

        if (!args.user) return message.reply("Please mention a user")

        }

}