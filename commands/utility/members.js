const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('members')
		.setDescription("Replies with this server's member count"),
	async execute(interaction) {
		await interaction.reply(`**${interaction.guild.memberCount}**`);
	},
};