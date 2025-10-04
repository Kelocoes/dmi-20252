import { useEffect, useState } from "react";

import type { Product } from "../../types/Product";
import { getProducts } from "../../services/ProductService";
import ProductCard from "../../components/ProductCard";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div id="catalog-page">
            <h1>Productos!</h1>
            <div id="products-container" className="flex flex-wrap gap-14">
                {products.map((product: Product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}
