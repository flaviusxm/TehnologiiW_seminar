 const pi_constant = 3.14;
export function calculeazaArea(raza) {
    return pi_constant * raza * raza;
}
export default function showOutput(raza) {
    const result = calculeazaArea(raza);
    console.log(`Rezultatul cautat este ${result}`);
}