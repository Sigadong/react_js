// HOOK: useRefs()

/* 
Refs merupakan cara untuk menyimpan referensi nilai, baik itu DOM node, class component ataupun nilai primitif.
Sepintas useRefs ini mirip dengan useState yaitu untuk menyimpan nilai, bedanya adalah ketika State berubah maka komponen akan melakukan render ualang.
Selain itu tentu agak sedikit beda sintak yang digunakan, seperti ini:
*/

let [counter, setCounter] = useState(0);

let counterRef = useRef(0);

// Cara mengaksesnya pun berbeda
let [counter, setCounter] = useState(0);

let counterRef = useRef(0);

// akses state counter
console.log(counter);

// akses ref counterRef
console.log(counterRef.current);

// Begitu pula jika ingin mengupdate Refs, kita harus mengubah nilai current dari Refs tersebut seperti ini.
counterRef.current = counterRef.current + 1; // Update increment nilai counterRef

/* 
Refs tidak terbatas pada nilai primitif saja, Refs bisa digunakan untuk mereferensikan ke fungsi, objek,
komponen, ataupun DOM Node.
Memang tujuan dari Refs ini adalah untuk merefensikan objek-objek di atas untuk mengontrol logika
secara manual, dalam arti tidak menggunakan alur React.

Contoh kasus yang mungkin memang perlu menggunakan Refs:
  - Integrasi dengan library pihak ke-3 yang tidak ada versi untuk React;
  - Akses dan manipulasi DOM node secara manual (selama bisa menggunakan alur React, hindari hal ini);
  - Mengakses method pada komponen yang dibuat dengan class dari parent (sebaiknya dihindari jika memungkinkan);
  - Menjalankan animasi secara imperative.
Hindari penggunaan Refs untuk apapun yang bisa dilakukan dengan alur React --secara deklaratif
*/