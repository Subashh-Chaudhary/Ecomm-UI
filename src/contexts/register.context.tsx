import { createContext, useContext } from "react";

export interface User{
          id: number,
          name: string,
          phone: number,
          email: string,
          password: string,
          address: string,
          role: string,
}

interface RegisterContextType {
          users: User[];
          addUser: (user: User) => void;
          deleteUser: (id: number) => void;
}


export const RegisterContext = createContext<RegisterContextType>({
          users: [],
          addUser: () => {},
          deleteUser: () => {}
        });

export const useRegister = ()=>{
          useContext(RegisterContext);
}

export const RegisterProvider = RegisterContext.Provider;