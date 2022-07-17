import instance from "./instance"

export const signup = () => {
    return instance.post("/users");
}

export const list = (url) => {
    return instance.get(url)
}