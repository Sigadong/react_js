/* 
Hook memiliki beberapa aturan main yang harus di ikuti supaya tidak mengalami kendala, yaitu;
1. Hook hanya boleh dipanggil di top level function.
  Jangan panggil Hook didalam looping, conditional, if else ataupun dari fungsi didalam fungsi(nested function).
  Jadi, selalu panggil Hook di top level functional component.
  Dengan mengikuti aturan main ini kita menjamin bahwa Hook dipanggil dalam urutan yang sama setiap render.

2. Hook harus dipanggil dari fungsi komponen atau custom hook.
Hook tidak boleh dipanggil dari fungsi javascript biasa. Jadi kamu harus memastiakn hal ini:
- panggil Hook dari React function Component
- panggil Hook dari custom Hook(akan kita bahas nanti)
- ini juga berarti Hook tidak bisa dipakai di class component

Berikut adalah beberapa contoh pemanggilan Hook yang sesuai dan tidak sesuai aturan:
*/

const { useState } = require("react")

//  Contoh SESUAI
const Label = ({ text, type }) {
  let [labelType, setLabelType] = useState(type); // Good

  return ...
}

//  Contoh TIDAK SESUAI: memanggil hook didalam looping
const Label = ({ text, type }) {
  for (let i = 0; i < 10; i++) {
    let [counter, setCounter] = useState(i); // Error
  }

  return ...
}

//  Contoh TIDAK SESUAI: memanggil hook didalam conditional
const Label = ({ text, type }) {
  if (type == "primary") {
    let [labelType, setLabelType] = useState(type); // Error
  }

  return ...
}

//  Contoh TIDAK SESUAI: memanggil hook didalam nested funstion/ / non React function
const Label = ({ text, type }) {
  function getLabel() {
    let [labelType, setLabelType] = useState(str); // Error    
  }

  return ...
}

/* 
NOTE:
  Yang dimaksuk pemanggialn hook adalah pemanggilan terhadap nama _hook, misalnya useState(). Adapun untuk variabel yg dihasilkan
  misalnya labelType, setLabelType pada contoh diatas, bebas untuk dipanggil dari mana saja didalam komponen.
  Aturan di atas berlaku untuk semua jenis Hook tidak terbatas pada useState saja.
*/