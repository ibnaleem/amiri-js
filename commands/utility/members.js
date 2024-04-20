const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('members')
        .setDescription("Replies with this server's member count"),
    async execute(interaction) {
        const guild = interaction.guild;
        const commandInvoker = interaction.member;
        const commandInvokerIcon = commandInvoker.avatarURL();
        const memberCount = guild.memberCount;
        const guildIcon = interaction.guild.iconURL();
        const guildBanner = interaction.guild.bannerURL();

        const membersEmbed = new EmbedBuilder()
            .setColor(0x0c0c0d)
            .setAuthor({ name: `${memberCount} members`, iconURL: guildIcon ? guildIcon : null })  
			.setFooter({text: `requested by ${commandInvoker.displayName}`, iconURL: commandInvokerIcon ? commandInvokerIcon : null});
        
		await interaction.reply({ embeds: [membersEmbed] });
    },
};