import { MessageEmbed } from "discord.js";
import { BotCommand } from "@extensions/BotCommand";

export default class avatar extends BotCommand {
	constructor() {
		super("avatar", {
			aliases: ["avatar"],
			description: "Show someones avatar",
			usage: "$avatar",

			args: [
				{
					id: "user",
					type: "user",
					match: "restContent",
					default: (message) => message.author,
				},
			],
		});
	}

	async exec(message, args) {
		const avatar = args.user.displayAvatarURL({ size: 4096, dynamic: true });

		const embed = new MessageEmbed()
            .setTitle(`${args.user.tag}'s Avatar`)
            .setURL(avatar)
            .setImage(avatar)
            .setColor("RANDOM");
		await message.reply({ embeds: [embed] });
	}
}
