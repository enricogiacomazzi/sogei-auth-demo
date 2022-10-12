import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { LoginResult } from "./models/loginResult";
import { UserModel } from "./models/user.model";
import { saveTokens } from "./shared/lsUtils";



const BASEURL = 'http://localhost:5299/';



export const login  = async (username: string, password: string): Promise<LoginResult> => {
    const res = await axios.post<LoginResult>(BASEURL + 'login', {username, password});
    const tokens = res.data;
    saveTokens(tokens);
    return tokens;
}

export const refresh  = async (): Promise<void> => {
    const refreshToken = localStorage.getItem('refreshToken') ?? '';
    const res = await axios.post<LoginResult>(BASEURL + 'refresh', {refreshToken});
    saveTokens(res.data);
}

const getLoggedUser = async () => {

}


export const getUsers  = async (): Promise<Array<UserModel>> => {
    const res = await axios.get<Array<UserModel>>(BASEURL + 'users');
    return res.data;
}
