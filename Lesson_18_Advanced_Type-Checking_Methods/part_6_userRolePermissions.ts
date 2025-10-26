enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}

function getUserPermissions(role: UserRole) {
    switch (role) {
        case UserRole.Admin:
            return 'All permissions granted.';
        case UserRole.User:
            return 'Limited permissions granted.';
        case UserRole.Guest:
            return 'Read-only permissions granted.';
        default:
            return 'Role not recognized.';
    }
}
