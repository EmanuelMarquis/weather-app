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
        async function redirectOnSuccess() {
            if(!(await getRedirectResult(auth))) return;
                
            navigate("/");
            dispatch(logIn());
        }
        redirectOnSuccess();
    });

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope("email");
        provider.addScope("profile");

        await signInWithRedirect(auth, provider);
    }

    return (
        <div>
            <button className="bg-yellow-400 text-stone-900" onClick={signInWithGoogle}>Login</button>
        </div> 
    ); 
}