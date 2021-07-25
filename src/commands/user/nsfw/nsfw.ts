import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

export default class nsfw extends BotCommand {
    constructor() {
        super('nsfw', {
            aliases: ['nsfw'],
            description: `nsfw`,
            usage: `-nsfw`,

            args:[
                {
                    id: 'time',
                    type:'string'
                }
            ]
        })
    }
    async exec(message, args) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        let time
        
        const times = [
            'hour',
            'day',
            'week',
            'month',
            'year',
            'all'
        ]

        if (!times.includes(args.time)) {time = 'week'}
        else {time = args.time}

        const body = await axios.get(`https://www.reddit.com/r/nsfw.json?sort=top&t=${time}`)

        const redditPost = body.data.data.children[utils.getRandomInt(body.data.data.children.length)].data

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${redditPost.title}`)
            .setDescription(`Posted by: ${redditPost.author_fullname}`)
            .setImage(`${redditPost.url}`)
            .setFooter(`Boners provided by https://www.reddit.com/r/nsfw`)

        message.reply({ embeds: [embed] })
    }
}