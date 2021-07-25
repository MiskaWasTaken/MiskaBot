import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';
const discord = require('discord.js'); 
const moment = require(`moment`)
const { Client } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

export default class botinfo extends BotCommand {
    constructor() {
        super('botinfo', {
            aliases: ['botinfo'],
            description: 'Get information on this bot',
            usage: '$botinfo',
        })
    }

 async exec(message) {
    ;
 
    var botEmbed = new discord. MessageEmbed() 
    .setColor(`RANDOM`) 
    .setTitle(`Bot's Info`)
    .setThumbnail('https://i.imgur.com/I8qSDdc.jpg')
    .addField(`**General**`, [ 
        `**Username:** ${this.client.user.username}`, 
        `**Tag:** ${this.client.user.tag}`, 
        `**ID:** ${this.client.user.id}`, 
        `**Created At:** ${this.client.user.createdAt}`, 
        `**Owner:** Miska#0229, please do $credits`,
        '\u200b'
    ])
    .addField(`**Stats**`,[ 
        `**Servers:** ${this.client.guilds.cache.size}`,
        `**Channels:** ${this.client.channels.cache.size}`, 
        `**Users:** ${this.client.users.cache.size}`, 
        `**Discord.js Version:** 13.0.0-dev.4886ae2.1627171445`,
        `**Node.js Version:** 16.6.0`,
        '**Custom Bot Verson:** Early Release 1.0'
    ])
    message.reply({ embeds: [botEmbed] });
}}