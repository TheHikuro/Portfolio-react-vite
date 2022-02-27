import { LeftSideNavbar } from "../../components"
import { AboutPage, HomePage } from ".."
import './index.scss'

export const ContainerPage = () => {
    return (
        <>
            <div className='app__ContainerPage h-screen w-full flex'>
                <div className="flex flex-row w-full">
                    <div className="h-screen w-1/6 relative">
                        <LeftSideNavbar />
                    </div>
                    <div className="w-5/6 h-full overflow-hidden overflow-y-auto">
                        <HomePage />
                        <AboutPage />
                    </div>
                </div>
            </div>
        </>
    )
}