function login() {
    event.preventDefault();

    let uname = document.getElementById("Username").value;
    let pass = document.getElementById("Password").value;

    if (uname == "ahmad2017" && pass == "integrity") {
        location.replace("succes.html")
        alert("Login berhasil");
    } else {
        alert("Login Gagal");
    }

}