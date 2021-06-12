console.log("File API GET data")

let currentPage = 1;

// Ready function
$(function () {
    getUsersByPageApi(currentPage);
});

function renderAllUsers() {
    $.ajax({
        url: 'http://localhost:3000/users',
        method: 'GET'
    }).done(function (data) {
        console.log('Ajax tả về 1 mảng data:', data)

        let content = "";

        for (let i = 0; i < data.length; i++) {
            const user = data[i];

            content += `
                <tr>
                    <th>${user.lastName}</th>
                    <th>${user.firstName}</th>

                    <td>${user.birthday}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>

                    <td class="text-center td-edit-btn">
                       
                        <a  href="./html/edit-form.html?id=${user.id}" style="color: #01A4B6;" class="btn-open-edit-modal   text-decoration-none px-1">
                            <i class="fas fa-edit"></i>
                            <span>Chỉnh sửa</span>
                        </a>

                        <a  onclick="removeUser('${user.id}', this)" 
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
        $("#table-users").html(content);

    })


}
// renderAllUsers()



// Search Ấn nút lấy giá trị ô input
// let inputSearch = $('.input-search').val();

let inputSearch;
$('.btn-search-data-student').click(search);

function search() {
    inputSearch = $('.input-search').val()
    console.log('inputSearch: ', inputSearch)

    $.ajax(`http://localhost:3000/users?q=${inputSearch}`, {
        method: "GET"
    }).done(function (data) {
        console.log('data', data)

        let contentSearch = "";

        for (let i = 0; i < data.length; i++) {
            console.log('data[i]', data[i])

            let dataSearch = data[i];

            contentSearch +=
                `
            <tr>
            <th>${dataSearch.lastName}</th>
            <th>${dataSearch.firstName}</th>

            <td>${dataSearch.birthday}</td>
            <td>${dataSearch.email}</td>
            <td>${dataSearch.phone}</td>

            <td class="text-center td-edit-btn">
               
                <a  href="./html/edit-form.html?id=${dataSearch.id}" style="color: #01A4B6;" class="btn-open-edit-modal   text-decoration-none px-1">
                    <i class="fas fa-edit"></i>
                    <span>Chỉnh sửa</span>
                </a>

                <a  onclick="removeUser('${dataSearch.id}', this)" 
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

            `
        }




        $("#table-users").html(contentSearch);
    })



}

// Mở Modal 
// Nút xóa được vòng lặp render có onclick chạy hàm ở Modal
// let id_del_user;
// console.log('id_del_user: ', id_del_user)



function openModalRegistration(id) {
    console.log('Mở Modal - Xóa')
    console.log('id: ', id)

    $(".modal-del").slideDown(100);
    $('.modal-del').css("display", "block")
    $('.fade').css("opacity", "1")

    // $('.btn-confirm-del').

}

// Nút xác nhận như lưu / chấp nhận - xóa


// Chức năng xóa 
// $('.btn-remove').click(removeUser)  
// Đã gán onclick rồi không gần gọi thẻ gán click nữa

function removeUser(id, dataDel) {
    console.log("Xóa")
    console.log("id", id)
    // console.log('this', this)
    console.log('dataDel', dataDel)

    // Chạy hàm mở bảng form modal
    alert("Bạn có chắc chắn muốn xóa học viên này?")

    // let formData = {
    //     method: "Delete",
    //     Headers: {
    //         "Content-Type": "application/json",
    //     },
    // };
    // fetch("http://localhost:3000/users/" + id, formData).then(function () {
    //     loadDoc();
    // });

    $.ajax({
            method: "DELETE",
            url: "/users/" + id,

        })
        .done(function () {
            // window.location.href = "/";
            // $('#table-users').children('tr:first-child').remove()
            $(dataDel).parent().parent().remove()
        });
}

// Đóng Modal - nút Hủy bỏ
$('.btn-cancel-del-modal').click(closeModalRegistration)

function closeModalRegistration() {
    console.log('Đóng Modal')

    $(".modal-del").slideUp(100);
    $('.modal-del').css("display", "none")
    $('input').html('')
}