const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isModalSubmit()) return;
    if (interaction.customId === "secret") {
      await interaction.reply({
        content: "Pesan rahasiamu telah dikirim kepada user",
      });
      const id = interaction.fields.getTextInputValue("id");
      const msg = interaction.fields.getTextInputValue("msg");

      //   const guild = interaction.guild;

      //   let members = (await guild.members.fetch()).filter((m) => m);
      // const from = interaction.author.username;
      console.log(`ID: ${id}\nMessage: ${msg}\nfrom: anonymous`);

      //   let m = members.map((m) => m.user);
      //   console.log(m);
    }
  },
};
