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
            message.reply(`hi yes I no longer have a prefix, I now only respond to / commands. If you do not see my / commands please reinvite me with this invite: ' https://discord.com/oauth2/authorize?client_id=847828846597373973&scope=bot+applications.commands&permissions=2956324342 ' To learn more: https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ#:~:text=Slash%20Commands%20are%20the%20new,command%20right%20the%20first%20time`)
        }
    }
}

module.exports = pingResponse;