import { useEffect, useState } from "react";
import type { Comment } from "@/types/PostType";

export default function CommentSection({
    postId,
    comments,
    initialHideComments = false,
}: {
    postId: number;
    comments: Comment[];
    initialHideComments: boolean;
}) {
    const [hideComments, setHideComments] = useState(initialHideComments);

    const handleToggleComments = () => {
        setHideComments((prev) => !prev);
    };

    useEffect(() => {
        const savedState = localStorage.getItem("hideComments") || "{}";
        const parsedState = JSON.parse(savedState);
        parsedState[postId] = hideComments;
        localStorage.setItem("hideComments", JSON.stringify(parsedState));
    }, [hideComments, postId]);

    return (
        <div className="comment-section">
            <h4>Comentarios</h4>
            <button onClick={handleToggleComments}>
                {hideComments ? "Mostrar comentarios" : "Ocultar comentarios"}
            </button>
            {!hideComments &&
                comments.map((comment) => (
                    <div className="comment">
                        <p>
                            {comment.user}: {comment.text}
                        </p>
                    </div>
                ))}
        </div>
    );
}
