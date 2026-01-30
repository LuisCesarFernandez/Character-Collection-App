export interface Waifu {
    id_waifu: number,
    nombre_waifu: string,
    anime: string,
    puntuacion: number,
    image_waifu: string,
}

export interface CreateWaifuInterface {
    nombre_waifu: string,
    anime: string,
    puntuacion: number,
    image_waifu: string,
}