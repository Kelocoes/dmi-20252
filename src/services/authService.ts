const login = async (username: string, password: string) => {
    const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.info(data);
};

export { login };
