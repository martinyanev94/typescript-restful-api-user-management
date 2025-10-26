interface User {
    id: number;
    name: string;
}

type PartialUser = {
    [K in keyof User]?: User[K];
};

const user: PartialUser = {
    name: "Alice"
};
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

const readonlyUser: ReadonlyUser = {
    id: 1,
    name: "Bob"
};

// readonlyUser.name = "Charlie"; // This will result in an error
