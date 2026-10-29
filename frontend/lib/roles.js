const roleHomes = {
    TRAVELER: '/traveler',
    CONDUCTOR: '/conductor',
    SUPERVISOR: '/supervisor',
    ADMIN: '/admin',
};

export function homeForRole(role) {
    return roleHomes[role] || '/';
}
