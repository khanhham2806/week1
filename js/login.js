const users = [
  { username: "khanh", password: "123456" },
  { username: "john", password: "1234" },
];


document.getElementById("sign-in")?.addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (password && username) {
    var loginUser = users.find(
      (user) => user.username == username && user.password == password
    );

    if (loginUser) {
      window.location.href = "http://127.0.0.1:5500/";
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
});