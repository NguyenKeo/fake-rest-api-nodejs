console.log("File API GET data")

// Render thông tin tất cả users ra bảng
function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.   status == 200) {
            // Chọc và responseText của chức Năng onreadystatechange Trong phương thức XMLHttpRequest
            // Chuyển kiểu dữ liệu về dạng Mảng? và lấy giữ liệu ra
            const users = JSON.parse(this.responseText);
            console.log('All users: ', users)
            console.log("id sinh viên-users.id ", users.id)
            let content = "";

            for (let i = 0; i < users.length; i++) {
                const user = users[i];

                content += `
                <tr>
                    <th>${users[i].lastName}</th>
                    <th>${user.firstName}</th>

                    <td>${users[i].birthday}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].phone}</td>

                    <td class="text-center td-edit-btn">
                       
                        <a  href="./html/edit-form.html?id=${user.id}" style="color: #01A4B6;" class="btn-open-edit-modal   text-decoration-none px-1">
                            <i class="fas fa-edit"></i>
                            <span>Chỉnh sửa</span>
                        </a>

                        <a  onclick="removeUser('${users[i].id}')" 
                            href="#" class="btn-remove link-danger text-decoration-none px-1" data-bs-toggle="modal"
                            data-bs-target="#removeModal">
                            <i class="fas fa-trash-alt"></i>
                            <span>Xóa</span>
                        </a>
                    </td>
                
                         </tr>
                        </a>
                    </td>
                </tr>
                `;
            }
            // Tìm đến id của thẻ có id đó, và thay đội dung html của thẻ bên trong thẻ bọc đó
            // document.getElementById("table-users").innerHTML = content;
            $("#table-users").html(content);

        } else if (this.readyState == 4 && this.status == 404) {
            // Thông báo
            $('#not-found-user-404').text('Không tìm thấy user - 404').css("font-size", "50px")
            console.log("Không tìm thấy user");
        }
    };
    // Lấy danh sách data từ file json công khai ra, để động /users mới được
    // xhttp.open("GET", "http://localhost:3000/users", true);
    xhttp.open("GET", "/users", true);
    xhttp.send();
}
// Luôn này hàm để gọi-GET dữ liệu hiển thị lên bảng
loadDoc()

// Mở Modal 
// Nút xóa được vòng lặp render có onclick chạy hàm ở Modal
// let id_del_user;
// console.log('id_del_user: ', id_del_user)
let id_cong_khai;


function openModalRegistration(id) {
    console.log('Mở Modal - Xóa')
    console.log('id: ', id)
    id_cong_khai = id;

    $(".modal-del").slideDown(100);
    $('.modal-del').css("display", "block")
    $('.fade').css("opacity", "1")

    // $('.btn-confirm-del').

}
console.log('id công khai: ', id_cong_khai)

// Nút xác nhận như lưu / chấp nhận - xóa


// Chức năng xóa 
// $('.btn-remove').click(removeUser)  
// Đã gán onclick rồi không gần gọi thẻ gán click nữa

function removeUser(id) {
    console.log("Xóa")
    console.log("id", id)
    // Chạy hàm mở bảng form modal
    alert("Bạn có chắc chắn muốn xóa học viên này?")

    let formData = {
        method: "Delete",
        Headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("http://localhost:3000/users/" + id, formData).then(function () {
        loadDoc();
    });

    // $.ajax({
    //     method: "DELETE",
    //     url: "/users" + id,

    // })
    // .done(function () {
    //     window.location.href = "/";
    // });
}

// Đóng Modal - nút Hủy bỏ
$('.btn-cancel-del-modal').click(closeModalRegistration)

function closeModalRegistration() {
    console.log('Đóng Modal')

    $(".modal-del").slideUp(100);
    $('.modal-del').css("display", "none")
    $('input').html('')
}






// for (let i = 0; i < responseText.length; i++) {
//     $(".list-datas-detail:first").clone().appendTo(".table-list-datas");
//     document.getElementsByClassName('name')[i].innerHTML = responseText[i].name
//     document.getElementsByClassName('email')[i].innerHTML = responseText[i].email
//     document.getElementsByClassName('password')[i].innerHTML = responseText[i].password
//     document.getElementsByClassName('phone')[i].innerHTML = responseText[i].phone
// }
//   if ( i < responseText.length - 1) {

//     $(".list-datas-detail:first").clone().appendTo(".table-list-datas"); 
//   }