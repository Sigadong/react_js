/* useReducer
  Pengendalan Reducer
Reducer merupakan sebuah fungsi yang menerima dua parameter yaitu state saat ini dan action. State
bukanlah hasil dari penggunaan dari useState, secara konsep memang sama-sama state tetapi ini dua
hal yang terpisah.
Penggunaan reducer lebih disukai ketika kita memerlukan pengelolaan state yang lebih kompleks
daripada ketika menggunakan hook useState.
Kembali lagi ke reducer, secara sederhana bentuk fungsinya adalah seperti ini:
  
  let reducer = function(state, action){ }
  
Terlihat kan fungsi reducer menerima 2 parameter yaitu state dan action. Fungsi reducer tersebut harus
mengembalikan sebuah nilai, nilai tersebut yang akan menjadi nilai baru dari state. Seperti ini:

  let reducer = function(state, action){ return 0;}

Pada contoh di atas fungsi reducer mengembalikan nilai 0, itu berarti nilai state berikutnya akan bernilai
0. Tapi tunggu dulu, jika begini lalu gunanya apa??
Nah di sini lah poinnya, sebelum mengembalikan nilai, fungsi reducer tersebut harus memiliki logika
berdasarkan tipe action yang didapatkan.
Misalnya, kita ingin membuat aplikasi counter yang bisa ditambah (increment) atau dikurangi
(decrement), maka itu berarti fungsi reducer kita setidaknya memiliki dua tipe action yaitu increment dan
decrement.

Sehingga fungsi reducer tersebut harus memiliki 2 logika untuk mengubah nilai state berdasarkan dua
tipe action tadi.
Supaya lebih tergambar mari kita lanjutkan contoh kode sebelumnya menjadi seperti ini:
*/

let reducer = function (state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1; // <--- logika increment: nilai state saat ini ditambah 1
    case 'DECREMENT':
      return state - 1; // <--- logika decrement: nilai state saat ini dikurangi 1
    default:
      return state;
  }
}

/* 
Fungsi ini hanyalah fungsi javascript biasa, kita belum membahas tentang penggunaannya di komponen.
Itu berarti fungsi ini terlepas dari komponen, dengan kata lain kita bisa memisahkan logika fitur yang kita buat dari komponen.
Salah satu kelebihan reducer adalah kita bisa mengelompokkan logika sehingga ketika akan ada
perubahan kita cukup mencari logika di fungsi reducer, terpusat dan tidak tercecer.
*/