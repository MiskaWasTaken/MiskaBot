import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class deleteUser extends BotCommand {
    constructor() {
        super('delete', {
            aliases: ['delete'],
            description: 'Delete yourself?',
            usage: '$delete @user',
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

        
        const avatar = await message.author.displayAvatarURL({ format: 'jpg'})
        // Make the image
        const img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}