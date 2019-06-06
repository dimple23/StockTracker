import axios from 'axios';

// set up functions for talking to our backend

// registerUser
// takes in an object
// linked to user-router.js
export const registerUser = (userInfo) => {
    return axios.post('/api/user/register', userInfo)
}
export const loginUser = (userInfo) => {
    return axios.post('/api/user/login', userInfo)
}

// loginUser
// takes in an object
// linked to user-router.js



// getAllUsers
export const getAllUsers = () => {
    return axios.get('/api/users')
}

// getUserByIdf
export const getUserById = (userId) => {
    return axios.get(`/api/users/${userId}`)
}

// updateUser
// takes in object AND user's id
// linked to user-router.js
export const updateUser = (userId, userInfo) => {
    return axios.put(`/api/users/update/${userId}`, userInfo)
}

// removeUser
// takes in User's id
export const removeUser = (userId) => {
    return axios.delete(`/api/users/${userId}`);
}


// export all functions so if someone needs to import all they can
export default {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    removeUser
    
}
