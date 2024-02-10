import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
//obtener el form con ese id
const signupForm = document.getElementById('signup-form');

//agregamos el evento al mandar el form
signupForm.addEventListener('submit', async (e)=> {  //se le agrega (e) de evento para que la pagina no se recarge
   //para evitar que la pagina se recarge
   e.preventDefault();

   //acceso a los elementos  con notacion de corchete
   const email = signupForm['email-signup'].value;
   const password = signupForm['password-signup'].value;

   console.log(email,password);

   try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(credentials)
   }
   catch (error) {
    console.log(error);
   }
})

