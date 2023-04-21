const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("daily")
    .setDescription(
      "mendapatkan informasi fakta harian (Tahukah Anda) yang berasal dari Wikipedia."
    ),
  async execute(Interaction) {
    const Uri = "https://cinnabar.icaksh.my.id/public/daily/tawiki";

    try {
      axios.get(Uri).then(async (response) => {
        const data = response.data.data.info[0].tahukah_anda;

        // console.log(Interaction.user);

        const embed = new EmbedBuilder()
          .setAuthor({
            name: Interaction.user.username,
          })
          .setColor("Blurple")
          .setDescription(`Tahukah kamu.. \n${data}`);
        await Interaction.reply({ embeds: [embed] });
        // console.log(data);
      });
    } catch (Err) {
      console.error(Err);
    }
  },
};
