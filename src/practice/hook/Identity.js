/* Identity
Identity merupakan nilai pasti yang dimiliki oleh setiap identifier, misalkan sebuah fungsi yang kita
deklarasikan memiliki identity berbeda-beda.

Kenapa ini penting? karena sebuah fungsi dengan nama yang sama memiliki identity yang berbeda pada tiap render.
Ini akan berbahaya sekali jika kita memasukan fungsi yang identity nya tidak sama setiap render ke
dalam dependency useEffect, kenapa? karena hal tersebut akan menyebabkan render loop.
Sama seperti kita mengubah state dari dalam useEffect padahal state tersebut menjadi dependency
effect itu sendiri.
*/

const Komponenku = props => {
  let [menu, setMenu] = useEffect([]);

  useEffect(() => {
    const fetchMenu = function () {
      return ['nasi padang', 'nasi uduk', 'nasi gudeg'];
    }
    let data = fetchMenu();
    setMenu(data);
  }, []);

  return <div>
    {menu.map(makanan => <div>{makanan}</div>)}
  </div>
}

/* 
Dengan cara di atas, kita bisa menyelesaikan permasalah render loop yang diakibatkan oleh effect yang
memerlukan dependency fungsi di luar effect. Ingat, setiap fungsi, meskipun sama secara deklarasi, dia
akan memiliki identity yang berbeda antar render.

Cara di atas bisa kita lakukan, tetapi tidak selalu bisa kita gunakan, misalkan fungsi fetchMenu
merupakan fungsi helper yang tidak dipakai di satu komponen saja, tidak mungkin kan kita letakkan di
dalam useEffect sebuah komponen, Jika begitu bagaimana komponen lain akan menggunakannya?? 
  Menggunakan hook selanjutnya yaitu useCallback
*/