import instance from "./instance";

export const signup = (user:any) => {
    return instance.post("/users",user);
}
export const list = (url:string) => {
    return instance.get(url);
}
export const signin = (user:any)=>{
    const url= `/signin`
    return instance.post(url, user)
  }