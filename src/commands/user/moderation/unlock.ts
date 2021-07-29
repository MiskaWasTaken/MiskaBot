import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class unlock extends BotCommand {
    constructor() {
        super('unlock', {
            aliases: ['unlock'],
            description: 'unlock a locked channel',
            usage: '$unlock'
        })
    }
    async exec(message) {

        const aa = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone")

        const upermEmbed = new MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Unlock Command')
        .setDescription('You do not have permission to do execute this command!')
        .setTimestamp()
        .setFooter('Permission Error MANAGE_CHANNELS')
    


        if(!message.member.permissions.has(['MANAGE_CHANNELS', 'ADMINISTRATOR'])) 
        message.reply({ embeds: [upermEmbed] })

        else {
    
        const msg = await message.reply("Loading...")

        const channel = message.channel
    
        try {

                  channel.permissionOverwrites.set([
                    {
                        id: aa,
                        allow: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                    },
                ])

            msg.edit("Successfully Unlocked the channel!")
        }catch(e) {
            console.log(e)
        }
    }
}}