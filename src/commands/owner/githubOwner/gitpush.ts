import { exec } from 'child_process';
import { MessageEmbed } from 'discord.js';
import { promisify } from 'util';
import { inspect } from 'util';
import { BotCommand } from '@extensions/BotCommand';

const sh = promisify(exec);

export default class gitpush extends BotCommand {
    constructor() {
        super('gitpush', {
            aliases: ['gitpush'],
            description: "Dev only :)",
            args: [
                {
                    id: 'commitreason',
                    type: 'string',
                    match: 'restContent'
                },
            ],
            slash: true,
            slashOptions: [
                {
					name: 'commitreason',
					description: 'Reason for commit',
					type:'STRING',  
				}
            ],
            
            ownerOnly: true,
            channel: 'guild'
        });
    }

    async exec(message, args) {

        if (!args.commitreason){
            return message.reply("Give a reason you smoothbrain")
        }
        
        if (args.commitreason.length > 50) {
            return message.util.send(`Your commit message is too long!`)
        }

        const pushingEmbed = new MessageEmbed()
            .setDescription(`Pushing changes to [GitHub](https://github.com/Zordlan/MiskaBot)`)
        message.util.send({ embeds: [pushingEmbed] })

        const githubEmbed = new MessageEmbed()
            .setTitle(`Command Output`)

        const gitadd = await sh('git add .')
        githubEmbed.addField(`\`git add .\``, `\`\`\`js\n${inspect(gitadd)}\`\`\``)

        const gitcommit = await sh(`git commit -m "${args.commitreason}"`)
        githubEmbed.addField(`\`git commit "${args.commitreason}"\``, `\`\`\`js\n${inspect(gitcommit)}\`\`\``)

        const githubpush = await sh('git push')
        githubEmbed.addField(`\`git push\``, `\`\`\`js\n${inspect(githubpush)}\`\`\``)

        message.util.reply({ embeds: [githubEmbed] })

    }
}
