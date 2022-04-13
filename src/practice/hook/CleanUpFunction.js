/* Pada contoh Effect sebelumnya masih ada kurang, yaitu kita belum melakukan clearance / pembersihan
terhadap interval yang kita buat di dalam Effect 2 menggunakan clearInterval.
Meskipun komponen kita bisa berjalan tanpa kendala pada awalnya, tapi kalau kita tidak memanggil
clearInterval maka seandainya kita berpindah halaman, akan terjadi memory leak disebabkan
interval akan tetap berjalan setiap detik meskipun komponen sudah tidak digunakan. Kapan kita perlu
memanggil clearInterval jawabannya adalah saat komponen kita akan dihancurkan dari tampilan /
DOM (unmounted).
tidak semua memory leak akan berakibat fatal. tapi penting untuk memperhatikan hal ini.
Baik, lalu bagaimana caranya memanggil setInterval saat komponen kita unmounted? Ingat bahwa
parameter pertama yang kita berikan untuk _hook useEffect adalah berupa fungsi.
Di sini kuncinya, untuk memanggil setInterval saat komponen kita unmounted maka dari fungsi Effect
harus mengembalikan fungsi lagi, fungsi ini disebut juga Clean Up Function. Fungsi ini tidak akan
dieksekusi kecuali saat komponen unmounted saja.  */

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
    // kita tangkap id interval ke dalam variabel `intervalId`
    let intervalId = setInterval(() => {
      setSeconds(second => second + 1);
    }, 1000);
    //------ CLEAN UP FUNCTION ---------//
    // fungsi ini hanya akan dipanggil setelah komponen unmounted
    return function () {
      clearInterval(intervalId) // <--- panggil clearInterval disini
    }
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