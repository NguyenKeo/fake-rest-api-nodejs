console.log("Thêm thông tin học sinh")


// Khi ấn nút add sẽ đưa data từ ô input lưu vào biến sau đưa và nguồn data trước đó
// mỗi trường là mỗi key phải trung 100% so với data của api add vào để hiển thị
$(".btn-add-data-save").click(function () {
    validateInput()

    if (isValidInput) {
        let newUser = {

            firstName: $("#first-name").val(),
            lastName: $("#last-name").val(),
            birthday: $("#birthday").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
        };

        addUserApi(newUser);
    }
});

function addUserApi(user) {
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/users",
        //   Gán thêm data mới vào nguồn data của API
        data: user,
    }).done(function () {
        // sau hàm done-xong là toàn trang dẫn về đường / mặc định là trang chủ luôn
        window.location.href = "/";
    });
}