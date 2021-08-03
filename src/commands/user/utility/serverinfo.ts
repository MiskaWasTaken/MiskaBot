import { BotCommand } from '@extensions/BotCommand';
const discord = require('discord.js');
const moment = require(`moment`)

export default class serverinfo extends BotCommand {
    constructor() {
        super('serverinfo', {
            aliases: ['serverinfo'],
            description: 'Server information',
            usage: '$serverinfo',
        })
    }

    async exec(message) {

        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: 'High',
            VERY_HIGHT: 'Very High'
        }
 
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString()).slice(0, -1)
     
        const channels = message.guild.channels.cache;
        
        const emojis = message.guild.emojis.cache
    
        const { guild } = message
        
        const { name } = guild
        
    
        const serverEmbed = new discord.MessageEmbed()
        .setColor("RANDOM") 
        .setTitle(`Server info of ${name}`)  
        .setURL('https://discordbotlist.com/bots/miska-bot')
        .setImage(message.guild.iconURL()) 
        .addFields(
            { name: `**Name:**`, value: `${name}`, inline: true },
            { name: '**Server ID:**', value: `${message.guild.id}` },
            { name: '**Owner:**', value: `${message.guild.ownerId}`, inline: true },
            { name: '**Boost Tier:**', value: `${message.guild.premiumTier ? `${message.guild.premiumTier}` : 'None'}` },
            { name: `**Verification Level:**`, value: `${verificationLevels[message.guild.verificationLevel]}`, inline: true },
            { name: '**Boost Level:**', value: `${message.guild.premiumSubscriptionCount || '0'}` },
            { name: '**Created At:**', value: `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}` },
            { name: `**Role Count:**`, value: `${roles.length}`, inline: true },
            { name: '**Emoji Count:**', value: `${emojis.size}` },
            { name: '**Static Emoji Count:**', value: `${emojis.filter(emoji => !emoji.animated).size}`, inline: true },
            { name: '**Animated Emoji Count:**', value: `${emojis.filter(emoji => emoji.animated).size}` },
            { name: '**Member Count:**', value: `${message.guild.memberCount}` },
            { name: '**Text Channels:**', value: `${channels.filter(channel => channel.type === 'GUILD_TEXT').size}`, inline: true },
            { name: '**Voice Channels:**', value: `${channels.filter(channel => channel.type === 'GUILD_VOICE').size}`, inline: true }
        )
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`, 'https://i.imgur.com/I8qSDdc.jpg')
        
        message.reply({ embeds: [serverEmbed] })
    }}