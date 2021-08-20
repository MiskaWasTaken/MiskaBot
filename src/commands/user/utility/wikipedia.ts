import { BotCommand } from '@extensions/BotCommand';
const fetch = require('node-fetch')
import { MessageEmbed } from 'discord.js';

export default class wikipedia extends BotCommand {
    constructor() {
        super('wikipedia', {
            aliases: ['wikipedia'],
            description: 'When your browser breaks moment',
            usage: '$wikipedia <query>',
            cooldown: 5000,
            args: [
                {
                    id: 'query',
                    type: 'string',
                    match: 'restContent'
                }
            ],
            slash:true,
            slashOptions: [
                {
                    name: 'query',
                    description: 'Search query',
                    type:'STRING',  
                    required: true
                }]
        })
    }

    async exec(message, args) {

        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.query)}`

        let response;
        try {
          response = await fetch(url).then(res => res.json())
        } catch (e) {
          console.log('Something went wrong with Wikipedia search\n' + e)
        }
        try {
          if (response.type === 'disambiguation') {
            const embed = new MessageEmbed()
              .setTitle(response.title)
              .setColor('RED')
              .setURL(response.content_urls.desktop.page)
              .setThumbnail(response.thumbnail.source)
              .setDescription(`${response.extract} Other Links for the same topic: [Click Me!](${response.content_urls.desktop.page}).`)
            message.reply({ embeds: [embed] }).catch()
          } else {
            const fullEmbed = new MessageEmbed()
              .setTitle(response.title)
              .setColor('RED')
              .setURL(response.content_urls.desktop.page)
              .setThumbnail(response.thumbnail.source)
              .setDescription(response.extract)
            message.reply({ embeds: [fullEmbed] }).catch()
          }
        } catch (e) {
          message.reply({ embeds: [new MessageEmbed().setDescription(`:x: | No results for ${args.query}`).setColor('RED')] })
        }
      }
    }