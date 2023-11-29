import { getAuth,
  signInWithPopup ,
  GithubAuthProvider,
   GoogleAuthProvider, 
   FacebookAuthProvider
   } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"


class AuthLogic{
  constructor()
  {
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
  }

  //클래스 안에서 function 사용 x 에로우 펑션 사용
  getUserAuth = () =>{
    return this.auth;
  }

  getGoogleAuthProvider = () => {
    return this.googleProvider;
  }
  
  getGitProvider = () =>{
    return this.googleProvider;
  }

  getfacebookProvider = ()=>{
    return this.facebookProvider;
  }
}
// defalut가 있을 떈 import {} << 괄호를 붙이면 안 된다.
export default AuthLogic

export const loginKakao = (params) => {

  return new Promise((resolve,reject) => {
    try {
      const response = axios({
        method : 'get',
        url : '카카오토큰',
        params : params
      })

      resolve(Response)
    }
    catch(error){
      reject(error)
    }
  })
}

export const logOut = (auth) => {
  return new Promise((resolve,reject) => {
    auth.signOut().catch(e => reject(alert(e+"로그아웃")))
    localStorage.removeItem('uid')
    localStorage.removeItem('displayName')
    localStorage.removeItem('email');
    resolve();
  })
}



// 해당 자리 페이스북 위치

export const loginfacebook = (auth, facebookProvider) => {
  console.log('loginfacebook호출 성공');
  console.log(facebookProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, facebookProvider)
    .then((res) => {
      console.log(res)
      const user = res.user;
      const credential = FacebookAuthProvider.credentialFromResult(res);
      const accessToken = credential.accessToken;
      localStorage.setItem("uid", user.uid);
      localStorage.setItem('email', user.email);
      localStorage.setItem("displayName", user['displayName']);
      resolve(user)
      //window.location.href = "/"
    }).catch((error) => reject(error));
  });
};




// 파라미터의 값이 바뀌었다. 사용자의 정보, 구글 제공함수
export const loginGoogle = (auth, googleProvider) => {
  console.log('loginGoogle호출 성공');
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);//object Object - 안보임 - uid, displayName-realname, email
      console.log(JSON.stringify(result));
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("displayName", user['displayName']);
      localStorage.setItem('email', user.email);
      resolve(user)
    }).catch((error) => reject(error));
  });
};


export const loginEmail = (params) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth,googleProvider)
    .then((result) => {})
    .catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  })
}
  


