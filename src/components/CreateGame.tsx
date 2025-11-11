import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import bucketService from "../services/supabase/bucketService";
import gameService from "../services/supabase/gamesService";

interface CreateGameProps {
    onClose: () => void;
}

export default function CreateGame({ onClose }: CreateGameProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [imagePreview, setImagePreview] = useState<string | null>();

    const categories = ["Strategy", "Family", "Cooperative", "Party", "Abstract", "Card Game"];

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);
        const imageFile = formData.get("image") as File;
        const dataObj = {
            name: formData.get("name"),
            description: formData.get("description"),
            min_players: Number(formData.get("min_players")),
            max_players: Number(formData.get("max_players")),
            category: formData.get("category"),
            image: imageFile && imageFile.size > 0 ? imageFile : null,
        };
        console.info("Game Data:", dataObj);
        // TODO: Llamar al servicio para crear el juego
        const response = await bucketService.uploadImage(imageFile);
        try {
            const data = await gameService.create({
                name: dataObj.name as string,
                description: dataObj.description as string,
                min_players: dataObj.min_players as number,
                max_players: dataObj.max_players as number,
                category: dataObj.category as string,
                image_url: response.url as string,
                user_id: 1
            });
        } catch (e) {
            console.error(e);
        }
        // onClose();
    };

    return (
        <div>
            <h3 className="font-bold text-2xl mb-4">Registrar Nuevo Juego</h3>
            <p className="text-sm text-base-content/60 mb-6">Completa la información del juego que deseas registrar</p>

            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Nombre del juego</span>
                    </label>
                    <input type="text" name="name" placeholder="Ej: Catan, Monopoly, Chess..." className="input input-bordered w-full" required />
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Descripción</span>
                    </label>
                    <textarea name="description" placeholder="Describe el juego, sus mecánicas, objetivo..." className="textarea textarea-bordered h-24 w-full" required />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Jugadores mínimo</span>
                        </label>
                        <input type="number" name="min_players" placeholder="1" min="1" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Jugadores máximo</span>
                        </label>
                        <input type="number" name="max_players" placeholder="4" min="1" className="input input-bordered w-full" required />
                    </div>
                </div>

                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text">Categoría</span>
                    </label>
                    <select name="category" className="select select-bordered w-full" required>
                        <option value="" disabled selected>
                            Selecciona una categoría
                        </option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text">Imagen del juego</span>
                    </label>
                    <input type="file" name="image" accept="image/*" className="file-input file-input-bordered w-full" onChange={handleImageUpload} />
                </div>

                {imagePreview && (
                    <div>
                        <p>Preview:</p>
                        <img src={imagePreview} />
                    </div>
                )}

                <div className="modal-action">
                    <button type="button" className="btn btn-ghost" onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Registrar Juego
                    </button>
                </div>
            </form>
            <div className="modal-backdrop" onClick={onClose}></div>
        </div>
    );
}
