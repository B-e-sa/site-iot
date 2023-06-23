import { IChildren } from '@/types'
import { useState, createContext, Dispatch, SetStateAction } from 'react'

interface IContext {
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
}

export const Context = createContext({} as IContext)

const ContextProvider = ({ children }: IChildren): JSX.Element => {
    const [language, setLanguage] = useState("en")

    return (
        <Context.Provider value={{
            language,
            setLanguage
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider