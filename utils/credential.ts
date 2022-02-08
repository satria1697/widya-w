import {isServer} from "./utils";

export const getJwt = (): string | null => {
    if (!isServer) {
        let jwt: string | null = ''
        try {
            jwt = sessionStorage.getItem("jwt")
        } catch (e) {
            console.log(e)
        }
        return jwt
    }
    return null
}

export const setJwt = (jwt: string) => {
    if (isServer) {
        sessionStorage.setItem("jwt", jwt)
    }
}
