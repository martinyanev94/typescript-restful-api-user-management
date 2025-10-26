type IsString<T> = T extends string ? "Yes, it's a string" : "No, it's not a string";
type TestString = IsString<string>; // resolves to "Yes, it's a string"
type TestNumber = IsString<number>; // resolves to "No, it's not a string"
