console.log("File API GET data")

// let responseText;
function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Chọc và responseText của chức Năng onreadystatechange Trong phương thức XMLHttpRequest
            // Chuyển kiểu dữ liệu về dạng Mảng? và lấy giữ liệu ra
            const users = JSON.parse(this.responseText);
            console.log(users)

            console.log("id sinh viên", users.id)


            let content = "";

            for (let i = 0; i < users.length; i++) {
                const user = users[i];

              

                content += `
                <tr>
                    <th>${users[i].firstName} ${users[i].lastName} ${users[i].id}</th>
                    <td>${users[i].birthday}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].phone}</td>

                    <td class="text-center td-edit-btn">
                       
                        <a  href="./html/edit-form.html/${users[i].id}" style="color: #01A4B6;" class="btn-open-edit-modal   text-decoration-none px-1">
                            <i class="fas fa-edit"></i>
                            <span>Chỉnh sửa</span>
                        </a>

                        <a  onclick="delData('${users[i].id}')"  href="#" class="btn-remove link-danger text-decoration-none px-1" data-bs-toggle="modal"
                            data-bs-target="#removeModal">
                            <i class="fas fa-trash-alt"></i>
                            <span>Xóa</span>
                        </a>
                    </td>
                    
                </tr>
            `;
            }
            // Tìm đến id của thẻ có id đó, và thay đội dung html của thẻ bên trong thẻ bọc đó
            document.getElementById("table-users").innerHTML = content;

        } else if (this.readyState == 4 && this.status == 404) {
            console.log("Không tìm thấy user");
        }
    };
    xhttp.open("GET", "http://localhost:3000/users", true);
    // xhttp.open("GET", "/users", true);
    xhttp.send();
}
// Luôn này hàm để gọi-GET dữ liệu hiển thị lên bảng
loadDoc()

// Edit
function editData(id) {
    console.log("Sửa", id)
    
}

// Chức năng xóa 
// $('.btn-remove').click(delData)  
function delData(id) {
    console.log("Xóa")

    let formData = {
        method: "Delete",
        Headers: {
            "Content-Type": "application/json",
        },
    };

    fetch("http://localhost:3000/users/" + id, formData)
        .then(function () {
            loadDoc();
        });
}


// Mở Form Modal Edit
$('.btn-open-edit-modal').click(openModalRegistration)

function openModalRegistration() {
    console.log('Mở form chỉnh sửa thông tin hs')

    $(".modal-edit").slideDown(100);
    $('.modal-edit').css("display", "block")
    $('.fade').css("opacity", "1")

}

$('.btn-close-modal').click(closeModalRegistration)

function closeModalRegistration() {
    console.log('close')
    $(".modal").slideUp(100);
    $('.modal').css("display", "none")
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