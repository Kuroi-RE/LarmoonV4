const { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("form")
    .setDescription("Formulir test"),
  async execute(Interaction) {
    const modal = new ModalBuilder()
      .setCustomId("form")
      .setTitle("Formulir Pendaftaran");

      const username = new TextInputBuilder()
      .setLabel('username')
      .setStyle(TextInputStyle.Short)
      .setCustomId('username')

      const email = new TextInputBuilder()
      .setLabel('email')
      .setStyle(TextInputStyle.Short)
      .setCustomId('email')

      const usernameRow = new ActionRowBuilder().addComponents(username)
      const emailRow = new ActionRowBuilder().addComponents(email)

      modal.addComponents(usernameRow, emailRow)

      await Interaction.showModal(modal);

  },
};
