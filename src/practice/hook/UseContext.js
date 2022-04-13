/* useContext ~2
Context adalah sebuah cara untuk melempar nilai ke komponen child tanpa melalui props. Seperti yang
kita tahu bahwa alur di data di React mengalir dari parent ke child melalui props.
Tetapi terkadang hal itu sangat tidak praktikal, misalnya data yang perlu dipakai oleh banyak komponen
child dan tingkat nested nya sangat dalam.
Data seperti itu misalnya adalah data user authentication, theme, maupun data lain yang bersifat "global".
Untuk memudahkan hal itu React menyediakan context.
Dengan menggunakan context kita bisa melewati cara menggunakan props sehingga kita bisa
memberikan data ke child manapun di level nested manapun.
Tapi karena ini tidak sesuai dengan React data flow, penggunaan context akan menyebabkan
penggunaan ulang kode (reusability) semakin sulit, oleh karena itu sebaiknya cara ini digunakan secara
tidak berlebihan dan hanya untuk data-data yang memang bersifat global.

Alur bekerja dengan context adalah seperti ini:
1. Kita definisikan context dengan data yang ingin kita sediakan
2. Setelah didefinisikan, kita broadcast agar context tersebut tersedia untuk komponen-komponen child
3. Kita gunakan nilai context yang sudah didefinisikan dari komponen child

- Definisikan Context ~3
Untuk mendefinisikan context kita gunakan kode berikut:
  let TemaSitus = React.createContext('light');
Pada kode di atas kita membuat context bernama TemaSitus, kemudian kita berikan nilai default light.

- Broadcast ke Komponen Child ~3
Untuk melakukan broadcast ke komponen child kita perlu menaruh kodenya di dalam komponen top
level, atau komponen parent paling atas di tree aplikasi kita. Misalnya di dalam entry aplikasi kita,
App.js. Kode untuk broadcast contextnya adalah seperti ini:
*/
let TemaSitus = React.createContext('light');

const App = props => {
  return <div>
    <TemaSitus.Provider value={'light'}>
      <Child />
    </TemaSitus>
  </div>
}

// Menggunakan Nilai Context di Komponen
const Child = props => {
  let tema = useContext(TemaSitus); // <---- akses nilai Context
  TemaSitus
  return <div>
    Tema situs sekarang adalah {tema}
  </div>
}

/* 
Perhatikan bahwa kita tidak perlu melempar props ke komponen <Child> dari komponen <App>(parent), itulah gunanya Context.
NB: 
  Jangan menggunakan context untuk data-data yang sebetulnya hanya perlu di lempar melalui
  props. Ingat, gunakan Context seperlunya saja untuk melempar data yang bersifat global misalnya.
*/