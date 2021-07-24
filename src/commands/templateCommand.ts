import { BotCommand } from '@extensions/BotCommand';
import utils from '@functions/utils'

export default class templateCommand extends BotCommand {
    constructor() {
        super('templateCommand', {
            aliases: ['templateCommand'],
            description: 'This is an example command!',
            usage: '-templateCommand',

            slash: true,
            slashGuilds: utils.slashGuilds
        })
    }
    async exec(message, args) {
        message.reply('hi')
    }
}