export const formatSeason = (season: string) => {
   const month = Number(season.match(/\d+$/)?.[0]);
   if (!month) {
      return '--';
   }
   if (month >= 1 && month < 4) {
      return 'Autumn';
   }
   if (month >= 4 && month < 7) {
      return 'Winter';
   }
   if (month >= 7 && month < 10) {
      return 'Spring';
   }
   return 'Summer';
};
