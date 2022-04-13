/* 
Render Loop ~3
render loop adalah kondisi ketika komponen terus-terusan melakukan render ulang yang akan
menyebabkan komponen tersebut crash.
Hal ini umum terjadi ketika seseorang salah menggunakan State dan Effect
Contoh:
*/
import { useEffect, useState } from "react"

const Component = props => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
  }, [counter]);

  return <div> {counter} </div>
}

/* 
Jika komponen tersebut di_render_ akan menyebabkan render loop dikarenakan komponen tersebut
memiliki effect yang bergantung pada nilai State counter sementara itu di dalam effect tersebut malah
mengubah nilai State counter yang akan menjadi trigger effect tersebut dijalankan lagi setelah rerender begitu seterusnya.
  
  Dengan kata lain, render loop akan terjadi jika Effect mengubah nilai dependency nya sendiri. Untuk
  itu hindari melakukan hal tersebut.
*/