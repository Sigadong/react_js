/* useLayoutEffect
useLayoutEffect sesuai namanya sangat mirip dengan useEffect, bedanya useLayoutEffect
akan dipanggil setelah komponen selesai melakukan perubahan pada DOM. Itu berarti proses ini terjadi secara synchronous.
Cara penggunaan dan bentuk dari fungsinya pun sama persis seperti useEffect yaitu menerima fungsi
sebagai parameter pertama dan Array berupa dependencies sebagai parameter kedua.
useLayoutEffect biasanya digunakan untuk menghitung nilai yang hanya bisa didapatkan saat DOM
selesai diupdate. Misalnya untuk menangkap nilai lebar halaman atau viewport.

NB: 
  Selalu gunakan useEffect jika memungkinkan untuk menghindari pemblokiran visual saat terjadi update DOM.
*/