console.log('Login quản lý sinh viên')


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
   $(function () {
    const homeContent = $("#home").html();
    $("#tab-content").html(homeContent);
  });

