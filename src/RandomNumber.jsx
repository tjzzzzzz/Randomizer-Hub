function getRandomNumberForPlayers(min, max, players) {
  const results = [];
  for (let i = 0; i < players; i++) {
    results.push(`Player ${i + 1}: ${Math.floor(Math.random() * (max - min + 1)) + min}`);
  }
  return results;
}

export default getRandomNumberForPlayers;