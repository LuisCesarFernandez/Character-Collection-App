import type { Waifu } from "../interfaces/serviceInterface";
import '../styles/CardStyle.css';

interface Props extends Waifu {
    onDelete: (id_waifu:number) => void;
}

export const CardComponent = ({ 
    id_waifu, 
    nombre_waifu, 
    anime, 
    image_waifu, 
    puntuacion, 
    onDelete }: Props) => {

    return (
        <div className="main-card">
            <img src={image_waifu || undefined} alt={nombre_waifu} />
            <section>
                <h3>{nombre_waifu}</h3>
                <p>{anime}</p>
                <p>{puntuacion}</p>
                <button onClick={()=>onDelete(id_waifu)}>Eliminar</button>
            </section>
        </div>
    )
}