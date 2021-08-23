import { MessageEmbed } from 'discord.js';
import { BotCommand } from '@extensions/BotCommand';


export default class dm extends BotCommand {
    constructor() {
        super('dm', {
            aliases: ['dm'],
            description: "Dev only :) | DM a user",
            cooldown: 10000,

            args: [
                {
                    id: 'user',
                    type: 'string',
                    match: 'restContent'
                },
                {
                    id: 'subject',
                    type: 'string',
                    match: 'restContent'
                },
            ],
            slash: true,
            slashOptions: [
                {
					name: 'user',
					description: 'user to id | id',
					type:'STRING',  
                    required: true
				},
                {
					name: 'subject',
					description: 'what should i dm the user',
					type:'STRING',  
                    required: true
				},
                {
					name: 'color',
					description: 'red, green | not provided = no color',
					type:'STRING',  
                    required: false
				},
            ],
        });
    }

    async exec(message, args) {

        if (message.interaction && !this.client.ownerID.includes(message.author.id)){
            message.reply({content: 'I only respond to the mighty ones who have created me.', ephemeral: true})
            return;
        } 


        
        const subject = args.subject
        const user = args.user
        const color = args.color

        if(user.length > 18){
            message.reply('look you smooth brain thats not a discord id')
        }

        const dmRedEmbed = new MessageEmbed()
        .setColor('RED')
        .setTitle(`You have received a message from the devs!`)
        .setThumbnail('https://i.imgur.com/I8qSDdc.jpg')
        .setDescription(`${subject}`)
        .setTimestamp()

        const dmGreenEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle(`You have received a message from the devs!`)
        .setThumbnail('https://i.imgur.com/I8qSDdc.jpg')
        .setDescription(`${subject}`)
        .setTimestamp()

        const dmNoEmbed = new MessageEmbed()
        .setTitle(`You have received a message from the devs!`)
        .setThumbnail('https://i.imgur.com/I8qSDdc.jpg')
        .setDescription(`${subject}`)
        .setTimestamp()

        if(color == 'red'){
            const userdm = await this.client.users.cache.get(user);
            userdm.send({ embeds: [dmRedEmbed] });
        }

        if(color == 'green'){
            const userdm = await this.client.users.cache.get(user);
            userdm.send({ embeds: [dmGreenEmbed] });
        }

        
        if(color == undefined){
            const userdm = await this.client.users.cache.get(user);
            userdm.send({ embeds: [dmNoEmbed] });
        }
    }
}