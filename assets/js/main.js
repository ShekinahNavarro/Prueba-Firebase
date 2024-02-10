import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase/firebase.js";
import './firebase/signup_form.js';
import './firebase/logout.js';
import { loginCheck } from "./firebase/login_check.js";

onAuthStateChanged(auth,async(user) =>
{
    //si he ingresado
    if (user){
       loginCheck(user)
    }
    //Si a salido
    else{
       loginCheck(user)
    }
});