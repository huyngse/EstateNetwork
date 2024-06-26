import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

type MainLayoutProps = {
    children: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <div className="min-h-10 border border-b">
                <Navbar />
            </div>
            <div className="flex-1">
                {children}
            </div>
            <div className="min-h-10 border border-b">Footer</div>
        </div>
    )
}

export default MainLayout