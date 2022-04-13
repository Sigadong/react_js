/* Urutan Eksekusi
hook useEffect akan dijalankan setelah komponen selesai melakukan render. Jika dependency yang
diberikan berupa array kosong, itu berarti sebuah effect dipanggil hanya sekali yaitu setelah tampilan
selesai diproses pada layar, itulah mengapa banyak yang menyamakannya dengan componentDidMount
seperti pada komponen berbasis_class.
Urutan eksekusi yang benar adalah seperti ini:
  - render
  - effect dijalankan
  - (state yang dijadikan dependency berubah)
  - re-render (dengan state baru)
  - fungsi clean up dijalankan ----> dijalankan setelah re-render selesai
  - effect dijalankan lagi

Terlihat aneh memang, tapi ada alasan dibalik urutan ini, kenapa fungsi clean up dijalankan setelah rerender, bukan dijalankan sebelum re-render?
Jawabannya adalah performa, agar tidak ada yang mengganggu proses re-render, jadi React
memastikan proses re-render berjalan mulus dan tuntas mengupdate tampilan pada layar, baru
menjalankan fungsi clean up untuk effect sebelumnya, setelah itu baru dijalankan effect baru dengan nilai
dependency yang baru.
*/
import { useState, useEffect } from "react";

const CleanupChat = props => {
  let [friend, setFriend] = useState(null);

  useEffect(() => {
    if (!friend) return;
    console.log(`EFFECT: subscribe chat message dari ${friend}`);

    return () => {
      console.log(`CLEANUP: unsubscribe chat message dari ${friend}`);
    };
  }, [friend]);

  friend && console.log(`RENDER: friend ${friend}`);

  return (
    <div>
      <button onClick={e => setFriend("Azamuddin")}>Azamuddin</button>
      <button onClick={e => setFriend("Hafid")}>Hafid</button>
      <br /> <br />
      {friend ? `friend ${friend}` : "no opened friend"}
    </div>
  );
}

export default CleanupChat;