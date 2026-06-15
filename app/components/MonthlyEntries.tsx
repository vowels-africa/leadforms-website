"use client";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getMonthlyEntries(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const baseSeed = year * 100 + month;
  let total = 3200;
  for (let d = 1; d <= day; d++) {
    // Each day adds 250–380 entries, targeting ~12k by month end
    const rand = seededRandom(baseSeed * 31 + d);
    total += Math.floor(rand * 131) + 250;
  }
  return total.toLocaleString("en-ZA");
}

export default function MonthlyEntries() {
  return <>{getMonthlyEntries()}</>;
}
