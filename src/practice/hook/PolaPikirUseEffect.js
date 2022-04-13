/* Pola Pikir useEffect
Seringkali orang membandingkan atau bertanya bagaimana caranya implementasi
componentDidMount dengan Hook, atau implementasi shouldComponentUpdate, implementasi
componentWillUnmount dan lainnya.
Ini biasanya karena orang tersebut sebelumnya menggunakan React berbasis class. Hal itu saya juga
mengalami sendiri, tapi sebetulnya cara berpikirnya adalah berbeda, kita tidak berbicara tentang lifecycle
tetapi lebih ke sinkronisasi.
Itu berarti kita tidak berpikir kapan kita ingin sebuah effect dipanggil? Kita lebih berpikir jika dependency
sebuah effect berubah, effect tersebut akan dijalankan.
Pada kenyataannya, orang masih berpikir lifecycle misalnya dengan mengabaikan variabel sebagai
dependency padahal variabel tersebut digunakan di dalam effect.
Ketika sebuah state atau variabel tau fungsi digunakan di dalam fungsi effect maka harus
dimasukan sebagai effect dependenc
*/

import { useEffect, useState } from "react"

const TimeElapsed = props => {
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSeconds(detik => detik + 1) // <--- menggunakan fungsi updater untuk melakukan increment
    }, 1000);
    return () => clearInterval(intervalId);
  }, []) // <--- sekarang kita tidak perlu mendaftarkan state seconds karena memang tidak dipakai di effect ini

  return <div> {seconds} detik. </div>
}

export default TimeElapsed;