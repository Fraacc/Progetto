import http from "./RestService";

var User = localStorage.getItem("user")

export const getAll = () => {
    return http.get("orderingCapsules/getAll")
}

export const getAllBy = (id) => {
    return http.get("orderingCapsules/getAllBy")
}

export const upload = (caps) => {
    return http.post("orderingCapsules/upload", {
            id: caps.id,
            id_capsules: caps.id_capsules,
            user: User
        }
    )}

export const create = (caps) => {
    return http.post("orderingCapsules/create", {
            id: caps.id,
            id_capsules: caps.id_capsules,
            user: User
        }
    )}
export const Delete = (id) => {
    return http.delete("orderingCapsules/delete?id=" + id)
}