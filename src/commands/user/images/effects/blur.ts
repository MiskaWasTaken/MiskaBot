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
                    type: 'member',
                    match: 'restContent',
                }
            ],

            slash:true,
            slashOptions: [
                {
                    name:'user',
                    description: 'the user you want to blur',
                    type:'USER',
                    required: false
                }
            ]


        })
    }
    
    async exec(message, args) {

        const user = args.user 

        if(!user) return message.reply("Please mention a user, or yourself.")
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' })
        // Make the image
        const img = await new DIG.Blur().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
    }}