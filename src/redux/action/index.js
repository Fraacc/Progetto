import http from 'service/RestService';

export const loginAction = (data) => {
    localStorage.setItem("user", data)
    return {
        type: 'LOGIN',
        //jwt: token
        username: data.username
    }
}

export const logoutAction = () => {
    localStorage.clear()
    http.post("login/Logout")
    return {
        type: 'LOGOUT'
    }
}

export const sommaCounter = (value) => {
    return {
        type: 'SOMMA',
        value: value
    }
}