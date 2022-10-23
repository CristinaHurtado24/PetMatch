import Api from '../src/api/Api';

const catchError = error => {
    if (error?.response?.data){
        return error.response.data;
    }

    return {success: false, error: error.message}

};

export const signup = async (values) => {
    try {
        const {data} = await Api.post('/user/create', {...values});
        return data;
    } catch (error) {
        return catchError(error);
    }
};

export const signin = async (values) => {
    try {
        const { data } = await Api.post("/user/signin", { ...values });
        return data;
    } catch (error) {
        return catchError(error);
    }
}