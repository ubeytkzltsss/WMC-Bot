# 🤖 WMC: Advanced Minecraft Bot Control Panel

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotjs&logoColor=white)
![Mineflayer](https://img.shields.io/badge/Mineflayer-Ready-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

WMC (Web Minecraft Controller), Minecraft sunucuları için geliştirilmiş, modern ve web tabanlı bir çoklu bot yönetim panelidir[cite: 1]. Bu sistem, tek bir arayüz üzerinden onlarca botu aynı anda yönetmenize olanak tanır[cite: 1].

## 🎓 Eğitim Amaçlı Proje (Educational Purpose)

Bu proje, **Node.js**, **WebSockets (Socket.io)** ve **Mineflayer** kütüphanelerinin entegrasyonunu ve gerçek zamanlı bir kontrol panelinin nasıl inşa edileceğini göstermek amacıyla tamamen **eğitim odaklı** geliştirilmiştir[cite: 1]. Yazılımın amacı, ağ protokollerini ve bot otomasyon mantığını öğretmektir[cite: 1].

## ⚡ Neden WMC?

Geleneksel konsol tabanlı botların aksine WMC, **Socket.io** altyapısını kullanarak tarayıcı üzerinden gerçek zamanlı kontrol sağlar[cite: 1]. "Zero-Configuration" mantığıyla botlarınızı saniyeler içinde sunucuya dahil edebilirsiniz[cite: 1].

### 🎮 Öne Çıkan Özellikler
*   **Dinamik Bot Spawn Sistemi:** Belirlediğiniz isim, sürüm ve sayıdaki botu, ayarlanabilir gecikme (delay) ile bağlayabilirsiniz[cite: 1].
*   **Gerçek Zamanlı Sistem Günlüğü:** Tüm bağlantı durumlarını ve hataları anlık olarak panel üzerinden takip edebilirsiniz[cite: 1].
*   **Gelişmiş Hareket Senkronizasyonu:** Tüm botlara aynı anda ileri/geri gitme, zıplama veya vuruş yapma komutu verebilirsiniz[cite: 1].
*   **Hassas Bakış Kontrolü:** Botların bakış açılarını derece bazlı (yukarı, aşağı, sağ, sol) kontrol edebilirsiniz[cite: 1].
*   **Akıllı Etkileşim:** Toplu mesaj gönderimi (chat delay destekli) ve envanterdeki eşyaları toplu şekilde yere bırakma (drop) özelliği mevcuttur[cite: 1].
*   **Çok Dilli Arayüz:** Dahili olarak Türkçe ve İngilizce dil desteği sunar[cite: 1].

## 🚀 Kurulum ve Çalıştırma

Sistemi çalıştırmak için bilgisayarınızda **Node.js** yüklü olmalıdır[cite: 1].

1.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install express socket.io mineflayer
    ```

2.  **Sistemi Başlatın:**
    ```bash
    node server.js
    ```

3.  **Paneli Açın:**
    Tarayıcınızdan `http://localhost:3000` adresine gidin[cite: 1].

## 📜 Lisans (License)

Bu proje **MIT Lisansı** altında lisanslanmıştır. Bu, yazılımı özgürce kullanabileceğiniz, kopyalayabileceğiniz ve değiştirebileceğiniz anlamına gelir. Daha fazla detay için projedeki lisans dosyasına göz atabilirsiniz.

## ⚠️ Önemli Uyarı
Bu yazılım tamamen **eğitim ve test amaçlı** geliştirilmiştir[cite: 1]. Kullanıcıların, bu aracı kullandıkları sunucuların kurallarına uyması kendi sorumluluğundadır[cite: 1]. Sunucu kurallarını ihlal eden eylemlerden geliştirici sorumlu tutulamaz[cite: 1].

Developed by **ubeytkzlts**
