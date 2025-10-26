type UserPreview = Pick<UserProfile, 'name' | 'email'>;

const userPreview: UserPreview = { name: "Jane", email: "jane@example.com" };
