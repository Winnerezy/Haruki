import { useContext } from "react";
import { TokenContext } from "../Shared/TokenProvider"
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import { useReducer } from "react";

export default function AuthScreen() {
    const [state, action] = useReducer(reducer, false)

    function reducer(){

    }
}