# Freelance Hizmet Platformu API'si

Freelance hizmetlerin listelenmesini ve keşfedilmesini sağlayan platformun backend API'sidir. Kullanıcılar hesap oluşturup oturum açabilir; satıcılar hizmet ilanı yayınlayabilir, ilanlar kategori, fiyat ve arama ölçütleriyle listelenebilir.

## Yöntemler

- İstemci ve sunucu arasındaki iletişim REST API üzerinden sağlanır.
- Kimlik doğrulama JWT ve HTTP-only çerezlerle; parolalar bcrypt ile güvenli biçimde yönetilir.
- Satıcı işlemleri ve ilan sahipliği erişim kontrolüyle doğrulanır.
- İlan arama ve filtreleme veritabanı sorgularıyla gerçekleştirilir.
- Görsel yüklemeleri Multer ile alınır ve Cloudinary'de saklanır.
- İstek sınırlandırma ve merkezi hata yönetimi uygulanır.

## Teknolojiler

Node.js, TypeScript, Express 5, MongoDB, Mongoose, JWT, bcrypt, Multer, Cloudinary, dotenv ve express-rate-limit.
