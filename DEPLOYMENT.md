# 🚀 Deployment React App ke VPS dengan Apache

Dokumentasi ini menjelaskan langkah-langkah untuk:

- Membuat build React (Vite)
- Upload hasil build ke VPS
- Konfigurasi Apache dengan domain
- Mengaktifkan HTTPS
- Menampilkan website di browser

**Semua langkah ini berhasil dilakukan pada domain:**

👉 **https://kelompoksatu.web.id**

---

## 📦 Persiapan di Lokal

### 1. Build React untuk Production

Jalankan:

```bash
npm run build
```

Output akan berada di:

```
dist/
```

**Catatan:**

Pastikan gambar di-import di React, contoh:

```jsx
import heroImg from './assets/hero.png'
<img src={heroImg} />
```

---

## 🛠 Persiapan di VPS

### 2. Membuat folder tujuan di server

Masuk ke server via SSH:

```bash
ssh username@server_ip
```

Buat folder untuk aplikasi:

```bash
sudo mkdir -p /var/www/myapp
```

### 🔐 Izin Folder untuk Upload

Sebelum upload:

```bash
sudo chown -R username:username /var/www/myapp
sudo chmod -R 775 /var/www/myapp
```

---

## ⬆️ Upload Files dengan FileZilla

Upload isi dari folder `dist` ke VPS:

```
/var/www/myapp
```

**⚠️ Penting:**

- Upload **isi** `dist`, **bukan** folder `dist`-nya.

Struktur final:

```
/var/www/myapp/
├─ index.html
└─ assets/
    ├─ index-xxxxx.js
    ├─ index-xxxxx.css
    └─ images...
```

### 🔁 Kembalikan Izin untuk Apache

Setelah upload selesai:

```bash
sudo chown -R www-data:www-data /var/www/myapp
sudo chmod -R 755 /var/www/myapp
```

---

## 🌍 Konfigurasi Apache

### 3. Konfigurasi HTTP (redirect ke HTTPS)

Buat file:

```bash
sudo nano /etc/apache2/sites-available/kelompoksatu.conf
```

Isi:

```apache
<VirtualHost *:80>
    ServerName kelompoksatu.web.id
    ServerAlias www.kelompoksatu.web.id

    DocumentRoot /var/www/myapp

    RewriteEngine On
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>
```

### 4. Konfigurasi HTTPS (serve React SPA)

Buat file:

```bash
sudo nano /etc/apache2/sites-available/kelompoksatu-ssl.conf
```

Isi:

```apache
<VirtualHost *:443>
    ServerName kelompoksatu.web.id
    ServerAlias www.kelompoksatu.web.id

    DocumentRoot /var/www/myapp

    <Directory /var/www/myapp>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted

        # SPA routing, tanpa mengganggu .js/.css
        FallbackResource /index.html
    </Directory>

    SSLEngine On
    SSLCertificateFile /etc/letsencrypt/live/kelompoksatu.web.id/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/kelompoksatu.web.id/privkey.pem
</VirtualHost>
```

### 5. Enable modules & sites

```bash
sudo a2enmod rewrite
sudo a2enmod ssl
sudo a2ensite kelompoksatu.conf
sudo a2ensite kelompoksatu-ssl.conf
```

Test konfigurasi:

```bash
sudo apache2ctl configtest
```

Jika OK:

```bash
sudo systemctl restart apache2
```

---

## 🔒 SSL dengan Let's Encrypt

Jika belum punya sertifikat:

Install certbot:

```bash
sudo apt install certbot python3-certbot-apache -y
```

Generate SSL:

```bash
sudo certbot --apache -d kelompoksatu.web.id -d www.kelompoksatu.web.id
```

---

## 🎉 Testing

Buka di browser:

```
https://kelompoksatu.web.id
```

Website tampil dengan:

- ✔ React SPA
- ✔ Routing bekerja
- ✔ HTTPS aktif
- ✔ Asset tampil normal
- ✔ Gambar aksesable via: `https://kelompoksatu.web.id/assets/...`

---

## 📌 Ringkasan

**Langkah utama:**

1. **Build React:** `npm run build`
2. **Upload** isi `dist/` ke `/var/www/myapp`
3. **Set ownership:** `www-data:www-data`
4. **Konfigurasi Apache:**
   - port 80 → redirect HTTPS
   - port 443 → serve SPA + SSL
5. **Install SSL** via Certbot
6. **Restart Apache**
7. **Website live** 🎉

---

## 🤝 Notes

- ✅ Semua langkah ini berhasil **100%**
- ✅ Deployment bisa diulang kapan saja cukup:
  1. `npm run build`
  2. upload isi `dist`
  3. replace files di server

---

## 🔄 Update Website (Re-deployment)

Untuk update website di kemudian hari:

1. **Build ulang:**
   ```bash
   npm run build
   ```

2. **Set izin folder untuk upload:**
   ```bash
   sudo chown -R username:username /var/www/myapp
   sudo chmod -R 775 /var/www/myapp
   ```

3. **Upload via FileZilla** (replace semua file)

4. **Kembalikan izin Apache:**
   ```bash
   sudo chown -R www-data:www-data /var/www/myapp
   sudo chmod -R 755 /var/www/myapp
   ```

5. **Clear cache browser** (Ctrl + Shift + R)

Done! ✅
