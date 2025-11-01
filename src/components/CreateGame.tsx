import { useRef, useState, type FormEvent, type ChangeEvent } from "react";

import { bucketService } from "../services";
import gameService from "../services/supabase/gameService";

interface CreateGameProps {
    onClose: () => void;
}

export default function CreateGame({ onClose }: CreateGameProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const categories = ["Strategy", "Family", "Cooperative", "Party", "Abstract", "Card Game"];

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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

        if (imageFile && imageFile.size > 0) {
            const uploadResult = await bucketService.uploadImage(imageFile, "games");
            if (uploadResult.success) {
                console.info("Image uploaded successfully:", uploadResult.url);
                const result = await gameService.create({
                    name: dataObj.name as string,
                    description: dataObj.description as string,
                    min_players: dataObj.min_players,
                    max_players: dataObj.max_players,
                    category: dataObj.category as string,
                    image_url: uploadResult.url,
                    user_id: 1,
                });
                console.info("Game created successfully:", result);
                onClose();
            } else {
                console.error("Image upload failed:", uploadResult.error);
            }
        }
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
                    <select name="category" className="select select-bordered w-full" defaultValue="" required>
                        <option value="" disabled>
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
                    <input type="file" name="image" accept="image/*" className="file-input file-input-bordered w-full" onChange={handleImageChange} />
                    <label className="label">
                        <span className="label-text-alt">Opcional: Sube una imagen del juego (JPG, PNG, etc.)</span>
                    </label>
                    {imagePreview && (
                        <div className="mt-4">
                            <p className="text-sm font-semibold mb-2">Previsualización:</p>
                            <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border-2 border-base-300" />
                        </div>
                    )}
                </div>

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
