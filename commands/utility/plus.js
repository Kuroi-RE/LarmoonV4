const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('plus')
		.setDescription('Pertambahan')
        .addNumberOption(option =>
			option
				.setName('num1')
				.setDescription('Number 1?')
                .setRequired(true))
        .addNumberOption(option =>
			option
				.setName('num2')
				.setDescription('Number 2?')
                .setRequired(true)),
	async execute(interaction) {
        const n1 = interaction.options.getNumber('num1')
        const n2 = interaction.options.getNumber('num2')

        let result = n1 + n2

        await interaction.reply(`${n1} + ${n2} = ${result}`)
    }
}