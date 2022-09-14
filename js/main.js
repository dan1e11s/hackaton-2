// создаём массив с пользователями
let users = [
    {
        name: 'John',
        age: 18,
        password: '12345'
    },
    {
        name: 'James',
        age: 24,
        password: '123456'
    }
]


// функция регистрации пользователя
function registerNewUser() {
    let name = prompt('Введите ваше имя');

    // функция проверяющая на уникальность имени
    function checkName() {
        if(users.find((i) => i.name === name)) {
            alert('Пользователь с таким именем уже существует');
            registerNewUser()
        }
    }
    checkName()

    let age = prompt('Введите ваш возраст');

    let password = prompt('Придумайте пароль');
    let password2 = prompt('Повторите пароль');

    // функция проверяющая на совпадение пароля
    function checkPassword() {
        if(password != password2) {
            alert('Пароли не совпадают')
            registerNewUser()
        } else {
            alert('Вы успешно зарегистрировались! Теперь вы должны войти')
        }
    }
    checkPassword()
    let newUser = {
        name: name,
        age: age,
        password: password,
        isLogin: false
    }
    users.push(newUser);
}

registerNewUser()
console.log(users);  

// функция авторизация
function loginUser() {
    let login = confirm('Вы хотите войти сейчас?')
    if (login) {
        if (users.at(-1).isLogin === false) {
            let name = prompt('Введите ваше имя')
            if (name === users.at(-1).name) {
                let password = prompt('Введите ваш пароль');
                if (password === users.at(-1).password) {
                    users.at(-1).isLogin = true;
                    alert('Вы успешно вошли в свой аккаунт')
                } else {
                    alert('Неправильно введен пароль');
                    loginUser()
                }
            } else {
                alert('Неправильно введено имя')
                loginUser()
            }
        } else if (users.at(-1) === true) {
            alert('Вы уже вошли в аккаунт')
        }
    } else {
        alert('Okay');
    }
}
loginUser()


// функция для изменения данных пользователя
function changeInfoUser() {
let change = confirm('Вы хотите изменить что-то в своем аккаунте?');
if (change) {
    if(users.at(-1).isLogin === true) {
        let changeElem = prompt('Что вы хотите изменить?')
        if (changeElem === 'name' || changeElem === 'Name') {
            users.at(-1).name = prompt('Введите новое имя')
            alert('Данные успешно обновлены');
        } else if (changeElem === 'age' || changeElem === 'Age') {
            users.at(-1).age = +prompt('Введите новый возраст')
            alert('Данные успешно обновлены');
        } else if (changeElem === 'password' || changeElem === 'Password') {
            let intermediatePassword = prompt('Подтвердите свой старый пароль') 
            if (intermediatePassword === users.at(-1).password) {
                users.at(-1).password = prompt('Введите новый пароль')
                alert('Данные успешно обновлены');
            } else {
                alert('Пароль введен неправильно')
                changeInfoUser()
            }
        } else {
            alert('Проверьте правильность введенных данных');
            changeInfoUser();
        }
    } else if (users.at(-1).isLogin === false) {
        alert('Вы должы сначала войти');
        loginUser();
        changeInfoUser();
    }
} else {
    alert('Okay')
}
}

changeInfoUser();


// функция выхода пользователя
function exitUser() {
    let exit = confirm('Вы хотите выйти?')
    if (exit) {
        if (users.at(-1).isLogin === true) {
            users.at(-1).isLogin = false;
            alert('Вы успешно вышли')
        } else {
            alert('Вы должны сначала войти')
            loginUser()
            exitUser()
        }
    } else {
        alert('Okay');
    }
}

exitUser();

// функция удаление аккаунта пользователя
function deleteUser() {
    let delet = confirm('Вы хотите удалить свой аккаунт?');
    if (delet) {
        if (users.at(-1).isLogin === true) {
            let password = prompt('Подтвердите тогда пароль');
            if (password === users.at(-1).password) {
                alert('Ваш аккаунт успешо удален')
                users.pop()
            } else {
                alert('Пароль неправильный')
                deleteUser();
            }
        } else {
            alert('Вы должны сначала войти')
            loginUser();
            deleteUser();
        }
    } else {
        'Okay'
    }
}

deleteUser();

// The End