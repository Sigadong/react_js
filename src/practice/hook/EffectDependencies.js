/* 
Effect Dependencies
Apa itu Effect Dependencies? Effect Dependencies merupakan Array yang bisa kita isi identifier
baik berupa variabel maupun fungsi yang akan menentukan kapan fungsi Effect akan dipanggil.

Array tersebut kita berikan sebagai parameter kedua pada hook useEffect. Kita telah belajar 2 hal:
1. Kita tidak memberikan Array dependency pada hook useEffect, ini akan menyebabkan fungsi
Effect akan selalu dipanggil setiap render, baik render pertama maupun re-render setelahnya.
  useEffect(function(){
  if(text.length) localStorage.setItem("edit-text", text);
  }); // <--- tidak ada array `deps`

2. Pada contoh berkutnya kita telah belajar menggunakan Effect Dependencies untuk meminta
komponen menjalankan Effect sekali saja yaitu dengan cara memberikan Array kosong sebagai
dependency.
  useEffect(function(){
  setText(localStorage.getItem("edit-text"));
  }, []); // <--- array kosong diberikan sebagai `deps`
Yang belum kita pelajari adalah memberikan identifier agar fungsi Effect yang kita berikan dipanggil saat
salah satu nilai dari identifier tersebut berubah.
*/

import React, { useState, useEffect } from "react";

const Editing = () => {
  let [text, setText] = useState("");
  let [seconds, setSeconds] = useState(0);

  // EFFECT 1 : dipanggil hanya jika nilai text berubah
  useEffect(function () {
    if (text.length) localStorage.setItem("edit-text", text);
  }, [text]);
  // EFFECT 2 : dipanggil hanya sekali sesaat setelah render pertama
  useEffect(function () {
    setText(localStorage.getItem("edit-text"));

    setInterval(() => {
      setSeconds(second => second + 1);
    }, 1000);
  }, []);

  return (
    <>
      Waktu: {Math.floor(seconds / 60)} menit {seconds % 60} detik
      <br />
      <textarea
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </>
  );
};

export default Editing;