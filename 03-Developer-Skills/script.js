// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function amplitude(dados) {
  let max = dados[0];
  let min = dados[0];
  for (let i = 0; i < dados.length; i++) {
    //if (typeof dados[i] != 'Number') continue;
    console.log(data[i]);
    if (dados[i] > max) {
      max = dados[i];
    }
    if (dados[i] < min) {
      min = dados[i];
    }
  }
  console.log(max, min);
  return max - min;
}

console.log(amplitude(temperatures));
