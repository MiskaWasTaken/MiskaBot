import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class blur extends BotCommand {
    constructor() {
        super('bed', {
            aliases: ['bed'],
            description: 'bed',
            usage: '$bed @user',
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
                {
                    name:'users',
                    description: 'reeee',
                    type:'USER',
                    required: false
                }

            ]



            
        })
    }
    async exec(message, slashOptions) {
        const user = slashOptions.users 

        if(!user) return message.reply("Please mention a user, or yourself.")

        const ree = message.guild.fetch(slashOptions.users);
        
        const avatar = ree.displayAvatarURL({ dynamic: false, format: 'jpg' });

        const user2 = message.author

        const avatar2 = user2.displayAvatarURL({ dynamic: false, format: 'jpg' });


        // Make the image
        const img = await new DIG.Bed().getImage(avatar2, avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}