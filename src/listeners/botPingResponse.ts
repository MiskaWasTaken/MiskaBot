import { BotListener } from '@extensions/BotListener';

class pingResponse extends BotListener {
    constructor() {
        super('pingResponse', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    async exec(message) {
        if (message.content == `<@!${this.client.user.id}>` || message.content == `<@${this.client.user.id}`) {
            message.channel.send(`hi yes my prefix is ${this.client.commandHandler.prefix}`)
        }
    }
}

module.exports = pingResponse;