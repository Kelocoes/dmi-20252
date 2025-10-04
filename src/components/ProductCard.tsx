import type { Product } from "../types/Product";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
                <img src={product.image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                    {product.tags.map((tag) => {
                        return (
                            <div key={tag.id} className="badge badge-outline">
                                {tag.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
