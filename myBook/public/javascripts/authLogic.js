import axios from "axios";
import { getAuth, GithubAuthProvider, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js"


class AuthLogic{
  constructor()
  {
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
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



}

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

export const loginGoogle = (params) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential);//[object, Object]
    // Signed in 
    const user = userCredential.user;
    //JSON.stringify(user)
    console.log(`user ===> ${JSON.stringify(user)}`);//[object, Object]  - JSON.parse():JSON-Array
    console.log(`uid ====> ${user.uid}`);
    console.log(`email ====> ${user.email}`);
    localStorage.setItem("uid",`${user.uid}`)
    localStorage.setItem("email",`${user.email}`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
