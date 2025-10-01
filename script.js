// Hesapla butonu tıklandığında çalışacak fonksiyon
function hesapla() {
    // 1. Girdiğimiz rakamı al
    const girdi = document.getElementById('girdiRakam').value;
    const sayi = parseFloat(girdi);

    // Geçerli bir sayı girilip girilmediğini kontrol et
    if (isNaN(sayi)) {
        // Tüm sonuç alanlarını hata mesajıyla güncelle
        document.getElementById('anaSonuc').textContent = "Hata: Geçerli bir sayı giriniz.";
        document.getElementById('kapak1Sonuc').textContent = "---";
        document.getElementById('kapak2Sonuc').textContent = "---";
        return; // İşlemi burada sonlandır
    }

    // --- TEMEL HESAPLAMA ---
    // Ana Formül: (sayı - 95) / 4
    const anaSonuc = (sayi - 95) / 4;

    // --- KAPAK HESAPLAMALARI ---
    // Kapak 1: Ana Sonuç - 8
    const kapak1 = anaSonuc - 8;
    
    // Kapak 2: Ana Sonuç + 8
    const kapak2 = anaSonuc + 8;


    // --- SONUÇLARI EKRANDA GÖSTERME ---
    // Sayıları virgülden sonra iki hane ile sınırlandırıyoruz.
    
    // Ana Sonucu Göster
    document.getElementById('anaSonuc').textContent = anaSonuc.toFixed(2); 
    
    // Kapak 1 Sonucunu Göster
    document.getElementById('kapak1Sonuc').textContent = kapak1.toFixed(2);
    
    // Kapak 2 Sonucunu Göster
    document.getElementById('kapak2Sonuc').textContent = kapak2.toFixed(2);
}