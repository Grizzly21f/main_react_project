import React, { useState } from 'react';
import { Header } from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import styles from './MainLayout.module.css';

const MainLayout: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? styles['dark-theme'] : styles['light-theme']}>
            <div>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
            <div className={styles.sd}>
                <Outlet />
            </div>
        </div>
    );
};

export { MainLayout };