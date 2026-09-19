export const site = {
 name: 'Av. Melike Çankırı', subtitle: 'Hukuk & Arabuluculuk', phone: '0539 830 75 04', phoneLink: '+905398307504', email: 'av.melikecankiri@gmail.com',
 address: 'Barbaros Mahallesi, Prof. Dr. Ümit Serdaroğlu Caddesi, Mavi Evler Sitesi C Blok No:68/3 D:7, Merkez / Çanakkale', hours: 'Pazartesi–Cuma 08:30–18:00', bar: 'Çanakkale Barosu', registration: '773',
 CONTACT_FORM_ENDPOINT: '', whatsappEnabled: false,
 // TODO: MELIKE_CONFIRM — doğrulanınca doldurun; boş alanlar görüntülenmez.
 university: '', graduationYear: '', careerStart: '', tbbRegistration: '', mediationRegistration: '', languages: [], portrait: '', socialLinks: [], mediationAreas: [],
};
export const mapUrl = 'https://maps.app.goo.gl/8MqFbRb2xWvEaECm7';
export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const nav = [['', 'Ana Sayfa'], ['hakkinda/', 'Hakkında'], ['faaliyet-alanlari/', 'Faaliyet Alanları'], ['arabuluculuk/', 'Arabuluculuk'], ['yayinlar/', 'Yayınlar']];
