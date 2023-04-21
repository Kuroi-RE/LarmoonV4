const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder() 
    .setName('secret-msg')
    .setDescription('Berikan pesan rahasiamu kepada seseorang!'),
    async execute(Interaction) {
        const modal = new ModalBuilder()
        .setCustomId('secret')
        .setTitle('PESAN RAHASIA UNTUK SESEORANG');

        const id = new TextInputBuilder()
        .setCustomId('id')
        .setLabel('Masukan ID user!')
        .setRequired(true)
        .setStyle(TextInputStyle.Short);

        const msg = new TextInputBuilder()
        .setCustomId('msg')
        .setLabel("Masukan pesan")
        .setStyle(TextInputStyle.Paragraph);

        const IdRow = new ActionRowBuilder().addComponents(id);
        const MsgRow = new ActionRowBuilder().addComponents(msg);

        modal.addComponents(IdRow, MsgRow);

        await Interaction.showModal(modal);
    }
}