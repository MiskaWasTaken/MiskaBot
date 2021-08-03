import { BotCommand } from '@extensions/BotCommand';

export default class ban extends BotCommand {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            description: 'rekt',
            usage: '$ban @user',
            args: [
                {
                    id: 'user',
                    type: 'member',
                    match: 'rest'
                },
                {
                    id: 'reason',
                    type: 'string',
                    match: 'restContent',
                    default: 'no reason provided'
                }
            ],

            slash:true,
            slashOptions: [
              {
                name: 'user',
                description:'user to ban',
                type:'USER',
                required:true
              },
              {
                name: 'reason',
                description:'the reason you are banning them for',
                type:'STRING'
              }
            ]
        })
    }
    async exec(message, args) {
      if (!message.member.permissions.has('BAN_MEMBERS')) {return await message.reply('you cant ban people')}
      if (!args.user) {
        return message.reply('you cant ban nobody, or they arent in this guild, or i couldnt find them, try using their id')
      }
      
      await message.guild.bans.create(args.user, {reason: `${message.author.tag} | ${args.reason}`})
      await message.reply(`${args.user.user.tag} has been banned`)
    }
}