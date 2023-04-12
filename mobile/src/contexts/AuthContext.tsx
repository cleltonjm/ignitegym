import { ReactNode, createContext } from "react";

import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={{
            user: {
                id: '1',
                name: 'Clelton',
                email: 'cleltonjm_95@hotmail.com',
                avatar: 'clelton.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}