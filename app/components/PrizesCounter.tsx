const EPOCH_YEAR = 2026;
const EPOCH_MONTH = 6; // June 2026
const BASE_AMOUNT = 43800; // 6 × R 7 300, first clean multiple above previous live value
const MONTHLY_INCREMENT = 7300;

function getTotalPrizesRands(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const monthsElapsed =
    (year - EPOCH_YEAR) * 12 + (month - EPOCH_MONTH);

  const total = BASE_AMOUNT + Math.max(0, monthsElapsed) * MONTHLY_INCREMENT;

  return "R " + total.toLocaleString("en-ZA");
}

export default function PrizesCounter() {
  return <>{getTotalPrizesRands()}</>;
}
