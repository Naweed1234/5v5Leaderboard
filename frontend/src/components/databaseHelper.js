const API_KEY = "RGAPI-2eb3facf-53a7-4727-8228-929b5b450fa6";
const SUMMONER_NAME = encodeURIComponent("Jacob#Supp");

// Function to fetch summoner data including accountId
async function getSummonerData() {
  try {
    const response = await fetch(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error appropriately
    return null;
  }
}

// Example usage
getSummonerData()
  .then((summonerData) => {
    if (summonerData) {
      console.log("Summoner accountId:", summonerData.accountId);
      // Do something with the accountId
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
