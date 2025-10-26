function logValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}
interface Cat {
    name: string;
    meow: () => void;
}

function isCat(animal: any): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

const pet = { name: "Meowth", meow: () => console.log("Meow!") };

if (isCat(pet)) {
    pet.meow(); // TypeScript knows 'pet' is a Cat
}
