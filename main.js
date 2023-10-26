function cekKolomKosong() {
    var kolomInput = document.getElementById('email'); 
  
    if (kolomInput.value.trim() === '') {
      // Kolom kosong
      alert('Kolom harus diisi');
      return false; 
    }
  
    // Kolom sudah diisi
    return true; 
  }