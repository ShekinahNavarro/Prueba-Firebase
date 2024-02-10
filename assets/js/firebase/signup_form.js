import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";
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
    
    //ocultar el modal
    const signupModal = document.getElementById('signup-modal');
    const modal =bootstrap.Modal.getInstance(signupModal);
    modal.hide();
   }
   //manejo de errores
   catch (error) {
    console.log(error);

    if (error.code === 'auth/email-already-in-use') {
        showMessage('Email allready in use','red')
    }
    else if (error.code === 'auth/invalid-email'){
        showMessage('invalid email','red')
        
    }
    else if (error.code === 'auth/weak-password'){
        showMessage('weak password','red')
    }
    else {
        showMessage('something went wrong','red')
    }
   }
})

