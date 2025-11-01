import { supabase } from "./config";

const BUCKET_NAME = import.meta.env.VITE_SUPABASE_BUCKET;

export interface UploadResult {
    success: boolean;
    url?: string;
    error?: string;
}

const bucketService = {
    uploadImage: async (file: File, folder: string = "images"): Promise<UploadResult> => {
        try {
            // Generar un nombre único para el archivo
            const fileExt = file.name.split(".").pop();
            const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

            // Subir el archivo
            const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(fileName, file, {
                cacheControl: "3600",
                upsert: false,
            });

            if (error) {
                console.error("Error uploading image:", error);
                return {
                    success: false,
                    error: error.message,
                };
            }

            const {
                data: { publicUrl },
            } = supabase.storage.from(BUCKET_NAME).getPublicUrl(data.path);

            return {
                success: true,
                url: publicUrl,
            };
        } catch (error) {
            console.error("Unexpected error:", error);
            return {
                success: false,
                error: "Error inesperado al subir la imagen",
            };
        }
    },

    getImageUrl: (path: string): string => {
        const {
            data: { publicUrl },
        } = supabase.storage.from(BUCKET_NAME).getPublicUrl(path);
        return publicUrl;
    },

    deleteImage: async (path: string): Promise<boolean> => {
        try {
            const { error } = await supabase.storage.from(BUCKET_NAME).remove([path]);

            if (error) {
                console.error("Error deleting image:", error);
                return false;
            }

            return true;
        } catch (error) {
            console.error("Unexpected error:", error);
            return false;
        }
    },
};

export default bucketService;
