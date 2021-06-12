// Phân trang
$.ajax('http://localhost:3000/users?_page=1&_limit=2', {
    method: "GET"
}).done(function (data, textStatus, request) {

    console.log(data, textStatus, request.getResponseHeader('x-Total-Count'))
    console.log('tong so trang', Math.ceil(request.getResponseHeader('x-Total-Count') / 3))

    let tongSoTrang = Math.ceil(request.getResponseHeader('x-Total-Count') / 3);
    console.log('tongSoTrang làm tròn', tongSoTrang)

    let pagination = ""
    for (let i = 0; i < tongSoTrang; i++) {


        console.log('tongSoTrang', i)
        pagination +=
            `
                <li class="page-item"><a class="page-link" onclick="getUsersByPageApi(${i+1})" >${i+1}</a></li>
                `
    }

    $('.pagination').html(pagination)
})


function getUsersByPageApi(numberPage) {
    $.ajax(`http://localhost:3000/users?_page=${numberPage}&_limit=2`, {
        method: "GET"
    }).done(function (dataNumberPage) {
        console.log('dataNumberPage', dataNumberPage)




        
        let content = "";

        for (let i = 0; i < dataNumberPage.length; i++) {
            

            content += `
            <tr>
                <th>${dataNumberPage[i].lastName}</th>
                <th>${dataNumberPage[i].firstName}</th>

                <td>${dataNumberPage[i].birthday}</td>
                <td>${dataNumberPage[i].email}</td>
                <td>${dataNumberPage[i].phone}</td>

                <td class="text-center td-edit-btn">
                   
                    <a  href="./html/edit-form.html?id=${dataNumberPage[i].id}" style="color: #01A4B6;" class="btn-open-edit-modal   text-decoration-none px-1">
                        <i class="fas fa-edit"></i>
                        <span>Chỉnh sửa</span>
                    </a>

                    <a  onclick="removeUser('${dataNumberPage[i].id}', this)" 
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
            ;
        }

    
        $("#table-users").html(content);
       
    })
}