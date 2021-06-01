console.log('Login quản lý sinh viên')

// $('.check-login').click(checkLogin)
function checkLogin() {
    console.log('So sánh thông tin đăng nhập')

    $.ajax({
        url: 'https://fake-rest-api-nodejs.herokuapp.com/login',
        method: 'POST',

        data: {
            username: $('#username').val(),
            password: $('#password').val()
        }

    }).done(function (user) {
        console.log('Đăng nhâp thành công ', user);
        setTimeout( function() {  window.location.href = '/'; }, 3000)
   
    }).fail(function () {
        console.log('Username or password is incorrect!');
        alert('Tên tài khoản hoặc mật khẩu chưa chính xác!');   
         
    })

};

// Modal login
$('.btn-get-login-registration').click(openModalLogin)

function openModalLogin() {
    console.log('Mở Modal - Login')

    $(".modal-login").slideDown(100);
    $('.modal-login').css("display", "block")
    $('.fade').css("opacity", "1")

}

// Đóng Modal - click ra ngoài
$('.btn-cancel-modal').click(closeModalLogin)

function closeModalLogin() {
    console.log('Đóng Modal')

    $(".modal-login").slideUp(100);
    $('.modal-login').css("display", "none")
    $('input').html('')
}

// Mới vào thì hiển thị nội dung tab Home có id=home
//    $(function () {
//     const homeContent = $("#home").html();
//     $("#tab-content").html(homeContent);
//   });