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
                    type: 'string',
                }
            ],

            slash:true,
            slashOptions: [
                {
                    name: 'user',
                    description: 'person to blur',
                    type:'STRING'
                }
            ]
        })
    }
    
    async exec(message, args) {        
        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

        const img = await new DIG.Blur().getImage(user.displayAvatarURL({format:'png'}))

        const attach = new Discord.MessageAttachment(img, "delete.png");

        message.reply({ files: [attach]  })
  }}