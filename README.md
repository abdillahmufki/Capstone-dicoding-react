# PusGO

PusGO adalah sebuah website yang berguna untuk menginformasikan dan melaporkan gempa secara efektif dan efisien. Website ini didesain dan dirancang agar ramah pengguna dan modern. Tujuan utama PusGO adalah memaksimalkan penyampaian informasi gempa bumi secara paling efektif dan terpercaya. Selain itu, PusGO juga memberikan edukasi dan berita tentang bagaimana penanggulangan gempa yang paling tepat dan efektif. Dengan ini, masyarakat diharapkan menjadi paham dan mengetahui langkah yang paling tepat ketika terjadi gempa serta inisiasi tindakan saat mendapati salah satu tanda gempa bumi. Harapannya, sistem ini dapat memberikan informasi dan edukasi tentang pentingnya melakukan langkah pencegahan ketika terjadi gempa bumi.

## Prasyarat

Sebelum Anda memulai, pastikan Anda telah menginstal:

- Node.js dan npm: [Unduh dan instal dari sini](https://nodejs.org/)
- MySQL: [Unduh dan instal dari sini](https://dev.mysql.com/downloads/)

## Instalasi

Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan proyek di mesin lokal Anda.

### 1. Clone Repository

Clone repository ini ke direktori lokal Anda menggunakan perintah berikut:

```bash
git clone https://github.com/abdillahmufki/Capstone-dicoding-react.git
```

### 2. Instal Dependensi

#### Backend

Masuk ke direktori `backend` dan instal dependensi menggunakan npm:

```bash
cd project-name/backend
npm install
```

#### Frontend

Masuk ke direktori `frontend` dan instal dependensi menggunakan npm:

```bash
cd ../frontend
npm install
```

### 3. Konfigurasi Database

1. **Buat Database MySQL**

   Masuk ke MySQL dan buat database baru:

   ```sql
   CREATE DATABASE capstone_gempa;
   ```

2. **Konfigurasi Koneksi Database**

   Buat file `.env` di direktori `backend` dan tambahkan konfigurasi database:

   ```
   ACCESS_TOKEN_SECRET=masukan-data-random
   REFRESH_TOKEN_SECRET=masukan-data-random
   PORT=4000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=""
   DB_NAME=capstone_gempa
   ```

### 4. Menjalankan Aplikasi

#### Backend

Masuk ke direktori `backend` dan jalankan server Express:

```bash
cd backend
npm start
```

Server backend akan berjalan di `http://localhost:4000`.

#### Frontend

Masuk ke direktori `frontend` dan jalankan aplikasi React:

```bash
cd ../frontend
npm run dev
```

Aplikasi frontend akan berjalan di `http://localhost:5173`.

### 5. Mengakses Aplikasi

Buka browser Anda dan akses `http://localhost:5173` untuk melihat aplikasi berjalan.

## Skrip NPM

Berikut beberapa skrip npm yang tersedia:

### Backend

- `npm run start`: Menjalankan server Express.

### Frontend

- `npm start`: Menjalankan aplikasi React dalam mode pengembangan.
- `npm run build`: Membangun aplikasi React untuk produksi ke dalam folder `build`.

## Struktur Proyek

Berikut adalah struktur direktori dari proyek ini:

```
project-name/
├── backend/
│   ├── node_modules/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
└── ...
```

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request dengan perubahan Anda.

## Lisensi

Proyek ini dilisensikan di bawah MIT License.

---

Ini adalah contoh README yang dapat disesuaikan sesuai dengan kebutuhan spesifik proyek Anda. Jangan lupa untuk mengganti `username` dan `project-name` dengan nama pengguna dan nama proyek yang sesuai.
