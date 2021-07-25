import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

export default class hololive extends BotCommand {
    constructor() {
        super('hololive', {
            aliases: ['hololive'],
            description: `hololive`,
            usage: `-hololive`
        })
    }
    async exec(message) {
        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const body = await axios.get('https://www.reddit.com/r/HololiveLewds.json?sort=top&t=week')

        const redditPost = body.data.data.children[utils.getRandomInt(body.data.data.children.length)].data

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${redditPost.title}`)
            .setDescription(`Posted by: ${redditPost.author_fullname}`)
            .setImage(`${redditPost.url}`)
            .setFooter(`Boners provided by ${redditPost.subsubreddit_name_prefixed}`)

        message.reply({ embeds: [embed] })
    }
}