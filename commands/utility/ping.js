const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
// const Mbed = require("../../Utility/embed");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply({
      embeds: [new EmbedBuilder().setDescription("Pongg!").setColor("Random")],
    });
  },
};
