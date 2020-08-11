export const CREATE_USER = 'CREATE_USER';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const DELETE_USER = 'DELETE_USER';

export const createUser = (payload) => ({ type: CREATE_USER, payload });

export const checkLogin = () => ({ type: CHECK_LOGIN });

export const deleteUser = (payload) => ({ type: DELETE_USER, payload });
