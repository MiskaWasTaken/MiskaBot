import { exec } from 'child_process';
import { MessageEmbed } from 'discord.js';
import { inspect, promisify } from 'util';
import { BotCommand } from '@extensions/BotCommand';

const sh = promisify(exec);

export default class gitpull extends BotCommand {
    constructor() {
        super('gitpull', {
            aliases: ['gitpull'],
            description: 'Dev only :)',
            cooldown: 10000,
            slash: true,
            slashOptions: [

            ],
            channel: 'guild',
        });
    }

    async exec(message) {

        if (message.interaction && !this.client.ownerID.includes(message.author.id)){
            message.reply({content: 'I only respond to the mighty ones who have created me.', ephemeral: true})
            return;
        } 
        
        const githubembed = new MessageEmbed()

        const pull = await sh('git pull')
        githubembed.setDescription(`\`\`\`js\n${inspect(pull)}\`\`\``)

        message.util.reply({ embeds: [githubembed] })
    }
}
