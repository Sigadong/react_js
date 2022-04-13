/* 
Berbeda hal jika komponen di atas perlu melakukan sinkronisasi nilai State text ke local storage. Kita
memerlukan Effect untuk menyimpan nilai tersebut, kode tersebut kita letakkan di dalam useEffect,
bentuk dari hook useEffect adalah seperti ini:
  
  useEffect(fn, deps);

Penjelasan: fn merupakan fungsi yang akan kita berikan ke dalam useEffect agar dipanggil
setelah komponen selesai melakukan render. Sementara itu deps adalah Array berisi identifier baik
variabel atau fungsi yang akan menyebabkan fn dipanggil lagi saat nilai identifier tersebut
mengalami perubahan. deps bersifat opsional dan bisa kita abaikan.

Peringatan! fungsi fn tidak boleh async ya. Jika perlu fungsi async bikin fungsi lain di luar effect
kemudian panggil di dalam effect.

Fungsi anonymous yang kita berikan di dalamnya terdapat kode untuk menyimpan nilai State text ke
local storage yaitu kode localStorage.setItem("edit-text", text) dengan melakukan
pengecekkan terlebih dahulu apakah State text tidak bernilai string kosong.

Komponen ini telah berhasil melakukan sinkronisasi State text ke local storage, dan inilah salah satu
cara berpikir Effect yaitu sinkronisasi.
*/

import React, { useState, useEffect } from "react";

const Editing = () => {
  let [text, setText] = useState("");

  useEffect(function () {
    if (text.length) localStorage.setItem("edit-text", text);
  })

  useEffect(function () {
    setText(localStorage.getItem("edit-text"));
  }, []); // <--- array kosong diberikan sebagai `deps`

  return (
    <textarea type="text" value={text} onChange={e => setText(e.target.value)} />
  );
}

/* 
Array kosong sebagai deps atau dependency artinya kita meminta komponen supaya menjalankan
fungsi Effect sekali saja, yaitu sesaat setelah komponen melakukan render pertama kali.
Jika ternyata komponen melakukan render ulang misalnya disebabkan State text berubah, maka Effect
ini tidak akan dipanggil lagi.

Secara logika sesaat setelah render pertama kali merupakan waktu yang tepat untuk mengupdate nilai
State text dari local storage sehingga textarea akan memiliki nilai sesuai teks yang tersimpan di local
storage, oleh karena itu kita membuat Effect seperti di atas.

Dengan begitu sekarang jika kita mengetik teks baru lalu kita muat ulang peramban, komponen kita akan
memberikan teks sesuai yang terakhir kita ketik.
*/