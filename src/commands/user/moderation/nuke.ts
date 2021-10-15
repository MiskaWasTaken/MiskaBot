import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';
// pls make if no perm for bot = actually send a message instead of showing the defualt error thing

export default class nuke extends BotCommand {
    constructor() {
        super('nuke', {
            aliases: ['nuke'],
            description: 'USE THIS CAREFULLY!',
            usage: '$nuke',
            cooldown: 10000,
            slash:true,
            slashOptions: [

        ]
        })
    }
    async exec(message) {


        const upermEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You do not have permission to use this command!')
        .setDescription('If you think this is a mistake please contact the server moderators')
        .setTimestamp()
        .setFooter('Permission Error ADMINISTRATOR')
    
        if(!message.member.permissions.has(['ADMINISTRATOR'])) { 
        message.reply({ embeds: [upermEmbed] })
        return;
        }

        if(!message.guild.me.permissions.toArray().includes('MANAGE_CHANNELS')){ return message.reply("I do not have permission to nuke this channel. Please provide ome 'manage channels' permission") }

      
          else {
                 
        const channel = this.client.channels.cache.get(message.channel.id)

        const channela = message.channel

        const posisi = channela.position
    
        channela.clone().then((channel2) => {
            
           
            channel2.setPosition(posisi)
    
            
            channel.delete()
    
            
            channel2.send(`Nuked this channel`).then(
              
                
                channel2.send(`https://tenor.com/view/explosion-explode-clouds-of-smoke-gif-17216934`)
            )
        })
    }
        
        
}}