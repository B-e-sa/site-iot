import { IChildren } from '@/types'
import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface IContext {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext({} as IContext)

const ContextProvider = ({ children }: IChildren) => {

    const [darkTheme, setDarkTheme] = useState<boolean>(false)

    return (
        <Context.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </Context.Provider>
    )

}
export default ContextProvider