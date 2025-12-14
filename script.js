document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi ke elemen-elemen HTML
    const coverPage = document.getElementById('cover-page');
    const makalahContent = document.getElementById('makalah-content');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');

    // Fungsi untuk menampilkan halaman makalah
    function showMakalah() {
        // Sembunyikan Cover
        coverPage.classList.remove('active-page');
        coverPage.classList.add('hidden-page');
        
        // Tampilkan Makalah
        makalahContent.classList.remove('hidden-page');
        makalahContent.classList.add('active-page');
        
        // Gulir ke atas halaman makalah agar dimulai dari awal
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Fungsi untuk kembali ke halaman cover
    function showCover() {
        // Sembunyikan Makalah
        makalahContent.classList.remove('active-page');
        makalahContent.classList.add('hidden-page');

        // Tampilkan Cover
        coverPage.classList.remove('hidden-page');
        coverPage.classList.add('active-page');

        // Gulir ke atas halaman cover
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Pasang Event Listener (pendengar kejadian) pada tombol
    if (nextButton) {
        nextButton.addEventListener('click', showMakalah);
    }

    if (backButton) {
        backButton.addEventListener('click', showCover);
    }
});
