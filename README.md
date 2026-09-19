# Av. Melike Çankırı — Hukuk & Arabuluculuk

Astro ile tamamen statik, Türkçe, çok sayfalı site. Sunucu veya gizli API anahtarı gerekmez.

## Çalıştırma
Node.js 22 kullanın.
```sh
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages yayını
1. Paketteki proje dosyalarını (gizli `.github` klasörü dahil) GitHub deponuzun `main` dalına yükleyin. `node_modules` yüklemeyin.
2. Depoda Settings → Pages → Source alanında **GitHub Actions** seçin.
3. `main` dalına yapılan gönderim `deploy.yml` iş akışını çalıştırır. Actions tamamlanınca Pages adresini açın.
4. Workflow gerçek alan adını ve depo alt yolunu otomatik alır. Bağımsız dizin/index.html çıktıları sayesinde sayfa yenileme için SPA yönlendirmesi gerekmez.
5. Özel alan adı kullanılırsa Settings → Pages içinden tanımlayıp workflow'u tekrar çalıştırın.

Elle build için SITE_URL gerçek origin (ör. https://kullanici.github.io), BASE_PATH depo yolu (/depo-adi) olmalıdır. Ortam değişkenleri yoksa canonical üretilmez ve sitemap boş kalır; bilinmeyen alan adı uydurulmaz. Yayın workflow'u bunları otomatik ayarlar.

## Düzenleme
- İsim, telefon, adres, saatler ve boş özgeçmiş alanları: `src/data/site.ts`.
- Faaliyet alanları: `src/data/services.ts`. Teyit edilenler için `confirmed: true` kullanın; başlangıçta tümü kapalıdır.
- Portre eklemek için `src/pages/index.astro` içindeki hero görselinin yolunu ve alt metnini değiştirin. Mevcut görsel temsili ofis kompozisyonudur; gerçek büro fotoğrafı değildir.
- Yeni makale: `content/articles/_taslak.md` dosyasını kopyalayın, benzersiz slug, başlık, tarih, açıklama ve içeriği girin. Kaynakları kontrol edip avukat onayı aldıktan sonra `published: true` yapın. Build sırasında kart ve bağımsız sayfa otomatik oluşur.
- Ana sayfada son üç yayın gösterilir. Onaylı yayın olmadığı için ilk sürümde gerçek boş durum görünür; örnek yayın üretilmez.
- Kimlik bilgileri için `TODO: MELIKE_CONFIRM` işaretlerini takip edin.

## İletişim ve gizlilik
`CONTACT_FORM_ENDPOINT` boşken form gösterilmez. Etkinleştirmeden önce endpoint sağlayıcısı, veri aktarımı, saklama, aydınlatma metni ve gereken onaylar gerçek süreçle eşleştirilmeli; `gizlilik.astro` metni güncellenmelidir. Endpoint yalnızca herkese açık form adresi olmalıdır; secret yazmayın. Form native POST kullanır; başarı/hata sayfasını endpoint sunmalıdır. WhatsApp varsayılan olarak kapalıdır; Avukatın onayından sonra `whatsappEnabled: true` yapılırsa iletişim sayfasında WhatsApp bağlantısı görünür.

Bu teslimde resmî KVKK aydınlatması uydurulmadı; site işleyişi açıklanır. Yayınlanmadan önce gerçek veri işleme süreçleri ve meslek kuralları açısından avukat tarafından incelenmelidir.

## Teknik yapı
- Responsive CSS, semantik HTML, klavye odakları, mobil iletişim çubuğu.
- Sayfalara özel title/description, canonical, sitemap ve robots.
- Yerel WebP görsel; harici font, analitik, çerez veya gömülü harita yok.
- Font: sistem sans-serif + Georgia; ek font isteği yok.
- Lighthouse 95+ bir tasarım hedefidir; ölçülmüş sonuç iddiası değildir.
- `dist/`: build edilmiş statik dosyalar. Local önizleme için `npm run preview` kullanın.
