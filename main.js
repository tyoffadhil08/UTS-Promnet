/// JavaScript untuk menambahkan interaktivitas
document.getElementById("home").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<h1>Halaman Home</h1><p>Ini adalah halaman Home.</p>";
});

document.getElementById("about").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<h1>Tentang Saya</h1><p>Ini adalah halaman Tentang Saya.</p>";
});

document.getElementById("work").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<h1>Portofolio</h1><p>Ini adalah halaman Portofolio.</p>";
});

document.getElementById("contact").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<h1>Hubungi Saya</h1><p>Silakan hubungi saya melalui email atau telepon.</p>";
});
