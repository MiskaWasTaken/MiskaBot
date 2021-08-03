import { BotCommand } from '@extensions/BotCommand';
const DIG = require("discord-image-generation");
const Discord = require('discord.js')


export default class pride extends BotCommand {
    constructor() {
        super('pride', {
            aliases: ['pride'],
            description: 'pride someone kek',
            usage: '$pride @user',
            args: [
                {
                    id: 'user',
                    type: 'member',
                    match: 'restContent'
                }
            ],

            slash: true,
            slashOptions: [
                {
                    name: 'user',
                    description: 'arg description',
                    type: 'USER'
                }
            ]
        })
    }
    async exec(message, args) {
        const user = args.user.user || message.author
        
        const avatar = user.displayAvatarURL({ dynamic: false, format: 'jpg' });
        // Make the image
        const img = await new DIG.Gay().getImage(avatar)
        // Add the image as an attachement
        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
       
    }}