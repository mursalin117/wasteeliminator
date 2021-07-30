import { useState } from 'react';

const useToken = () => {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log(userToken);
        return userToken
    };

    const [token, setToken] = useState(getToken());
    console.log(token);
    const saveToken = userToken => {
        console.log(userToken);
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }


}

export default useToken;