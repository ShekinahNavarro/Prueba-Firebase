import { signOut} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./show_message.js";

const logut = document.getElementById('logout');

logut.addEventListener('click',async () => {
    await signOut(auth);
    showMessage('logged outh','green')
});