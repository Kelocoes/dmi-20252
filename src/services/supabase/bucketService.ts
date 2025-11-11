import supabase from "./config";

const BUCKET_NAME = import.meta.env.VITE_SUPABASE_BUCKET;

export type UploadResult = {
    success: boolean;
    url?: string;
    error?: string;
};

const bucketService = {
    uploadImage: async (file: File, folder: string = "posts"): Promise<UploadResult> => {
        try {
            // Lo que ustedes desean hacer
            const fileExt = file.name.split(".").pop(); // png
            const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`; // posts/imagen.png

            const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(fileName, file, {
                cacheControl: "3600",
            });

            if (error) {
                return {
                    success: false,
                    error: "Hubo un error a subir",
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
            // Manipulacion del error
            console.info(error);
            return {
                success: false,
                error: "Hubo un error a subir",
            };
        }
    },
};

export default bucketService;
