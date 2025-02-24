function compras (trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  //const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete;
}

return {
  comprarSorvete,
  comprarTv50,
  comprarTv32,
  manterSaudavel,
}

console.log(compras(true, true)); // { comprarSorvete: false, comprarTv50: true, comprarTv32: false, manterSaud

console.log(compras(true, false)); // { comprarSorvete: false, comprarTv50: false, comprarTv32: true, manterSaudavel: false }

console.log(compras(false, false)); // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: true }

console.log(compras(false, true)); // { comprarSorvete: false, comprarTv50: true, comprarTv32: false, manterSaudavel: false }