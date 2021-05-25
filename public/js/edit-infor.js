console.log("Edit")


// var url = 'http://localhost:3000/users';
// console.log(url)

// var id = url.substring(url.lastIndexOf('/') + 1);
// console.log('id sinh viên cần sửa thông tin:', id); 

let id = location.pathname.split('/')[2]
console.log(id)

// let responseText;
function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Chọc và responseText của chức Năng onreadystatechange Trong phương thức XMLHttpRequest
            // Chuyển kiểu dữ liệu về dạng Mảng? và lấy giữ liệu ra
            const users = JSON.parse(this.responseText);
            console.log(users)

                        
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


// console.log(users[i].id)

function editData(id) {
    console.log("Sửa", id)
}

