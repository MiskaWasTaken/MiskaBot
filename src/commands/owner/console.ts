import { exec } from 'child_process';
import { MessageEmbed } from 'discord.js';
import { promisify } from 'util';
import { inspect } from 'util';
import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils'

const sh = promisify(exec);



export default class console extends BotCommand {
    constructor() {
        super('console', {
            aliases: ['console'],
            description: "Dev only :)",
            cooldown: 10000,

            args: [
                {
                    id: 'command',
                    type: 'string',
                    match: 'restContent'
                },
            ],
            slash: true,
            slashOptions: [
                {
					name: 'command',
					description: 'Command to run',
					type:'STRING',  
				}
            ],
            channel: 'guild',
        });
    }

    async exec(message, args) {

        if (message.interaction && !this.client.ownerID.includes(message.author.id)){
            message.reply({content: 'I only respond to the mighty ones who have created me.', ephemeral: true})
            return;
        } 
        
        const output = await sh(args.command)

        const outputembed = new MessageEmbed()
            .setTitle(`Console Command Ran`)
            .addField(`:inbox_tray: Command`, `\`\`\`${args.command}\`\`\``)

        if (inspect(output).length > 1000) {
            await outputembed.addField(`:outbox_tray: **Output**`, await utils.haste(inspect(output)))
        }
        else {
            outputembed.addField(`:outbox_tray: **Output**`, `\`\`\`js\n${inspect(output)}\`\`\``)
        }

        message.util.reply({ embeds: [outputembed] })
    }
}
