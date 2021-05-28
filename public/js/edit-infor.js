console.log("Edit")

// Lấy id của riêng mỗi người dùng-truyển về từ url, lấy xuống ở trạng thái parram
function getEditId() {
    let urlQueryParameters = window.location.search;
    console.log("urlQueryParameters: ", urlQueryParameters) // ?id=1

    let urlParams = new URLSearchParams(urlQueryParameters); // 1 
    console.log("URLSearchParams: ", URLSearchParams )
    console.log("id Params: ", urlParams.get("id"))

    return urlParams.get("id");
}

// CHẠY Hàm đã trả về 1 số là id đã xác định rồi-lưu vào biến
let editId = getEditId(); // id
// Ready function - Đảm bảo đến hàm bên trong sẽ luôn được chạy theo thứ tự trên-dưới
$(function () {
    // Luôn chạy hàm lấy thông tin user với id truyền vào ĐẦU TIÊN 
    getUserInfoApi(editId); // id
});
// Lấy thông tin user cần edit, userEdit = id
function getUserInfoApi(id) {
    $.ajax({
        method: "GET",
        url: "/users/" + id,
    }).done(function (userEdit) {
        renderUserInfo(userEdit);
    });
}

// getUserInfoApi()
// Hàm gán lại thông tin user vào giá trị val() của ô input
function renderUserInfo(user) {
    $("#first-name").val(user.firstName);
    $("#last-name").val(user.lastName);
    $("#birthday").val(user.birthday);
    $("#email").val(user.email);
    $("#phone").val(user.phone);
}


// Nút lưu cũng cập nhập lại - ghi đè thông tin user
// Khi nhấn nút mới gán giá trị HIỆN TẠI ở mỗi ô input vào mỗi trường tương úng
// Sau là chạy hàm để với phương thức PUT đề update (user = updatedUser)
// Nút save mang thông tin gắn với mỗi trường truyền lại cho hàm update
$(".btn-edit-data-save").click(function () {

    let updatedUser = {
        // Cần truyền kèm ID để căn đúng người nào với người nào
        id: editId,
        firstName: $("#first-name").val(),
        lastName: $("#last-name").val(),
        birthday: $("#birthday").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
    };
    updateUserApi(updatedUser);
});


// Sau khi đã thay đổi thông tin user ở giá trị các ô input
// Cập nhật lại thông tin mới cho user
function updateUserApi(user) {
    $.ajax({
        method: "PUT",
        url: "/users/" + user.id,
        // Ở đường dẫn GET all data xác định = id đó, dữ liệu sẽ được đổ lại từ nút Edit đưa về
        data: user,
    }).done(function () {
        // xong thì chuyển về trang chủ GET
        window.location.href = "/";
    });
}





// lấy id parameter
// let url_str = window.location.href;
// console.log('url_str', url_str)
// // Tạo mới đường dẫn và ghép vào chuỗi kí tự đường dẫn vào khuôn url mẫu mặc định
// let url = new URL(url_str);
// console.log('url - new URL: ', url)
// // ?id
// console.log('url.search: ', url.search)
// // Cắt chuỗi lấy số id, cắt vị trí index 1 kết thúc 2 - ko lấy index kết thúc
// let id = url.search.slice(4, 5)
// console.log('id từ url =', id);

// let users;
// // let responseText;
// function loadDoc() {
//     var xhttp = new XMLHttpRequest();

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Chọc và responseText của chức Năng onreadystatechange Trong phương thức XMLHttpRequest
//             // Chuyển kiểu dữ liệu về dạng Mảng? và lấy giữ liệu ra
//             users = JSON.parse(this.responseText);
//             console.log('Mảng dư liệu người dùng từ api trả về', users)

//             let user
//             for (let i = 0; i < users.length; i++) {
//                 user = users[i];
//                 console.log("user", user)
//                 // let user = users[i]; console.log('user', user)
//                 // console.log( user[1][id] )
//             }

//             console.log("user", user)
//             console.log("user.lastName: ", user.lastName)
//             console.log("firstName: ", user.firstName)
//             console.log("birthday: ", user.birthday)
//             console.log("email: ", user.email)
//             console.log("phone: ", user.phone)

