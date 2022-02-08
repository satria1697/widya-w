export type TGender = 'L' | 'P';

export interface LoginRequest {
    email: string
    password: string
}

export interface LogoutRequest {
    jwt: string
}

export interface RegisterRequest {
    name: string;
    email: string;
    gender: TGender;
    password: string;
}
