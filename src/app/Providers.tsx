import { IChildren } from "@/types";
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: IChildren) => {
    return <ThemeProvider>
        {children}
    </ThemeProvider>
}

export default Providers