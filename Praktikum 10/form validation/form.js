function login() {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let jam = document.getElementById("jam").value;
    let tujuan = document.getElementById("tujuan").value;
    let jumlah = document.getElementById("jumlah").value;


    if (nama == "zaidan" && email == "muhammadzaidanramdhan509@gmail.com" && jam == "20:00") {
        location.replace("sukses.html")
        alert("Login berhasil");
    } else {
        alert("Login Gagal");
    }

}