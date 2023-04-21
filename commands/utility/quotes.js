const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quotes")
    .setDescription("Random quotes dari Anime"),
  async execute(Interaction) {
    const Uri = "https://katanime.vercel.app/api/getrandom";

    try {
      axios.get(Uri).then(async (data) => {
        const result = data.data.result[0];

        const embed = new EmbedBuilder()
          .setAuthor({
            name: "Kata-Kata Anime Random",
          })
          .setColor("DarkAqua")
          .addFields({ name: "Quotes", value: result.indo })
          .addFields({ name: "Character", value: result.character })
          .addFields({ name: "From Anime", value: result.anime });

        await Interaction.reply({ embeds: [embed] });
      });
    } catch (Err) {
      console.error(Err);
    }
  },
};
