export const transformRepoStats = (stats) => {
  if (stats < 1000) return stats;
  return Math.round(stats / 100) / 10 + "k";
};