export const validemail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)

}