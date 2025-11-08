import { supabase } from "./config";

const canvaService = {
    getPositions: async () => {
        const { data, error } = await supabase.from("canva").select("*, created_by(*)");
        if (error) {
            console.error("Error fetching positions:", error);
            return { success: false, error };
        }
        return { success: true, data };
    },
    savePosition: async (x: number, y: number, userId: number) => {
        const { data, error } = await supabase.from("canva").insert({ "x": x, "y": y, "created_by": userId }).select("*").single();

        if (error) {
            console.error("Error saving position:", error);
            return { success: false, error };
        }

        return { success: true, data };
    },
};

export default canvaService;
