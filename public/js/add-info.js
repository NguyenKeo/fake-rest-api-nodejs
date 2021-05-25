console.log("Thêm thông tin học sinh")


// Khi ấn nút add sẽ đưa data từ ô input lưu vào biến sau đưa và nguồn data trước đó
// mỗi trường là mỗi key phải trung 100% so với data của api add vào để hiển thị
$(".btn-add-data-save").click(function () {

    let newUser = {
        name: $("#name").val(),
        birthday: $("#birthday").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
    };

    addUserApi(newUser);
    backIndex()
});

function addUserApi(user) {
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/users",
        //   Gán thêm data mới vào nguồn data của API
        data: user,
    }).done(function () {
        window.location.href = "localhost:3000";
    });
}

// $(".back").click(function () {
//     console.log("back")
//     window.location.replace("localhost:3000");
// });

function backIndex() {
    window.location.replace("localhost:3000");
}
    