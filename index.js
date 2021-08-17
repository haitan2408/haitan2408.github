const scriptURL = 'https://script.google.com/macros/s/AKfycbyYUjIh0gIdOrdu5EGQLJVqtSUGrBVtGqZnn1MFQloQhkxw9FusMt5wNZ_7SjMOIeZCNg/exec'
const form1 = document.forms['contact-form-1']
const form2 = document.forms['contact-form-2']

form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form1)
        })
        .then(response => {
            form1.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})
form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form2)
        })
        .then(response => {
            form2.reset();
            console.log('Success!', response);
        })
        .catch(error => console.error('Error!', error.message))
})
