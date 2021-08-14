import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
const Math = require('math.js');

export default class howgay extends BotCommand {
    constructor() {
        super('howgay', {
            aliases: ['howgay'],
            description: 'Test how gay you are',
            usage: '$present <text>',
            cooldown: 2000,

            args: [
                {
                    id: 'user',
                    type: 'user',
                    match: 'restContent'
                },

        ],

        slash: true,
        slashOptions: [
            {
                name: 'user',
                description: 'the person you want test',
                type:'USER',  
                required: false
            }
        ]

        })
    }
 
    async exec(message, args) {

        
        let user
        
        if (args.user) {user = this.client.util.resolveUser(args.user, this.client.users.cache)}
        else user = message.author

    const gayness = Math.floor(Math.random() * 100);


    const gayEmbed = new MessageEmbed()
    .setColor('LUMINOUS_VIVID_PINK')
    .setDescription(`${user} is ` + gayness + "% Gay 🌈")
    message.reply({ embeds: [gayEmbed] })

    }}