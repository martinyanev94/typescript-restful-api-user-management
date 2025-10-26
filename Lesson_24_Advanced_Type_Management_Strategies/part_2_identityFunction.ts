function identity<T>(arg: T): T {
    return arg;
}
const num = identity<number>(42); // num is of type number
const str = identity<string>("Hello TypeScript!"); // str is of type string
