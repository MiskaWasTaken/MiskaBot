import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class nsfw extends BotCommand {
    constructor() {
        super('nsfw', {
            aliases: ['nsfw'],
            description: `nsfw`,
            usage: `-nsfw`,
            cooldown: 1000,

        })
    }
    async exec(message) {
        const NSFW = require("discord-nsfw");
        const nsfww = new NSFW();

        if (!message.channel.nsfw) { return message.reply({ embeds: [this.client.notNsfwEmbed] }) }

        const image = await nsfww.pgif();

    
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(image);
        message.reply({ embeds: [embed]});
    
    }}
