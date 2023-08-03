window.onload = function() {

    const form = document.querySelector('form');
    const nickInput = document.getElementById('Nickname');
    const emailInput = document.getElementById('Email');
    const phonInput = document.getElementById('Phon');
    const submitButton = document.querySelector('button');

    let nickPattern = /^[a-zа-яіІїЇєЄґҐ]{2,}$/i;
    let emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,}$/i;
    let phonPattern = /^\+380\d{9}$/;

    function validateForm() {
        const isValidNick = nickPattern.test(nickInput.value);
        const isValidEmail = emailPattern.test(emailInput.value);
        const isValidPhon = phonPattern.test(phonInput.value);

        phonInput.classList.toggle('error', !isValidPhon);
        if (phonInput.value.length === 0) {
            phonInput.classList.remove('error');
        }

        if (isValidNick && isValidEmail && isValidPhon) {
            submitButton.classList.remove('disabled');
        } else {
            submitButton.classList.add('disabled');
        }
    }

    nickInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    phonInput.addEventListener('input', validateForm);

    function clearError() {
        phonInput.classList.remove('error');
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
        if (!submitButton.classList.contains('disabled')) {
    // створюємо змінні для збереженя їх в localStorage в форматі JSON:
            const formData = {
                nickname: nickInput.value,
                email: emailInput.value,
                phon: phonInput.value
            };   
            saveLocalStorage(formData);
            alert('Форма успішно відправлена!');
            form.reset();
            clearError();
        }
    });

    window.addEventListener('beforeunload', function() {
        form.reset();
    });

// Функція для збереження даних в LocalStorage:
    function saveLocalStorage(data) {
        let dataArray = JSON.parse(localStorage.getItem('formData')) || [];
        dataArray.push(data);
        localStorage.setItem('formData', JSON.stringify(dataArray));
}

// Додаємо виклик даних в лог:
    const callButton = document.querySelector('.call');
    callButton.onclick = function() {
        let dataArray = JSON.parse(localStorage.getItem('formData')) || [];
        for (let data of dataArray) {
            console.log(data);
        }    
    }
}
