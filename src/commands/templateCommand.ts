import { BotCommand } from '@extensions/BotCommand';


export default class templateCommand extends BotCommand {
    constructor() {
        super('templateCommand', {
            aliases: ['templateCommand'],
            description: 'This is an example command!',
            usage: '-templateCommand',
            cooldown: 1000,

            args: [
                {
                    id: 'exampleArg',
                    type: 'string',
                    match: 'restContent'
                }
            ]
        })
    }
    async exec(message, args) {
        //message.reply(args.exampleArg)
    }
}