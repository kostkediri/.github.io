document.getElementById('contactBtn').addEventListener('click', function() {
    const phoneNumber = '+6281333803128'; // Ganti dengan nomor WhatsApp Anda
    const message = 'Halo, saya tertarik dengan kos-kosan Anda. apakah ada kamar kosong?.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Membuka URL WhatsApp di tab baru
    window.open(url, '_blank');
});