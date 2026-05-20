# 🤖 WMC: Advanced Minecraft Bot Control Panel

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotjs&logoColor=white)
![Mineflayer](https://img.shields.io/badge/Mineflayer-Ready-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

WMC (Web Minecraft Controller), Minecraft sunucuları için geliştirilmiş, modern ve web tabanlı bir çoklu bot yönetim panelidir. Bu sistem, tek bir arayüz üzerinden onlarca botu aynı anda yönetmenize olanak tanır.

## 🎓 Eğitim Amaçlı Proje (Educational Purpose)

Bu proje, **Node.js**, **WebSockets (Socket.io)** ve **Mineflayer** kütüphanelerinin entegrasyonunu ve gerçek zamanlı bir kontrol panelinin nasıl inşa edileceğini göstermek amacıyla tamamen **eğitim odaklı** geliştirilmiştir. Yazılımın amacı, ağ protokollerini ve bot otomasyon mantığını öğretmektir.

## ⚡ Neden WMC?

Geleneksel konsol tabanlı botların aksine WMC, **Socket.io** altyapısını kullanarak tarayıcı üzerinden gerçek zamanlı kontrol sağlar. "Zero-Configuration" mantığıyla botlarınızı saniyeler içinde sunucuya dahil edebilirsiniz.

### 🎮 Öne Çıkan Özellikler
*   **Dinamik Bot Spawn Sistemi:** Belirlediğiniz isim, sürüm ve sayıdaki botu, ayarlanabilir gecikme (delay) ile bağlayabilirsiniz.
*   **Gerçek Zamanlı Sistem Günlüğü:** Tüm bağlantı durumlarını ve hataları anlık olarak panel üzerinden takip edebilirsiniz.
*   **Gelişmiş Hareket Senkronizasyonu:** Tüm botlara aynı anda ileri/geri gitme, zıplama veya vuruş yapma komutu verebilirsiniz.
*   **Hassas Bakış Kontrolü:** Botların bakış açılarını derece bazlı (yukarı, aşağı, sağ, sol) kontrol edebilirsiniz.
*   **Akıllı Etkileşim:** Toplu mesaj gönderimi (chat delay destekli) ve envanterdeki eşyaları toplu şekilde yere bırakma (drop) özelliği mevcuttur.
*   **Çok Dilli Arayüz:** Dahili olarak Türkçe ve İngilizce dil desteği sunar.

## 🚀 Kurulum ve Çalıştırma

Sistemi çalıştırmak için bilgisayarınızda **Node.js** yüklü olmalıdır.

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/ubeytkzltsss/WMC-Bot.git
    ```
2.  **Proje Klasörüne Girin:**
    ```bash
    cd WMC-Bot
    ```
3.  **Gerekli Kütüphaneleri Yükleyin:**
    ```bash
    npm install express socket.io mineflayer
    ```
    *(Not: Eğer `package.json` dosyanız yoksa önce `npm init -y` komutunu çalıştırın.)*
4.  **Paneli Başlatın:**
    ```bash
    node server.js
    ```
5.  **Arayüze Erişin:**
    Tarayıcınızı açın ve `http://localhost:3000` adresine giderek yönetim paneline bağlanın.

## 📜 Lisans (License)

Bu proje **MIT Lisansı** altında lisanslanmıştır. Bu, yazılımı özgürce kullanabileceğiniz, kopyalayabileceğiniz ve değiştirebileceğiniz anlamına gelir. Daha fazla detay için projedeki lisans dosyasına göz atabilirsiniz.

## ⚠️ Önemli Uyarı
Bu yazılım tamamen **eğitim ve test amaçlı** geliştirilmiştir. Kullanıcıların, bu aracı kullandıkları sunucuların kurallarına uyması kendi sorumluluğundadır. Sunucu kurallarını ihlal eden eylemlerden geliştirici sorumlu tutulamaz.

Developed by **ubeytkzlts**
