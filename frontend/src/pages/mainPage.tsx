import { useEffect, useState } from "react";
import { CardComponent } from "../components/cardComponent";
import type { Waifu } from "../interfaces/serviceInterface";
import { getWaifu, deleteWaifu } from "../services/waifu.service";
import '../styles/CardStyle.css';

export const MainPage = () => {
    const [waifus, setWaifus] = useState<Waifu[]>([]);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        const fetchWaifus = async () => {
            try {
                const data = await getWaifu();
                setWaifus(data);
            } catch (error) {
                setError('Error al cargar los datos.');
            }
        }
        fetchWaifus();
    }, [])

    //Función donde se maneja el delete
    const handleDelete = async (id: number) => {
    console.log("🔥 HANDLE DELETE LLAMADO CON:", id);

    try {
        deleteWaifu(id);

        setWaifus(prev => {
            const nuevo = prev.filter(w => w.id_waifu !== id);
            console.log("ANTES:", prev.length);
            console.log("DESPUÉS:", nuevo.length);
            return nuevo;
        });

    } catch {
        alert('Error al eliminar')
    }
}


    if (error) return <p>{error}</p>

    console.log('render mainpage')

    return (
        <div className="container">
            <h1>waifus: {waifus.length}</h1>
            {waifus.map(waifu => (
                <CardComponent
                    key={waifu.id_waifu}
                    id_waifu={waifu.id_waifu}
                    nombre_waifu={waifu.nombre_waifu}
                    anime={waifu.anime}
                    image_waifu={waifu.image_waifu}
                    puntuacion={waifu.puntuacion}
                    onDelete={handleDelete} />
            ))}
        </div>
    )
}