import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';

// pls make if no perm for bot = actually send a message instead of showing the defualt error thing
export default class lock extends BotCommand {
    constructor() {
        super('lock', {
            aliases: ['lock'],
            description: 'Lock a channel',
            usage: '$lock ',
            cooldown: 2000,
            slash:true,
            slashOptions: [

        ]
        })
    }
    async exec(message) {

        const aa = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone")

        const upermEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You do not have permission to use this command!')
        .setDescription('If you think this is a mistake please contact the server moderators')
        .setTimestamp()
        .setFooter('Permission Error MANAGE_CHANNELS')
    
    
        if(!message.member.permissions.has(['MANAGE_CHANNELS'])){
        message.reply({ embeds: [upermEmbed] })
        return;
        }

        if(!message.guild.me.permissions.toArray().includes('MANAGE_CHANNELS')){ 
        message.reply("I do not have permission to lock this channel. Please provide me 'manage channels' permission.") 
        return;
        }


        else {
    
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
}}