
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const wacc = document.getElementById("wacc");
const growth = document.getElementById("growth");
const waccOut = document.getElementById("waccOut");
const growthOut = document.getElementById("growthOut");
const evOut = document.getElementById("enterpriseValue");
const eqOut = document.getElementById("equityValue");

function updateDCF(){
  const w = parseFloat(wacc.value);
  const g = parseFloat(growth.value);

  // Synthetic demo calibrated around $412M at 9.5% / 3.0%.
  const base = 412;
  const ev = base * (6.5 / (w - g)) / (6.5 / (9.5 - 3.0));
  const equity = ev - 74;

  waccOut.value = `${w.toFixed(1)}%`;
  growthOut.value = `${g.toFixed(1)}%`;
  evOut.textContent = `$${Math.round(ev)}M`;
  eqOut.textContent = `$${Math.round(equity)}M`;
}
wacc.addEventListener("input", updateDCF);
growth.addEventListener("input", updateDCF);
updateDCF();
