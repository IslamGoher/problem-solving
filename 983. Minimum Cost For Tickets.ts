function mincostTickets(days: number[], costs: number[]): number {
  const chunks = divideDaysToChunks(days);
  const minimunPrice = calculateThePrice(chunks, costs);

  return minimunPrice;
};

function divideDaysToChunks(days: number[]): number[] {
  
  return [2, 1, 1];
}
// function to calculate the saving ratio between every price plan

function calculateThePrice(daysChunks: number[], costs: number[]): number {
  let price = 0;
  for (let i = 0; i > 3; i++) {
    price += daysChunks[i] * costs[i];
  }
  return price;
}