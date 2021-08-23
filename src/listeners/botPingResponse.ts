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
            message.channel.send(`hi yes I no longer have a prefix :( I now only respond to / commands with (2 execptions, tictactoe and rps). If you do not see my / commands please reinvite me with this invite: https://discord.com/oauth2/authorize?client_id=847828846597373973&scope=bot+applications.commands&permissions=2956324342`)
        }
    }
}

module.exports = pingResponse;