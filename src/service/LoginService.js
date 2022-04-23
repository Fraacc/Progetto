import http from './RestService'

export const getAll = () => {
    return http.get("coffeeCapsule/getAll")
}

export const login = data => {
    return http.post("login/doLogin", {
        username: data.username,
        password: data.password
    })

}