# 🎂 Selamat Ulang Tahun Nanda! ★ Website Perayaan Bertema MiHoYo

Website perayaan ulang tahun spesial dan interaktif untuk **Nanda**, dirancang dengan estetika dan tema game **MiHoYo / HoYoverse** (*Honkai: Star Rail*, *Zenless Zone Zero*, dan *Genshin Impact*). 

Semua konten teks, percakapan, dan fitur telah diterjemahkan ke dalam **Bahasa Indonesia**.

---

## 🌟 Fitur Utama & Pengoptimalan

1. **🎬 Video Pop-Up Pembuka (Zenless Zone Zero) Tanpa Buffering**:
   - Memutar video ucapan spesial dari folder `Assets/Pop Up Video` (`Eh-ppy Birthday!  Zenless Zone Zero - Zenless Zone Zero (1080p, h264).mp4`).
   - **Optimasi Streaming**: Server kini menggunakan streaming *HTTP 206 Partial Content* dengan *progressive chunking 2MB* dan memisahkan pemuatan live wallpaper latar belakang sehingga video pembuka dapat diputar secara instan dan lancar tanpa buffer!
   - Dilengkapi tombol kontrol suara/jeda dan tombol **"LEWATI"** / **"MASUK KE SITUS"**.
   - Dapat ditonton ulang kapan saja melalui tombol `🎬 VIDEO` di menu atas.

2. **⭐ Kalibrasi Level Ascension / Input Umur**:
   - Terminal interaktif untuk memasukkan usia Nanda dengan tombol stepper (`+` / `-`) atau tombol pilihan cepat (18, 19, 20, 21, 22, 23, 24, 25...).
   - Umur yang dipilih langsung memperbarui seluruh situs:
     - Judul & Banner: `SELAMAT ULANG TAHUN, NANDA! (LEVEL [UMUR])`
     - Kue Ulang Tahun: Menghasilkan tepat `[Umur]` lilin menyala.
     - Paspor Karakter: Status Bintang 5 `Level [Umur]`.
   - Data tersimpan di `localStorage` dan dapat diubah kapan saja dengan mengeklik lencana `LV.[Umur]` di menu atas.

3. **🌌 Live Wallpaper Angkasa (Honkai: Star Rail)**:
   - Video latar belakang dari `Assets/Background/nebula-honkai-star-rail-moewalls-com.mp4` dengan lapisan debu bintang kosmik dan grid futuristik.

4. **🎵 Fonograf Astral Express (Pemutar Musik Latar)**:
   - Memutar lagu tema dari `Bg music/Honkai Star Rail EP Beyond This Station - Honkai Star Rail.mp3`.
   - Dilengkapi animasi piringan hitam berputar, visualizer audio interaktif, pengatur volume, dan tombol jeda/putar.

5. **🎂 Kue Ulang Tahun Surgawi & Permainan Tiup Lilin**:
   - Menampilkan tepat `[Umur]` lilin interaktif.
   - Lilin dapat ditiup satu per satu dengan mengekliknya atau ditiup sekaligus dengan tombol **"TIUP SEMUA LILIN!"**.
   - Meniup semua lilin akan memicu ledakan konfeti, suara selebrasi kemenangan, dan membuka kartu berkah rahasia!

6. **🎫 Warp Banner Gacha Ulang Tahun Bintang 5**:
   - Simulator Warp dengan jaminan 100% Bintang 5 berisi 18 GIF teman HoYoverse (*Firefly, Ellen Joe, Silver Wolf, Herta Kuru Kuru, Stelle, Jane Doe, Yoimiya, dll.*).
   - Dilengkapi animasi bintang jatuh emas dan laci riwayat koleksi kartu.

7. **💬 Terminal Komunikasi Astral (Pesan Chat Interaktif)**:
   - Aplikasi obrolan ala smartphone dengan karakter-karakter MiHoYo: *Firefly, Ellen Joe, Silver Wolf, Madam Herta, Stelle, dan Kapten Zhu Yuan*.
   - Dilengkapi pilihan balasan interaktif dan jawaban seru dalam Bahasa Indonesia.

8. **🖼️ Galeri Kenangan & Stiker**:
   - Menampilkan seluruh 18 GIF dengan filter kategori (*Semua, Honkai: Star Rail, Zenless Zone Zero, Genshin Impact*) dan tombol kirim doa perayaan.

9. **📋 Paspor Karakter Bintang 5 Nanda**:
   - Lembar karakter resmi dengan atribut maksimal (HP: 999,999, CRIT Rate: 100%, CRIT DMG: 520%), pilihan maskot, dan tombol **"SALIN KARTU UCAPAN"**.

---

## 🚀 Cara Menjalankan Situs

Server lokal saat ini sudah aktif berjalan di latar belakang:
👉 **`http://localhost:3000`**

Jika ingin menjalankannya kembali secara manual melalui terminal:
```bash
npm start
```
atau
```bash
node server.js
```

---

*Selamat Ulang Tahun untuk Trailblazer Nanda! Semoga panjang umur, sehat selalu, dan selalu menang gacha 50/50!* ✦
