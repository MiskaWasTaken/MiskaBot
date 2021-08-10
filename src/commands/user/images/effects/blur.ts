import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('blur', {
            aliases: ['blur'],
            description: 'Blur yourself',
            usage: '$blur @user',
            cooldown: 5000,
            args: [
                {
                    id: 'user',
                    type: 'user',
                }
            ],

            slash:true,
            slashOptions: [

            ]


        })
    }
    
    async exec(message) {

        // const user = await message.guild.members.fetch(slashOptions.users) || message.author  
        
        const avatar = await message.author.displayAvatarURL({ format: 'png'})

        const img = await new DIG.Blur().getImage(avatar)

        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
  }}