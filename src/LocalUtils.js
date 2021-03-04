export const USER = 'USER'

export function putUserInLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}

export function getUserFromLocalStorage() {
    const user = localStorage.getItem(USER);
    if (user && user.token) return JSON.parse(user);

    return {
        email: '',
        id: '',
        token: ''
    }
}

