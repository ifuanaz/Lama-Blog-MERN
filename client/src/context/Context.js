import {createContext, useEffect, useReducer} from 'react';
import LoginReducer from './Reducer';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')),
    isFetching: false,
    error: false
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

    useEffect(() => {
        if (state.user) {
            localStorage.setItem('user', JSON.stringify(state.user));
        } else {
            const userExist = localStorage.getItem('user');

            userExist && localStorage.removeItem('user');
        }

        // if (state.user instanceof Object) {
        //     if (Object.keys(state.user).length) {
        //         localStorage.setItem('user', JSON.stringify(state.user));
        //     } else {
        //         localStorage.removeItem('user');
        //     }
        // }
    }, [state.user]);

    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}