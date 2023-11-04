// 아이디  : userName

// 비밀번호 : userPassword

// 아이디 저장 : id="remember-check"

// 로그인 폼 : login-form"

const loginForm = document.getElementById('login-form')
const userNameInput = document.getElementById('userName')
const passwordInput = document.getElementById('userPassword');
/*
getElementById를 쓰면 안에 #를 쓰지 않아도 된다.
*/

loginForm.addEventListener('submit', (e)=> {
    e.preventDefault(); //  키 입력이 입력 칸을 채우는 것을 방지한다.

    const username = userNameInput.value;
    const password = passwordInput.value;

    if(username == 'admin' && password == 'password')
    {
        alert('로그인 성공!')
    }
    else{
        alert('아이디 또는 비밀번호가 일치하지 않습니다.')
    }

}) /// end of loginForm addEventListener





