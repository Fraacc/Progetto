import http from "./RestService";

var User = localStorage.getItem("user")

export const getAll = () => {
    return http.get("coffeeMachine/getAll")
}

export const upload = (caps) => {
    return http.post("coffeeMachine/upload", {
            id: caps.id,
            price: caps.price,
            name: caps.name
        }
    )}

export const create = (caps) => {
    return http.post("coffeeMachine/create", {
            id: caps.id,
            price: caps.price,
            name: caps.name
        }
    )}
export const Delete = (id) => {
    return http.delete("coffeeMachine/delete?id=" + id)
}