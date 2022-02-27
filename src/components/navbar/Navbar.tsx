import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"
import './index.scss';
import { FlagFr } from "../../assets/svg";

export const LeftSideNavbar = () => {
    const { t } = useTranslation();
    const titles = [
        t('default.navbar.1'),
        t('default.navbar.2'),
        t('default.navbar.3'),
        t('default.navbar.4'),
        t('default.navbar.5'),
    ]
    return (
        <>
            <motion.div className="flex flex-col justify-evenly h-full">
                <motion.div className=" w-full h-1/3 flex flex-row justify-start items-start mt-4 ml-4">
                    <motion.img src="/src/favicon.svg" className="h-7 w-7 shadow-2xl mr-4" animate={{
                        rotate: 360,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    }} />
                    <motion.span className="text-white font-bold text-xl">{t('default.name')}</motion.span>
                </motion.div>
                <motion.div className="flex h-1/3 ml-4 flex-col">
                    {titles.map((title, index) => {
                        return (
                            <motion.div className="flex flex-row justify-start items-center mt-4" key={index}>
                                <motion.span
                                    className="h-1 w-12 bg-white rounded cursor-pointer mb-5 shadow-xl">
                                </motion.span>
                            </motion.div>
                        )
                    })}
                </motion.div>
                <div className="h-1/3"></div>
            </motion.div>
        </>
    )
}