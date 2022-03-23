import { createStore } from 'vuex'

export default createStore({
    /*
    state contains essential data
    In vuex, direct access to the state is forbidden
    We need to use the implicite getters
    */
    state: {
        token: null,
        userID: null,
        userRole: null,
        userName: null 
    },
    getters: {
        checkUserRole: (state) => (roles) => {
            console.log(state.userRole, roles)
            return roles.includes(state.userRole);
        }
    },
    /*
    setters are managed through mutations
    It allows to control the way data is modified (i.e. data type, or formatting...)
    */
    mutations: {
        setToken(state, newToken) {
            /* We could add extra processing and checking before updating data */
            state.token = newToken;
        },
        setUserID(state, newUserID) {
            state.userID = newUserID;
        },
        setUserName(state, newUserName) {
            state.userName = newUserName;
        },
        setUserRole(state, newUserRole) {
            state.userRole = newUserRole;
        }
    },
    actions: {
    },
    modules: {
    }
})