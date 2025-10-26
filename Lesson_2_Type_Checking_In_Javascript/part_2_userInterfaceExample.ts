interface User {
    id: number;
    name: string;
    email: string;
}
const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};
const user: User = {
    id: 2,
    name: "Bob",
    // email is missing; this will raise a compile-time error
};
