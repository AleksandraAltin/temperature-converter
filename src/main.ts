import './style.css';

type Unit = "C" | "F" | "K";

function convertTemperature(value: number, from: Unit, to: Unit): number {
  if (from === to) return value;

  // Преобразуем всё сначала в Цельсии
  let celsius: number;
  switch (from) {
    case "F":
      celsius = (value - 32) * 5 / 9;
      break;
    case "K":
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  // А теперь из Цельсия в нужную единицу
  switch (to) {
    case "F":
      return celsius * 9 / 5 + 32;
    case "K":
      return celsius + 273.15;
    default:
      return celsius;
  }
}

const input = document.getElementById("inputValue") as HTMLInputElement;
const inputUnit = document.getElementById("inputUnit") as HTMLSelectElement;
const outputUnit = document.getElementById("outputUnit") as HTMLSelectElement;
const result = document.getElementById("result") as HTMLParagraphElement;
const button = document.getElementById("convertBtn") as HTMLButtonElement;

button.addEventListener("click", () => {
  const value = parseFloat(input.value);
  if (isNaN(value)) {
    result.textContent = "Введите корректное число!";
    return;
  }

  const converted = convertTemperature(value, inputUnit.value as Unit, outputUnit.value as Unit);
  result.textContent = `${converted.toFixed(2)} °${outputUnit.value}`;
});
