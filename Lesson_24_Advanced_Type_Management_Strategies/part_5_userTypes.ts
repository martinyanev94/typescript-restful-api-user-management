type UserInput = Partial<User>;
type CompleteUser = Required<User>;
type UserContactInfo = Pick<User, 'name' | 'email'>;
