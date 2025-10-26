interface UserProfile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
    return { ...profile, ...updates };
}

const user: UserProfile = { name: "John", age: 30, email: "john@example.com" };
const updatedUser = updateProfile(user, { age: 31 });
