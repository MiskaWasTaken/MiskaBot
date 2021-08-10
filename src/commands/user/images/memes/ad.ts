import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('ad', {
            aliases: ['ad'],
            description: 'Advert?',
            usage: '$ad @user',
            cooldown: 5000,
            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                }
            ],

            slash:true,
            slashOptions: [

            ]



        })
    }
    async exec(message) {
        
        const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'jpg' });
        // Make the image
        const img = await new DIG.Ad().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}