type IsArray<T> = T extends any[] ? 'Array' : 'Not an Array';

type Result1 = IsArray<number[]>; // Result1 will be 'Array'
type Result2 = IsArray<string>; // Result2 will be 'Not an Array'
