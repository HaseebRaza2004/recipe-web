import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/utils";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../componenets/loader";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {},
    });
    const [loading, setLoading] = useState(true);

    function onAuthChange(user) {
        if (user) {
            // console.log("user", user);
            setUser({
                isLogin: true,
                userInfo: {
                    name: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                },
            });
        } else {
            setUser({ isLogin: false, userInfo: {} });
        }
        setLoading(false);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, onAuthChange);
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {loading ? <Loader /> : children}
        </AuthContext.Provider>
    )
};