interface User {
    id: number;
    name: string;
    email: string;
}

type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};
