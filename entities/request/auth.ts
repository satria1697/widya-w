export type TGender = 'L' | 'P';

export interface LoginRequest {
    email: ''
    password: ''
}

export interface LogoutRequest {
    jwt: ''
}

export interface RegisterRequest {
    name: string;
    email: string;
    gender: TGender;
    password: string;
}
