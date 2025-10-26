type IsString<T> = T extends string ? "Yes, it's a string!" : "No, it's not a string.";
type Test1 = IsString<string>;  // "Yes, it's a string!"
type Test2 = IsString<number>;  // "No, it's not a string."
