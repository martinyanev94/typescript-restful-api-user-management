interface Dog {
    bark: () => void;
}

interface Cat {
    meow: () => void;
}

function isDog(animal: Dog | Cat): animal is Dog {
    return (animal as Dog).bark !== undefined;
}

function interact(animal: Dog | Cat) {
    if (isDog(animal)) {
        animal.bark();
    } else {
        animal.meow();
    }
}
