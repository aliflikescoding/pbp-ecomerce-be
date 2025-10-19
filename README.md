# 🛍️ pbp-ecomerce-be

Backend untuk proyek **PBP E-Commerce**  
Aplikasi ini dibuat menggunakan **Node.js**, **Express.js**, **Prisma ORM**, dan **PostgreSQL** untuk mengelola data produk, user, cart, dan transaksi.

---

## 🚀 Cara Setup Backend

### 1. Clone Repository
Pastikan kamu sudah menginstall **Node.js** dan **npm** di komputer kamu.
```bash
git clone https://github.com/username/pbp-ecomerce-be.git
cd pbp-ecomerce-be
```

---

### 2. Install Dependencies
Jalankan perintah berikut untuk menginstal semua package yang dibutuhkan:
```bash
npm install
```

---

### 3. Konfigurasi Environment (`.env`)
Lihat file contoh:
```
.env.example
```

Buat file baru bernama `.env` di root folder proyek, lalu isi dengan variabel sesuai konfigurasi database kamu sendiri.

Contoh isi:
```
DATABASE_URL="postgresql://user:password@localhost:5432/pbp_ecomerce"
JWT_SECRET="secretkamu"
PORT=5000
```

---

### 4. Jalankan Migrasi Database
Untuk membuat struktur tabel di database:
```bash
npx prisma migrate dev
```

---

### 5. Generate Prisma Client
Agar Prisma dapat digunakan di dalam kode backend:
```bash
npx prisma generate
```

---

### 6. Seeding Database

#### a. Generate Akun Admin
Untuk membuat akun admin default, jalankan:
```bash
npm run script:generateAdmin
```
Akun admin akan dibuat secara otomatis dengan data berikut:
- **Email:** `admin@admin.com`  
- **Password:** `Admin123_`

#### b. Jalankan Seeding Data Lain
Setelah admin berhasil dibuat, jalankan perintah berikut untuk mengisi data dummy lain (produk, kategori, dll):
```bash
npm run script:seed
```

---

### 7. Jalankan Server
Setelah semua langkah di atas selesai, jalankan server backend:
```bash
npm run devstart
```

Server akan berjalan secara default di:
```
http://localhost:5000
```

---

### 8. (Opsional) Jalankan Prisma Studio
Untuk melihat isi database melalui GUI bawaan Prisma:
```bash
npx prisma studio
```
---

## 🧑‍💻 Dibuat Oleh
**Tim PBP E-Commerce**  
📅 **Teknologi:** Node.js, Express.js, Prisma ORM, PostgreSQL
