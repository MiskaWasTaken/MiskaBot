import { BotCommand } from '@extensions/BotCommand';
import { MessageEmbed } from 'discord.js';


export default class nuke extends BotCommand {
    constructor() {
        super('nuke', {
            aliases: ['nuke'],
            description: 'rip channel',
            usage: '$nuke',
            cooldown: 10000,
        })
    }
    async exec(message) {
//nothing to do here
        const upermEmbed = new MessageEmbed()
        .setColor('#03dbfc')
        .setTitle('Nuke Command')
        .setDescription('You do not have permission to do execute this command!')
        .setTimestamp()
        .setFooter('Permission Error ADMINISTRATOR')
    


        if(!message.member.permissions.has(['ADMINISTRATOR']))
        message.reply({ embeds: [upermEmbed] })

      
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