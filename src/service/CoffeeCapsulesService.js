import http from "./RestService";

var User = localStorage.getItem("user")

export const getAll = () => {
    return http.get("coffeeCapsules/getAll")
}

export const upload = (caps) => {
    return http.post("coffeeCapsules/upload", {
            id: caps.id,
            price: caps.price,
            machine: caps.machine
        }
    )}

export const create = (caps) => {
    return http.post("coffeeCapsules/create", {
        id: caps.id,
        price: caps.price,
        machine: caps.machine
        }
    )}
export const Delete = (id) => {
    return http.delete("coffeeCapsules/delete?id=" + id)
}