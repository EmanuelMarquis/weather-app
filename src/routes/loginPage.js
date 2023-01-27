import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logIn } from "../reducers/authReducers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();

    useEffect(() => { 
        redirectOnSuccess(auth, navigate, dispatch);
    });

    return (<div className="container flex min-h-screen justify-center items-center">
        <LoginButton authInstance={auth}/>
    </div>); 
}

function LoginButton(props) {
    return <button 
        className="bg-yellow-400 hover:bg-yellow-500 outline outline-1 rounded-md px-2 py-1 text-stone-900 " 
        onClick={() => signInWithGoogle(props.authInstance)}
    >Continue with Google</button>
}

async function signInWithGoogle(authInstance) {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    provider.addScope("profile");

    await signInWithRedirect(authInstance, provider);
}

async function redirectOnSuccess(auth, navTo, action) {

    if(!(await getRedirectResult(auth))) return;
        
    navTo("/");
    action(logIn());
}