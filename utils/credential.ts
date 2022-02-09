const isServer = typeof window === 'undefined'

export const getJwt = (): string | null => {
    if (!isServer) {
        let jwt: string | null = null
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
    if (!isServer) {
        sessionStorage.setItem("jwt", jwt)
    }
}

export const removeJwt = () => {
    if (!isServer) {
        sessionStorage.removeItem('jwt')
    }
}

