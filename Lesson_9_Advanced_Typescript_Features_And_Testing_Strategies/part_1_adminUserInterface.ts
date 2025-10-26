interface User {
    name: string;
    email: string;
}

interface Admin {
    role: string;
}

type AdminUser = User & Admin;

const admin: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    role: "Administrator",
};

console.log(admin);
