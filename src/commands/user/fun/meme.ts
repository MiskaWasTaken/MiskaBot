import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils';
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

export default class nsfw extends BotCommand {
    constructor() {
        super('meme', {
            aliases: ['meme'],
            description: `Spicy Memes`,
            usage: `$meme`,
            cooldown: 1000,

            args: [
                {
                    id: 'time',
                    type: 'string'
                }
            ],

            slash: true,
            slashOptions: [
                {
                    name: 'time',
                    description: 'timespan',
                    type: 'STRING',
                    choices: [
                        {
                            name: 'hour',
                            value: 'hour'
                        },
                        {
                            name: 'day',
                            value: 'day'
                        },
                        {
                            name: 'week',
                            value: 'week'
                        },
                        {
                            name: 'month',
                            value: 'month'
                        },
                        {
                            name: 'year',
                            value: 'year'
                        },
                        {
                            name: 'all',
                            value: 'all time'
                        },
                    ]
                }
            ]
        })
    }
    async exec(message, args) {

        let time

        const times = [
            'hour',
            'day',
            'week',
            'month',
            'year',
            'all'
        ]

        if (!times.includes(args.time)) { time = 'week' }
        else { time = args.time }

        //if (message.interaction) { return message.reply('For whatever stupid reason, the government blocked me from accessing this when I\'m hosted in this location.') }

        let body

        try {
            body = await axios.get(`https://www.reddit.com/r/dankmemes/.json?sort=top&t=${time}`)
        }
        catch (error) {
            if (error == 'Error: Request failed with status code 451') { return message.reply('For whatever stupid reason, the government blocked me from accessing this when I\'m hosted in this location.') }
            else {
                return this.handler.emitError(error, message)
            }
        }

        const redditPost = body.data.data.children[utils.getRandomInt(body.data.data.children.length)].data

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${redditPost.title}`)
            .setDescription(`Posted by u/${redditPost.author}`)
            .setImage(`${redditPost.url}`)
            .setFooter(`Memes from https://www.reddit.com/r/dankmemes/`)

        message.reply({ embeds: [embed] })
    }
}