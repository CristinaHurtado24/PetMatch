import { TabRouter } from "@react-navigation/native";
import Api from "./Api";

export const user_login = async data => {
    try {
        const result = await Api("/users/login", {
            method: "POST",
            headers :{
                'content-type':'aplication/json'
            },
            data:data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}

//router.post('/sign-in', validateUserSignIn, userValidation, userSignIn);