// HOOK: useEffect()

/* 
Side effect atau yang biasa disebut Effect saja bukanlah terminologi khusus di ReactJS. Konsep ini
berasal dari paradigma functional programming.

Effect adalah operasi di dalam sebuah fungsi yang memengaruhi hal diluar lingkup fungsi itu.

Misalnya berinteraksi dengan web API (menghasilkan request, data disimpan di basis data, atau data
diambil dari basis data, dll), mencatat peristiwa ke dalam log, operasi-operasi tersebut memengaruhi hal
diluar lingkup fungsi.

Tapi Effect tidak terbatas pada contoh-contoh di atas, ada contoh lain yang lebih sulit diidentifikasi
sebagai Effect, misalnya memanggil setTimeout() di dalam fungsi, menyisipkan item baru ke dalam array
yang didapat dari function argument, hal-hal itu termasuk ke dalam Effect.

Fungsi yang tidak memiliki Effect disebut pure function yaitu fungsi yang akan selalu mengembalikan nilai/output yang sama jika diberi input yang sama
*/

// Berikut adalah contoh fungsi yang tidak pure:
let total = 0;
function jumlah(number) {
  total = total + number;
  return total;
}
jumlah(3) // hasilnya 3;
jumlah(3) // hasilnya 6, karena nilai total sudah berubah disebabkan pemanggilan pertama;

/* 
fungsi jumlah pada contoh di atas termasuk sebagai fungsi yang tidak pure, fungsi ini memiliki Effect.
Pertama, hasil dari pemanggilan jumlah(number) bergantung pada nilai variabel total yang berada
diluar lingkup fungsi.
Kedua, fungsi jumlah juga mengubah nilai total di dalam operasinya sehingga akan memengaruhi
pemanggilan berikutnya. 

Berikut contoh pure function:
*/
function jumlah(a, b) {
  return a + b;
}
jumlah(3, 4) // hasilnya 7
jumlah(3, 4) // hasilnya 7
jumlah(3, 4) // hasilnya 7

/*
fungsi jumlah pada contoh di atas merupakan pure function, tidak peduli berapa kali kita memanggil
fungsi jumlah jika inputnya sama maka outputnya akan selalu sama.

Bagaimana? sudah punya gambaran kan mengenai pure function dan Effect.

Di ReactJS, kita akan membuat komponen menggunakan fungsi, pada dasarnya komponen itu
merupakan pure function, yaitu kita berikan props kemudian komponen tersebut akan selalu
menghasilkan tampilan yang sama dari proses render. Misalnya komponen berikut::
  const Editing = ({ value }) => {
  return <textarea value={value} />;
  };

  // Komponen di bawah akan menghasilkan textarea dengan nilai sesuai
  prop value, yaitu "Edit text di sini"
  <Editing value="Edit text di sini"/>

Komponen di atas merupakan contoh pure function, komponen <Editing> menerima props value dan
akan mengembalikan nilai value tersebut sebagai nilai <textarea>.
Komponen tersebut juga tidak melakukan operasi yang dipengaruhi atau mempengaruhi hal di luar fungsi
itu sendiri.
Jika kita memberikan nilai yang sama ke dalam props value maka hasil rendernya pun akan selalu
sama.

Komponen di atas akan menghasilkan <textarea> yang bersifat read only, agar <textarea> tersebut
bisa diubah maka kita perlu menggunakan State untuk menyimpan nilai dari <textarea> tersebut lalu
kita ubah nilainya dari dalam onChange handler, dengan kata lain kita update State ketika user mengetik
di dalam <textarea> tersebut.
Maka kode di atas akan kita menjadi seperti ini:
*/

const Editing = () => {
  let [text, setText] = useState(""); //<--- state
  return <textarea
    value={text} // <--- value mengambil nilai text
    onChange={e => setText(e.target.value)} // <--- update state text ketika nilai textarea berubah; 
  />
}
