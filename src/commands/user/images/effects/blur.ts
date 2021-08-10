import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('blur', {
            aliases: ['blur'],
            description: 'rekt',
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
                {
                    name:'users',
                    description: 'the user you want to blur',
                    type:'USER',
                    required: false
                }
            ]


        })
    }
    
    async exec(message, args) {

        const user = args.user
        
        const avatar = user.displayAvatarURL({ format: 'gif'})
        // // Make the image
        const img = await new DIG.Blur().getImage(avatar)
        // // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.gif");

        message.reply({ files: [attach]  })
        //await message.reply(avatar)
  }}