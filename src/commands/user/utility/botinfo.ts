import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';

export default class botinfo extends BotCommand {
    constructor() {
        super('botinfo', {
            aliases: ['botinfo'],
            description: 'Get information on this bot',
            usage: '$botinfo',
            cooldown: 10000,
            slash:true,
            slashOptions: [

            ]
        })
    }

 async exec(message) {
    const botEmbed = new MessageEmbed() 
    .setColor(`RANDOM`) 
    .setTitle(`Bot's Info`)
    .setThumbnail('https://i.imgur.com/I8qSDdc.jpg')
    .addField(`**General**`, 
        `**Username:** ${this.client.user.username}
        **Tag:** ${this.client.user.tag}
        **ID:** ${this.client.user.id} 
        **Created At:** ${this.client.user.createdAt}
        **Owner:** Miska#0229, Raine#7430`
    )
    .addField(`**Stats**`,
        `**Servers:** ${this.client.guilds.cache.size}
        **Channels:** ${this.client.channels.cache.size}
        **Users:** ${this.client.users.cache.size}
        **Discord.js Version:** discord.js@13.0.0
        **Node.js Version:** 16.7.0
        **Custom Bot Version:** RW3.0`
    )
    message.reply({ embeds: [botEmbed] })
}}