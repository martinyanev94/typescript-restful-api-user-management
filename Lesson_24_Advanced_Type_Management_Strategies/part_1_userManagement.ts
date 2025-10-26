type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
function createUser(user: User): void {
    console.log(`User Created: ${user.name}`);
}
