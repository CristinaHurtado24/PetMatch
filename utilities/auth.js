import user from '../src/api/user_api';

const catchError = error => {
    if (error?.response?.data){
        return error.response.data;
    }

    return {success: false, error: error.message}

};

export const signup = async values => {
    try {
        const {data} = await user.post('/users/create', {...values});
        return data;
    } catch (error) {
        return catchError(error);
    }
};

export const signin = async values => {
    try {
        const {data} = await user.post('/user/login', {...values});
        return data;
    } catch (error) {
        return catchError(error);
    }
}