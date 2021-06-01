// Validate user input

let isValidInput;

function validateInput() {
    isValidInput = true;

    // First name, Last name
    validateName(
        "#first-name",
        "Tên không được để trống",
        "Vui lòng nhập tên trong khoảng từ 2 đến 20 ký tự"
    );
    validateName(
        "#last-name",
        "Họ không được để trống",
        "Vui lòng nhập họ trong khoảng từ 2 đến 20 ký tự"
    );

    // Email
    validateEmail();

    // Phone
    validatePhone();

    return isValidInput;
}

// Validate name
function validateName(eleId, message1, message2) {
    let nameValue = $(eleId).val().trim();

    if (nameValue === "") {
        setError(eleId, message1);
    } else {
        if (nameValue.length < 2 || nameValue.length > 20) {
            setError(eleId, message2);
        } else {
            setSuccess(eleId);
        }
    }
}

// Validate email
function validateEmail() {
    let emailRegex =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let emailValue = $("#email").val().trim();

    if (emailValue === "") {
        setError("#email", "Email không được để trống");
    } else {
        if (!emailRegex.test(emailValue)) {
            setError("#email", "Email không hợp lệ. VD: abc_123@gmail.com");
        } else {
            setSuccess("#email");
        }
    }
}

// Validate phone
function validatePhone() {
    let phoneRegex = /^\(?([0-9]{3,5})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let phoneValue = $("#phone").val().trim();

    if (phoneValue === "") {
        setError("#phone", "Số điện thoại không được để trống");
    } else {
        if (!phoneRegex.test(phoneValue)) {
            setError(
                "#phone",
                "Số điện thoại không hợp lệ. VD: 123-456-7890 hoặc 0981234567"
            );
        } else {
            setSuccess("#phone");
        }
    }
}

// Set CSS error style
function setError(eleId, message) {
    isValidInput = false;

    $(eleId).addClass("is-invalid");
    $(eleId).next().addClass("invalid-feedback");
    $(eleId).next().text(message).show();
}

// Set CSS success style
function setSuccess(eleId) {
    $(eleId).addClass("is-valid");
}

// Input change => change CSS style (TH đã validate input ít nhất 1 lần trước đó và đang hiển thị error/success message)
$(".form-control").on("input", function () {
    $(this).removeClass("is-invalid").removeClass("is-valid");
    $(this).next().removeClass("invalid-feedback").hide();
});

function removeErrorStyle() {
    $(".form-control").removeClass("is-invalid").removeClass("is-valid");
    $(".error").removeClass("invalid-feedback").hide();
}