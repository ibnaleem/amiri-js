const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joined-at')
        .setDescription("Replies with the date a user joined this server")
        .addUserOption(option => option.setName('member').setDescription("the member who's joined date you want to retrieve").setRequired(false)),

    async execute(interaction) {
        const guild = interaction.guild;
        const commandInvoker = interaction.member;
        const target = interaction.options.getUser('member') ?? interaction.member;
        const joinDate = guild.members.cache.get(target.id).joinedAt;
        const targetIcon = target.avatarURL() || commandInvoker.avatarURL();

        const joinedAtEmbed = new EmbedBuilder()
            .setColor(0x0c0c0d)
            .setAuthor({ name: `${target.displayName}`, iconURL: targetIcon})
            .setDescription(`> joined at ${joinDate.toLocaleDateString()} ${joinDate.toLocaleTimeString()}`)  
			.setFooter({text: `requested by ${commandInvoker.displayName}`, iconURL: null});
        
		await interaction.reply({ embeds: [joinedAtEmbed] });
    },
};