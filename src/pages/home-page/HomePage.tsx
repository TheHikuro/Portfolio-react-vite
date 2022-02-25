import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div className='h-screen w-full flex justify-center'>
            <h1>{t('default.name')}</h1>
        </div>
    );
}

export default HomePage;