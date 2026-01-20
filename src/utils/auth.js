export const setAuthCookie = () => {
    document.cookie = "auth=true; path=/";
};

export const removeAuthCookie = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
};

export const isAuthenticated = () => {
    if (typeof window === "undefined") return false;
    return document.cookie.includes("auth=true");
};
