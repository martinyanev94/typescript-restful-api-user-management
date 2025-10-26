interface User {
    name: string;
    email: string;
}

interface Admin {
    permissions: string[];
}

type AdminUser = User & Admin;
const adminUser: AdminUser = {
    name: 'John Doe',
    email: 'john@example.com',
    permissions: ['READ', 'WRITE', 'DELETE']
};
