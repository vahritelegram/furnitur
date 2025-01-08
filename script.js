// Seleksi elemen dengan class .box
const box = document.querySelector('.box');

// Animasi dasar menggunakan GSAP
gsap.to(box, {
    x: 300,                  // Geser sejauh 300px ke kanan
    y: 100,                  // Geser sejauh 100px ke bawah
    duration: 2,             // Durasi animasi 2 detik
    backgroundColor: "#ffcc00", // Ubah warna background
    borderRadius: "50%",     // Ubah menjadi lingkaran
    ease: "bounce",          // Gunakan efek bouncing
    repeat: 1,               // Ulangi animasi sekali
    yoyo: true               // Kembalikan ke posisi semula setelah selesai
});

// Tambahkan animasi lain setelah animasi pertama selesai
gsap.to(box, {
    delay: 3,                // Tunda animasi ini 3 detik
    rotation: 360,           // Putar elemen 360 derajat
    scale: 1.5,              // Perbesar ukuran elemen
    duration: 2,             // Durasi animasi 2 detik
    ease: "elastic"          // Gunakan efek elastis
});
