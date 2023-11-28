// import { NavLink } from "react-router-dom";
// import React from 'react';
// import css from './Header.module.css';
//
// interface HeaderProps {
//     darkMode: boolean;
//     toggleDarkMode: () => void;
// }
//
// const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
//     return (
//         <div className={css.header}>
//             <div className={css.logo}>The MovieDB</div>
//             <div>
//                 <NavLink to={'movies'}>Movies</NavLink>
//                 <NavLink to={'genres'}>Genres</NavLink>
//                 <NavLink to={'search'}>Search</NavLink>
//                 <button onClick={toggleDarkMode}>Change Theme</button>
//             </div>
//             <div className={css.user}>
//                 <img src="https://i.pinimg.com/564x/06/82/1a/06821a14a9b07af54ec3f29783b73e98.jpg" alt="user" />
//             </div>
//         </div>
//     );
// };
//
// export { Header };
//
import React from 'react';
import { NavLink } from "react-router-dom";
import css from './Header.module.css';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className={css.header}>
            <div className={css.logo}>The MovieDB</div>
            <div className={css.main}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
                    <FormControlLabel className={css.hdd}

                        control={
                            <Switch
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                name="darkMode"
                                color="primary"
                            />
                        }
                        label="Dark Mode"
                    />
            </div>
            <div className={css.user}>
                <img src="https://i.pinimg.com/564x/06/82/1a/06821a14a9b07af54ec3f29783b73e98.jpg" alt="user" />
            </div>
        </div>
    );
}

export { Header };



