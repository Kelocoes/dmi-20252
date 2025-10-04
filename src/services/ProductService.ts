const getProducts = async () => {
    const res = await fetch("/dmi/data/products.json");
    const data = await res.json();
    return data;
};

export { getProducts };
