import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class ban extends BotCommand {
    constructor() {
        super('lock', {
            aliases: ['lock'],
            description: 'lock a channel',
            usage: '$lock @user'
        })
    }
    async exec(message) {

        const aa = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone")

        const upermEmbed = new MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Lock Command')
        .setDescription('You do not have permission to do execute this command!')
        .setTimestamp()
        .setFooter('Permission Error MANAGE_CHANNELS')
    


        if(!message.member.permissions.has(['MANAGE_CHANNELS', 'ADMINISTRATOR'])) return message.reply({ embeds: [upermEmbed] })
    
        const msg = await message.reply("Loading...")

        const channel = message.channel
    
        try {

                  channel.permissionOverwrites.set([
                    {
                        id: aa,
                        deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                    },
                ])

            msg.edit("Successfully Locked the channel!")
        }catch(e) {
            console.log(e)
        }
    }
}