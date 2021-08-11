import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class bed extends BotCommand {
    constructor() {
        super('bed', {
            aliases: ['bed'],
            description: 'Why do you hate me?',
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
                    name: 'user',
                    description: "The second user",
                    type:'USER',
                    required: true
                }

            ]


            
        })
    }
    async exec(message, args) {

    try {
        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

        const avatar = await (user.displayAvatarURL({format:'png'}))

        const user2 = message.author

        const avatar2 = user2.displayAvatarURL({ dynamic: false, format: 'jpg' });


        // Make the image
        const img = await new DIG.Bed().getImage(avatar2, avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "bed.png");
        
        message.reply({ files: [attach]  })

    } catch (err) {
        message.reply("User must have sent a message before incorporating them with this command.")
    }
       
    }}