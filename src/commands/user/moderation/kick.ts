import { BotCommand } from '@extensions/BotCommand';

export default class kick extends BotCommand {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            description: 'kick a user',
            usage: '$kick @user',
            args: [
              {
                  id: 'user',
                  type: 'member',
                  match: 'rest'
              }
          ],

          slash:true,
          slashOptions: [
            {
              name: 'user',
              description:'user to kick',
              type:'USER',
              required:true
            }
          ]
      })
  }
  async exec(message, args) {
    if (!message.member.permissions.has('KICK_MEMBERS')) {return await message.reply('you cant kick people')}
    if (!args.user) {
      return message.reply('you cant kick nobody, or they arent in this guild, or i couldnt find them, try using their id')
    }
    
    await message.guild.kick(args.user)
    await message.reply(`${args.user.user.tag} has been kicked`)
  }
}