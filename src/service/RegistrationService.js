import http from "./RestService";


export const registration = (regist) => {
    return http.post("user/createUser",{
        id: null,
        username: regist.username,
        password: regist.password,
        residence: regist.residence,
        email: regist.email,
        usertype: 1
    })
}