//             $('#last-name').val(user.lastName)
//             $('#first-name').val(user.firstName)
//             $('#birthday').val(user.birthday)
//             $('#email').val(user.email)
//             $('#phone').val(user.phone)

//         } else if (this.readyState == 4 && this.status == 404) {
//             console.log("Không tìm thấy user");
//         }
//     };

//     // console.log('id từ url =', id);
//     // let id_index = id
//     xhttp.open("GET", "http://localhost:3000/users", true);
//     // xhttp.open("GET", "/users", true);
//     xhttp.send();
// }
// loadDoc()

// // console.log(users[i].id)

// // function editData(id) {
// //     console.log("Sửa", id)
// // }

// // Bắt trước trang add
// $(".btn-edit-data-save").click(function () {

//     // Lấy dữ liệu từ ô input
//     let newEditUser = {

//         firstName: $("#first-name").val(),
//         lastName: $("#last-name").val(),
//         birthday: $("#birthday").val(),
//         email: $("#email").val(),
//         phone: $("#phone").val(),
//     };
//     console.log('newEditUser', newEditUser)
//     editUserApi(newEditUser);

// });

// function editUserApi(user) {
//     $.ajax({
//         method: "POST",
//         url: "http://localhost:3000/users",
//         //   Gán thêm data mới vào nguồn data của API
//         data: user,
//     }).done(function () {
//         // sau hàm done-xong là toàn trang dẫn về đường / mặc định là trang chủ luôn
//         window.location.href = "/";
//     });
// }



// // Lấy user id
// function getEditId() {
//     let urlQueryPart = window.location.search;
//     let urlParams = new URLSearchParams(urlQueryPart);
//     return urlParams.get("id");
// }

// let editId = getEditId();

// // Ready function
// $(function () {
//     getUserInfoApi(editId);
// });

// // Lấy thông tin user cần edit
// function getUserInfoApi(id) {
//     $.ajax({
//         method: "GET",
//         url: "/users/" + id,
//     }).done(function (userEdit) {
//         renderUserInfo(userEdit);
//     });
// }

// function renderUserInfo(user) {
//     $("#first-name").val(user.firstName);
//     $("#last-name").val(user.lastName);
//     $("#birthday").val(user.birthday);
//     $("#email").val(user.email);
//     $("#phone").val(user.phone);
// }

// // Cập nhật thông tin mới cho user

// function updateUserApi(user) {
//     $.ajax({
//         method: "PUT",
//         url: "/users/" + user.id,
//         data: user,
//     }).done(function () {
//         window.location.href = "/";
//     });
// }

// // Button save - update user
// $(".btn-edit-data-save").click(function () {
//     // removeErrorStyle();
//     // validateInput();

//     // if (isValidInput) {
//         let updatedUser = {
//             id: editId,
//             firstName: $("#first-name").val(),
//             lastName: $("#last-name").val(),
//             birthday: $("#birthday").val(),
//             email: $("#email").val(),
//             phone: $("#phone").val(),
//         };

//         updateUserApi(updatedUser);
//     // }
// });

// // console.log("user", user)


// // console.log("user.lastName: ", user.lastName)
// // console.log("firstName: ", user.firstName)
// // console.log("birthday: ", user.birthday)
// // console.log("email: ", user.email)
// // console.log("phone: ", user.phone)

// // $('#last-name').val(user.lastName)
// // $('#first-name').val(user.firstName)
// // $('#birthday').val(user.birthday)
// // $('#email').val(user.email)
// // $('#phone').val(user.phone)


// $(".btn-edit-data-save").click(function () {

//     // Lấy dữ liệu từ ô input
//     let newUser = {

//         firstName: $("#first-name").val(),
//         lastName: $("#last-name").val(),
//         birthday: $("#birthday").val(),
//         email: $("#email").val(),
//         phone: $("#phone").val(),
//     };
//     console.log('newUser', newUser)
//     editUserApi(newUser);

// });

// function editUserApi(user) {
//     $.ajax({
//         method: "POST",
//         url: "http://localhost:3000/users",
//         //   Gán thêm data mới vào nguồn data của API
//         data: user,
//     }).done(function () {
//         // sau hàm done-xong là toàn trang dẫn về đường / mặc định là trang chủ luôn
//         window.location.href = "/";
//     });
// }