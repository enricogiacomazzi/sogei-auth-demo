import { LoginResult } from "../models/loginResult";



export function saveTokens(res: LoginResult) {
    sessionStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
}