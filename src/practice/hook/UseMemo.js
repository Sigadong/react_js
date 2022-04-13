/* useMemo
_hook useMemo berfungsi mirip seperti useCallback, bentuk fungsinya pun hampir sama, yaitu:
useMemo(() => fn, deps);
Perbedaannya adalah, useMemo akan menggunakan deps untuk menentukan apakah fn akan dipanggil
atau tidak, mirip seperti effect?
Tidak juga, useMemo fn tidak akan dipanggil setelah render seperti halnya useEffect, akan tetapi
menunggu fungsi tersebut dipanggil seperti useCallback.
Jika deps yang diberikan pada useMemo tidak berubah, maka useMemo akan otomatis mengembalikan
nilai yang sama seperti pemanggilan fn sebelumnya, tanpa memanggil fn lagi. Misalnya begini:
 */

const fetchMenu = function () {
  return ['nasi padang', 'nasi uduk', 'nasi gudeg'];
}

let menu = useMemo(() => {
  if (props.wilayah == 'bali') return ['ayam betutu'];
  return fetcMenu();
}, [props.wilayah]);

/* 
Jika misalnya terjadi render ulang, dan nilai dari props.wilayah tidak berubah, maka fungsi
fetchMenu tidak akan memanggil fungsi fn tapi langsung mengembalikan nilai sebelumnya yang sama
yaitu ['nasi padang', 'nasi goreng', 'mie goreng'].

Dengan demikian, useMemo cocok jika digunakan untuk membungkus fungsi-fungsi yang memerlukan
komputasi yang kompleks, sehingga bisa menghemat pemanggilan, dengan kata lain, kita yakin bahwa
jika nilai-nilai pada deps tidak ada yang berubah, maka fungsi yang dibungkus pada useMemo pasti akan
mengmbalikan nilai yang sama, sehingga tidak perlu dipanggil ulang / tidak perlu komputasi ulang
*/