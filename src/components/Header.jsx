import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
        <div className="header_wrap">
            <nav>
                <h1 className="logo">
                    <NavLink to="/" end aria-label='Home'>
                        <svg width="84" height="25" viewBox="0 0 84 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M73.688 4.1001L67.001 24H62.312L71.0776 0.539062H74.0747L73.688 4.1001ZM79.2793 24L72.5601 4.1001L72.1572 0.539062H75.1704L83.9844 24H79.2793ZM78.9731 15.2827V18.7793H66.3887V15.2827H78.9731Z" fill="black"/>
                        <path d="M60.2166 0.539062V24H55.7693L45.7952 7.72559V24H41.3641V0.539062H45.7952L55.8016 16.8296V0.539062H60.2166Z" fill="black"/>
                        <path d="M33.3873 0.539062H37.8185V16.1206C37.8185 17.9146 37.4318 19.4238 36.6583 20.6484C35.8849 21.8623 34.8322 22.7808 33.5001 23.4038C32.1681 24.0161 30.6534 24.3223 28.9562 24.3223C27.2374 24.3223 25.7067 24.0161 24.3639 23.4038C23.0211 22.7808 21.9684 21.8623 21.2057 20.6484C20.443 19.4238 20.0616 17.9146 20.0616 16.1206V0.539062H24.4928V16.1206C24.4928 17.2163 24.6754 18.1133 25.0406 18.8115C25.4059 19.499 25.9215 20.0093 26.5875 20.3423C27.2535 20.6753 28.0431 20.8418 28.9562 20.8418C29.88 20.8418 30.6696 20.6753 31.3248 20.3423C31.9908 20.0093 32.5011 19.499 32.8556 18.8115C33.2101 18.1133 33.3873 17.2163 33.3873 16.1206V0.539062Z" fill="black"/>
                        <path d="M4.979 0.539062L10.1353 11.48L15.3237 0.539062H20.1899L12.3911 15.4116V24H7.89551V15.4116L0.0805664 0.539062H4.979Z" fill="black"/>
                        </svg>
                    </NavLink>
                </h1>
                <div className="gnb_wrap">
                    <ul className="gnb">
                        <li>
                            <NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={({isActive}) => (isActive ? "active" : "")}>PROJECTS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  );
}
