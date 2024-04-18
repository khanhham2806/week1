const users = [
  { username: "khanh", password: "123456" },
  { username: "john", password: "1234" },
];

if(localStorage.getItem('username')){
  window.location.href = "http://127.0.0.1:5500/";
}

document.getElementById("sign-in")?.addEventListener("submit", (e) => {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (password && username) {
    var loginUser = users.find(
      (user) => user.username == username && user.password == password
    );

    if (loginUser) {
      localStorage.setItem("username",username );
      localStorage.setItem("password",password );
      window.location.href = "http://127.0.0.1:5500/";
    } else {
      document.querySelector('.error-submit').innerHTML= "Sai tên đăng nhập hoặc mật khẩu!"
      setTimeout(()=>{
       document.querySelector('.error-submit').innerHTML= ""
      },1500)
    }
  } else {
    document.querySelector('.error-submit').innerHTML= "Vui lòng nhập đầy đủ thông tin!"
    setTimeout(()=>{
     document.querySelector('.error-submit').innerHTML= ""
    },1500)
  }
});
