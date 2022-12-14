import { User } from '@/types';
import { createContext, useEffect, useReducer } from 'react';


export type UserState = User | null;
export interface UserStateActions {
    type: 'PRELOAD' | 'LOGIN' | 'REGISTER' | 'SET_IS_NEW' | 'LOGOUT';
    payload?: any;
}

const initialState: UserState = null;
const userStore = createContext<{
    user: UserState,
    dispatch: React.Dispatch<UserStateActions>
}>({
    user: initialState,
    dispatch: () => null
});
const { Provider } = userStore;

const dummyUserData: User = {
    id: 'askdfjsk',
    username: 'nftMaster',
    walletAddress: `0x8a01a85f1962938bbE6d19266581eAE9ED33004F`,
    avatar: 'https://i.seadn.io/gcs/files/6ec07a2b1f88cce9587d031d2d557bcd.png?auto=format&w=256',
    banner: 'https://i.redd.it/0rklmwkorcs11.png',
    bio: 'A crypto-head, looking to find the next most innovative projects.',
    isNew: false
}

const reducer = (state: UserState, action: UserStateActions): UserState => {
    const { type, payload } = action;
    const actions = {
        PRELOAD: () => payload as UserState,
        SET_IS_NEW: () => {
            if (!state) {
                return state;
            }

            return {
                ...state,
                isNew: payload
            }
        },
        LOGIN: () => {
            return dummyUserData;
        },
        REGISTER: () => {
            return {
                ...dummyUserData,
                isNew: true
            };
        },
        LOGOUT: () => null
    };

    return actions[type]();
}

interface Props {
    children: React.ReactNode;
}

const UserSessionProvider = ({ children }: Props) => {
    const [user, dispatch] = useReducer(reducer, initialState);

    const checkCache = async () => {
        // Check cache for token to use for fetching session
        // TODO: change to cache
        // dispatch(
        //     {
        //         type: 'LOGIN'
        //     }
        // )
    };

    useEffect(
        () => {
            if (!user) {
                checkCache();
            }
        }, []
    );

    return (
        <Provider value={{ user, dispatch }}>
            { children }
        </Provider>
    );
};

export { UserSessionProvider, userStore };