interface Person {
    name: string;
    age: number;
}
type PartialPerson = {
    [K in keyof Person]?: Person[K];
};
const person1: PartialPerson = { name: 'Alice' };
const person2: PartialPerson = { age: 30 };
