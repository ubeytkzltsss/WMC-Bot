# ⚡ WMC (Web Minecraft Control) - Stress Testing & Educational Tool

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Educational_Only-orange?style=for-the-badge" />
</p>

---

## ⚠️ ÖNEMLİ: EĞİTİM AMAÇLI KULLANIM | IMPORTANT: EDUCATIONAL USE ONLY

**[TR]** Bu proje, dağıtık sistemlerin Minecraft protokolü üzerindeki etkilerini incelemek, sunucu yük testlerini (stress test) simüle etmek ve Node.js ile WebSocket mimarisini öğrenmek amacıyla geliştirilmiştir. Kötü niyetli kullanımı kesinlikle önerilmez. Sunucu sahiplerinin kendi sistemlerini test etmesi için tasarlanmıştır.

**[EN]** This project is developed solely for educational purposes, such as analyzing the effects of distributed systems on the Minecraft protocol, simulating server stress tests, and learning Node.js/WebSocket architecture. It is designed for server owners to test their own systems. Malicious use is strictly prohibited.

---

## 📖 Proje Hakkında / About

WMC, web tabanlı bir arayüz üzerinden birden fazla Mineflayer botunu senkronize bir şekilde yönetmenizi sağlar[cite: 5]. Proje, istemci-sunucu etkileşimlerini görselleştirmek ve otomasyon mantığını kavramak için harika bir örnektir.

---

## ✨ Teknik Özellikler / Technical Features

*   🛠 **Sync Control:** Tüm botlara aynı anda hareket, zıplama ve etkileşim komutları gönderme[cite: 5].
*   🌐 **Dynamic UI:** React benzeri dinamik bir web arayüzü ve gerçek zamanlı sistem logları[cite: 5].
*   🌍 **I18n Support:** Türkçe ve İngilizce dil desteğiyle evrensel kullanım[cite: 5].
*   ⚙️ **Advanced Config:** Gecikme (delay), sürüm ve bot sayısı gibi parametrelerin anlık ayarlanması[cite: 5].
*   ♻️ **Resource Management:** Tek tıkla tüm bot bağlantılarını güvenli bir şekilde sonlandırma[cite: 5].

---

## 🚀 Kurulum ve Çalıştırma / Installation

### 📋 Ön Koşullar
- **Node.js** (LTS Sürümü)
- **NPM**

### 🔧 Adımlar
```bash
# Projeyi yerel makinenize çekin
git clone [https://github.com/ubeytkzlts/wmc-panel.git](https://github.com/ubeytkzlts/wmc-panel.git)

# Proje klasörüne girin
cd wmc-panel

# Gerekli bağımlılıkları yükleyin
npm install express socket.io mineflayer

# Uygulamayı ayağa kaldırın
node server.js

Tarayıcınızda http://localhost:3000 adresini açarak panel üzerinden kendi yerel sunucunuzda testlere başlayabilirsiniz.
⚖️ Yasal Uyarı / Legal Disclaimer

[TR] Bu yazılımın izinsiz sunucularda kullanılması yasal sorunlara yol açabilir. Yazılımın kullanımından doğacak her türlü hukuki sorumluluk kullanıcıya aittir. Geliştirici hiçbir sorumluluk kabul etmez[cite: 5].

[EN] Using this software on unauthorized servers may lead to legal issues. The user assumes all legal responsibility arising from the use of the software. The developer accepts no liability[cite: 5].
👤 Geliştirici / Developer

    Ubeyt Kzlts - GitHub Profilim
