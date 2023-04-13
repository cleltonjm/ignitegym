import { ReactNode, createContext, useState } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState({
        id: '1',
        name: 'Clelton',
        email: 'cleltonjm_95@hotmail.com',
        avatar: 'clelton.png'
    });

    function signIn(email: string, password: string) {
        setUser({
            id: '',
            name: '',
            email,
            avatar: '',
        });
    }

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}