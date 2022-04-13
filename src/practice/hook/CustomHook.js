/* Custom Hook
Selain Hook yang disediakan oleh React, kita juga bisa membuat hook kita sendiri.
Caranya cukup mudah, seperti membuat fungsi pada javascript biasa, tetapi harus berawal dengan kata use, misalnya useToggle, useSesuatu, dan sebagainya.

Di dalam fungsi custom hook ini kita bisa membungkus logika apa saja untuk memudahkan pengguna
custom hook kita, dan bahkan kita bisa menggunakan hooks lain di dalam fungsi tersebut.
Sehingga seperti hooks di dalam hooks, dan di custom hooks inilah satu-satunya hook bisa dipanggil selain di fungsi komponen.

Misalnya kita akan membuat komponen <Toggle> sederhana yang akan mengembalikan nilai ON atau
OFF dan fungsi untuk melakukan toggle, maka kita bisa buat fungsi dengan nama useToggle seperti ini:
*/

const useToggle = function () {
  const [value, toggle] = useState("OFF");

  // Setelah itu, agar valuenya bisa digunakan oleh pengguna custom hook maka kita perlu mengembalikan nilai, yaitu state dan fungsi toggle
  return [value, toggle];
}

const App = () => {
  let [statusLampu, toggle] = useToggle();
  return <div>
    Lampu saat ini: {statusLampu} <br />
    <button onClick={e => toggle()}>Saklar</button>
  </div>
}

/* 
KESIMPULAN:
1. Dengan Hook kita bisa melakukan hal-hal yang sebelumnya tidak mungkin dilakukan menggunakan function component;
2. Hook memiliki aturan main yang harus kita patuhi agar tidak terjadi error;
3. Ada banyak tipe hooks yang bisa kita manfaatkan untuk berbagai kasus di aplikasi kita;
4. Hook memudahkan kita menulis kode React dengan lebih sederhana.;
5. Kita bisa membuat resusable code menggunakan custom hook.
*/