import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const HMfull = require("hmfull");

export default class hug extends BotCommand {
    constructor() {
        super('fuck', {
            aliases: ['fuck'],
            description: 'fuck someone',
            usage: '$fuck @user',
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                },
            ],

        })
    }
    async exec(message, args) {

        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const res = HMfull.HMtai.nsfw.gif()

        if (args.user){

        const hugEmbed = new MessageEmbed()
            .setTitle(`You fuck ${args.user.username} <a:pepesex:872026071170699305>`)
            .setImage(`${res.url}`)
            .setTimestamp()
        
            message.reply({ embeds: [hugEmbed] });
        }

        if (!args.user) return message.reply("Please mention a user")

        }

}