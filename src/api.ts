import axios from "axios";
import { LoginResult } from "./models/loginResult";
import { UserModel } from "./models/user.model";



const BASEURL = 'http://localhost:5299/';



export const login  = async (username: string, password: string): Promise<LoginResult> => {
    // const res = await axios.post<LoginResult>(BASEURL + 'login', {username, password});
    // return res.data;

    return {
        accessToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImJjMWNlOTQwLTYzZTktNDNlOS1iZTMzLTZjOTE4ZTE1NDJjMCIsInN1YiI6InBpcHBvIiwiZW1haWwiOiJwaXBwbyIsIm5iZiI6MTY2NTQ5Mjg3NCwiZXhwIjoxNjY1NDkzMTc0LCJpYXQiOjE2NjU0OTI4NzQsImlzcyI6InRlY2h0ZWFtIiwiYXVkIjoidGVjaHRlYW0ifQ.Z8qUZqCm-XLW62gyHOMw1vPgr0hTAbuXUxabWIkISe0xjyIrm28dYjY-Ky84C5eRHMerG0uM-B1LI5udcTdH5w',
        refreshToken: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6ImJjMWNlOTQwLTYzZTktNDNlOS1iZTMzLTZjOTE4ZTE1NDJjMCIsInN1YiI6InBpcHBvIiwiZW1haWwiOiJwaXBwbyIsIm5iZiI6MTY2NTQ5Mjg3NCwiZXhwIjoxNjY1NDk2NDc0LCJpYXQiOjE2NjU0OTI4NzQsImlzcyI6InRlY2h0ZWFtIiwiYXVkIjoidGVjaHRlYW0ifQ.LTffS867bYhdaNccMDXeFps-fyIs-nq3CwRCXcns8jRmSsL1vZ3_JFkRWPvJh2vnwXHWK0Fwho4xPlQu_HMbLA'
    }
}

export const refresh  = async (refreshToken: string): Promise<LoginResult> => {
    const res = await axios.post<LoginResult>(BASEURL + 'refresh', {refreshToken});
    return res.data;
}

export const getUsers  = async (refreshToken: string): Promise<Array<UserModel>> => {
    const res = await axios.get<Array<UserModel>>(BASEURL + 'users');
    return res.data;
}
