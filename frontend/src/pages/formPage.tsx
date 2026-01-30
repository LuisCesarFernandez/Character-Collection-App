import { InputComponent } from "../components/inputComponent"
import { postWaifu } from "../services/waifu.service"
import React, { useState } from "react"
import "../styles/FormStyle.css"

export const FormPage = () => {

    const [waifu, setWaifu] = useState({
        nombre_waifu:"",
        anime:"",
        puntuacion:0,
        image_waifu:""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setWaifu(prev => ({
            ...prev,
            //convertir el input puntuacion en number
            [name]:name === 'puntuacion' ? Number(value):value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await postWaifu(waifu);

            //Limpiar Inputs
            setWaifu({
                nombre_waifu:"",
                anime:"",
                puntuacion:0,
                image_waifu:"",
            });
        } catch (error) {
            alert('Error al registrar waifu.')
        }
    }

    return(
        <form onSubmit={handleSubmit} className="main-form">
            <label>Nombre:</label>
            <InputComponent 
            name="nombre_waifu" 
            value={waifu.nombre_waifu} 
            placeholder="Nombre" 
            onChange={handleChange}/>

            <label>Anime:</label>
            <InputComponent 
            name="anime" 
            value={waifu.anime} 
            placeholder="Anime" 
            onChange={handleChange}/>

            <label>Puntuación:</label>
            <InputComponent 
            type="number"
            step="0.01"
            name="puntuacion" 
            value={waifu.puntuacion} 
            placeholder="Puntuación" 
            onChange={handleChange}/>

            <label>Imagen</label>
            <InputComponent 
            name="image_waifu" 
            value={waifu.image_waifu} 
            placeholder="Imagen" 
            onChange={handleChange}/>

            <section>
                <button type="submit" className="button-component">Registrar Waifu</button>
            </section>
        </form>
    )
}