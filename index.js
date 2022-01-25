let currentdate = new Date();
let datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
let form1 = document.forms['contact-form-1']
let form2 = document.forms['contact-form-2']
form1.addEventListener('submit', e => {
    if (form1['data[name]'].value.trim().length == 0
        || form1['data[email]'].value.trim().length == 0
        || form1['data[phone]'].value.trim().length == 0) {
        setTimeout(function () {
            window.location = "http;://hoclaptrinh.codegym.vn/";
        }, 1000)
        alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
        form1['data[time]'].value = datetime;
        e.preventDefault()
        fetch(form1.action, {
            method: "POST",
            body: new FormData(form1)
        })
            .then(response => {
                form1.reset();
                alert("Đã gửi đăng ký thành công!")
                console.log('Success!', response);
            })
            .catch(error => console.error('Error!', error.message))
    }

})

form2.addEventListener('submit', e => {
    form2['data[time]'].value = datetime;
    e.preventDefault()
    fetch(form2.action, {
        method: "POST",
        body: new FormData(form2)
    })
        .then(response => {
            form2.reset();
            alert("Đã gửi đăng ký thành công!")
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})
