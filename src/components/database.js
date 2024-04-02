export const Leaderboard = [
  {
    name: "Naweed#NA1",
    location: "India",
    winrate: 1550,
    img: "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/1117.png",
    dt: "2022-02-10",
    puuid:
      "mn0Zwxwc6W3qf_NGl9228cN1e3Cd_kcFa6tEzIyWiFXxBy7RB3vQ8PyyWHGSXM41z1kRNV7pQcXS0g",
  },
  {
    name: "Toraboss#NA1",
    location: "India",
    winrate: 1550,
    img: "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/2088.png",
    dt: "2022-02-10",
    puuid:
      "5J69Qp6TTlRuo0Dan9ADaquKEBj6Hp_agWY3Gzm5cpF_ybbaq8nG8EnvHhM2c1WpwqcjpZ9axkEa1Q",
  },
  {
    name: "Jacob#Supp",
    location: "India",
    winrate: 57,
    img: "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/622.png",
    dt: "2022-02-10",
    puuid:
      "B7yoVzKT7ktZ0cjmlZ-tic-pHmhi6GoRonCfKFf4HutbMpF9dyJc83faSBmXEisSVN7CWG0Hg8gfLw",
  },
  {
    name: "Mich#NA1",
    location: "India",
    winrate: 1550,
    img: "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/657.png",
    dt: "2022-02-10",
    puuid:
      "b2Gz2eQNQRbcePDdpi8-QkotFEkksNmlr0OKnDe-9zSU7l7ItgNfmyHjVgqFeO0X6kh0l-rYWZsDDw",
  },
  {
    name: "Nivy#NA1",
    location: "India",
    winrate: 1550,
    img: "https://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/588.png", //588
    dt: "2022-02-10",
    puuid:
      "H3s170b3XvZmG0phlPeyWgej03fbfLtPAM6uag6LsFtskw1lYAOxkx4kp-9I00tOFpgs_TPQqJAUFg",
  },
];

function adjustImageSizes(data) {
  const imageSize = "64";
  return data.map((item) => ({
    ...item,
    img: item.img.replace(/\/\d+\.png$/, `/${imageSize}.png`),
  }));
}

const adjustedLeaderboard = adjustImageSizes(Leaderboard);

export { adjustedLeaderboard };
