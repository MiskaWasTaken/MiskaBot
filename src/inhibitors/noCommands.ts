import { BotInhibitor } from '@extensions/BotInhibitor';

class noCommands extends BotInhibitor {
	constructor() {
		super('noCommands', {
			reason: 'noCommands'
		});
	}

	async exec(message) {
		const prefixes = this.client.commandHandler.prefix as string[]
        this.client.commandHandler.modules.forEach(command => {
            command.aliases.forEach(alias => {
                prefixes.forEach(prefix => {if (message.content.startsWith(`${prefix}${alias}`)) message.reply('Normal commands have been deprecated, use slash commands. Please re-invite the bot with this link if you do not see slash commands:\nhttps://discord.com/oauth2/authorize?client_id=847828846597373973&scope=bot+applications.commands&permissions=2956324342').then(ms => {
                    setTimeout(() => ms.delete(), 10000)})
                    
                    return;
                return true
            })
            })
        })
        return true
	}
}

module.exports = noCommands;