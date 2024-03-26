function setUserData(userData) {
    localStorage.setItem('user', JSON.stringify(userData));
}

function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

function clearUserData() {
    localStorage.removeItem('user');
}

function getUserToken() {
    const userData = getUserData();
    return userData?.accessToken;
}

function getUserId() {
    const userData = getUserData();
    return userData?._id;
}

function hasOwner(ownerId) {
    const id = getUserId();
    return ownerId === id;
}

export const userHelper = {
    setUserData,
    getUserData,
    clearUserData,
    getUserToken,
    getUserId,
    hasOwner
};