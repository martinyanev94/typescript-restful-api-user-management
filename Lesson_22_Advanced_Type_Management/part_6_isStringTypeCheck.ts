type IsString<T> = T extends string ? 'Yes, it is a string!' : 'No, it is not a string!';
type Test1 = IsString<string>; // "Yes, it is a string!"
type Test2 = IsString<number>; // "No, it is not a string!"
