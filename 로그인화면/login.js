// 아이디  : userName

// 비밀번호 : userPassword

// 아이디 저장 : id="remember-check"

// 로그인 폼 : login-form"

const loginForm = document.getElementById('login-form')
const userNameInput = document.getElementById('userName')
const passwordInput = document.getElementById('userPassword');
const loginButton = loginForm.querySelector('#login-botton');


// 초기에 로그인 버튼 비활성화
// loginButton.disabled = true;
// loginButton.style.backgroundColor = "#0095f6";
// loginButton.style.cursor = "not-allowed"
/*
getElementById를 쓰면 안에 #를 쓰지 않아도 된다.
*/

loginForm.addEventListener('submit', ()=> {
    //e.preventDefault(); // 기본 제출 동작 방지
    let id = userNameInput.value;
    let pw = passwordInput.value;

    if((id&&pw) && (id.includes('@') && pw.length >= 5) )
    {
        loginButton.disabled = false;
        //loginButton.style.backgroundColor = "#0095f6"
        loginButton.style.opacity = 1;
        loginButton.style.cursor = "pointer"
    }

    else
    {
        alert("아이디와 비밀번호를 확인하세요")
        loginButton.disabled = true;
        //loginButton.style.backgroundColor = "#DBDBDB"
        //loginButton.style.cursor = "not-allowed"
        loginBtn.style.opacity = 5;
    }


}) /// end of loginForm addEventListener



const init = () =>{
    userNameInput.addEventListener('input', loginForm)
    passwordInput.addEventListener('input', loginForm)
    userNameInput.addEventListener('keyup', loginForm)
    passwordInput.addEventListener('keyup', loginForm)
}

init();