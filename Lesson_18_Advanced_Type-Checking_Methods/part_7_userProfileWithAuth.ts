interface AuthUser {
    id: number;
    username: string;
}

interface Profile {
    email: string;
    avatarUrl: string;
}

type UserProfileWithAuth = AuthUser & Profile;

const userProfile: UserProfileWithAuth = {
    id: 1,
    username: 'john_doe',
    email: 'john@example.com',
    avatarUrl: 'http://example.com/avatar.jpg'
};
