# 🚀 Praktikum Pemrograman Framework (PBF) - Next.js

Repository ini berisi kumpulan tugas dan *jobsheet* praktikum mata kuliah **Pemrograman Framework** menggunakan **Next.js (Pages Router)**. Repository ini disusun secara bertahap mulai dari inisialisasi *project* dasar, *routing*, integrasi *database*, autentikasi, *unit testing*, hingga proses *deployment* ke *production*.

---

## 🛠️ Teknologi yang Digunakan
Proyek-proyek di dalam repository ini dibangun menggunakan *tech stack* modern:
* **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** CSS Modules / SCSS
* **Database & BaaS:** [Firebase](https://firebase.google.com/) (Firestore)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/) (Credentials Login & Google OAuth)
* **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 📂 Struktur Repository (Monorepo)
Repository ini menggunakan format *monorepo*, di mana setiap folder mewakili satu *jobsheet* atau tahapan pembelajaran. Beberapa materi krusial yang telah diimplementasikan meliputi:
* **Routing & Layouting:** Dynamic Routing, App Shell, Middleware.
* **Rendering Strategy:** Server-Side Rendering (SSR) & Static Site Generation (SSG).
* **API Development:** Pembuatan API Routes internal Next.js.
* **Database Integration:** Operasi CRUD ke Firebase Firestore.
* **Authentication & Authorization:** Sistem Login multi-role (Admin/Member), proteksi halaman (*Route Protection*), dan integrasi Google Login Provider.
* **Unit Testing:** Pengujian komponen antarmuka, halaman statis/dinamis, *middleware*, dan *mocking router/session*.
* **Deployment:** Konfigurasi *production* dan *hosting* ke Vercel.

---

## ⚙️ Cara Menjalankan Secara Lokal

Jika kamu ingin melakukan *clone* dan menjalankan salah satu *jobsheet* di komputer lokal, ikuti langkah-langkah berikut:

### 1. Prasyarat
Pastikan kamu telah menginstal:
* [Node.js](https://nodejs.org/) (versi 18.x atau terbaru)
* Git

### 2. Instalasi
Clone repository ini dan masuk ke folder *jobsheet* yang ingin dijalankan (misalnya: `Jobsheet-20-Deployment-Vercel/my-app`):

```bash
git clone [https://github.com/nurwahibzy/PBF-Next.js.git](https://github.com/nurwahibzy/PBF-Next.js.git)
cd "PBF-Next.js/nama-folder-jobsheet/my-app"
```