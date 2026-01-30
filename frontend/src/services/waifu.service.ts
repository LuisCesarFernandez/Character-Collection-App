import { api } from "./api";
import type { Waifu } from "../interfaces/serviceInterface";
import type { CreateWaifuInterface } from "../interfaces/serviceInterface";

export const getWaifu = async ():Promise<Waifu[]> => {
    try {
        const { data } = await api.get<Waifu[]>('/waifus');
        return data;
    } catch (error) {
        throw error;
    }
}

export const postWaifu = async (waifu:CreateWaifuInterface):Promise<CreateWaifuInterface> => {
    try {
        const {data} = await api.post<CreateWaifuInterface>('/waifus',waifu);
        return data;
    } catch (error) {
        throw error;
    }
}

export const deleteWaifu = async (id:number):Promise<void> => {
    try {
        return await api.delete(`/waifus/${id}`);
    } catch (error) {
        throw error;
    }
}