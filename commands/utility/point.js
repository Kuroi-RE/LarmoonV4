const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('point')
		.setDescription('Menghitung point epep')
        .addNumberOption(option =>
			option
				.setName('rank')
				.setDescription('# brapa bro')
                .setRequired(true))
        .addNumberOption(option =>
			option
				.setName('kill')
				.setDescription('Kill brapa?')
                .setRequired(true)),
	async execute(interaction) {
        let rank = interaction.options.getNumber('rank');
        let kills = interaction.options.getNumber('kill');

        const hitung = (ObjectivePoint, Kill) => {
            let rankPoint;

            switch (ObjectivePoint) {
                case 1:
                    rankPoint = 12;
                    break;
                case 2:
                    rankPoint = 9;
                    break;
                case 3:
                    rankPoint = 8;
                    break;
                case 4:
                    rankPoint = 7;
                    break;
                case 5:
                    rankPoint = 6;
                    break;
                case 6:
                    rankPoint = 5;
                    break;
                case 7:
                    rankPoint = 4;
                    break;
                case 8:
                    rankPoint = 3;
                    break;
                case 9:
                    rankPoint = 2;
                    break;
                case 10:
                    rankPoint = 1;
                    break;
                case 11 && 12:
                    rankPoint = 0;
                    break;         
                default:
                    break;
            }

            return rankPoint + Kill;
        }

        const final = hitung(rank, kills)

        // let boyah = false;

        // if (rank == 1) return boyah = true;

        const embed = new EmbedBuilder()
            .setAuthor({name: "Hitung point efte", iconURL: "https://th.bing.com/th?id=ODL.4f4bbf9bf9403efdbb7bf739f9dbc2d7&w=110&h=110&c=6&rs=1&qlt=90&o=6&pid=13.1"})
            // .setColor('7289DA')
            .setDescription(`**Rank : ${rank}\nKill : ${kills}\nTotal Point : ${final}**`)
            .setFooter({text: "Dunia Sementara FF Selamanya"});

        await interaction.reply({embeds: [embed]})

	},
};