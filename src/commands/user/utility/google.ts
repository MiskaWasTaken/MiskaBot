import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const googleIt = require('google-it')

export default class google extends BotCommand {
    constructor() {
        super('google', {
            aliases: ['google'],
            description: 'When your browser breaks moment',
            usage: '$google <query>',
            args: [
                {
                    id: 'google',
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {

        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const embed = new MessageEmbed()
            .setTitle("Google Search Results")
            .setColor('RANDOM')
            .setTimestamp()

        const google = args.google

        const noarg = new MessageEmbed()
            .setTitle(`Google Command`)
            .setDescription(`You need to provide a query.\n example: $google discord`)
            .setColor('RANDOM')

        if (!args.google) { return message.reply({ embeds: [noarg] }) }

        googleIt({ 'query': google }).then(results => {
            results.forEach(function (item, index) {
                embed.addField((index + 1) + ": " + item.title, `<${item.link}>`);
            });

            message.reply({ embeds: [embed] })
        })
        // any possible errors that might have occurred (like no Internet connection)
    }
}



