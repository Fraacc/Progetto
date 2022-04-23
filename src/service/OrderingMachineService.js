import http from "./RestService";

var User = localStorage.getItem("user")

export const getAll = () => {
    return http.get("orderingMachines/getAll")
}

export const getAllBy = (id) => {
    return http.get("orderingMachines/getAllBy")
}

export const upload = (caps) => {
    return http.post("orderingMachines/upload", {
        id: caps.id,
        id_machine: caps.id_machine,
        user: User
    }
    )}

export const create = (caps) => {
    return http.post("orderingMachines/create", {
            id: caps.id,
            id_machine: caps.id_machine,
            user: User
        }
    )}
export const Delete = (id) => {
    return http.delete("orderingMachines/delete?id=" + id)
}



