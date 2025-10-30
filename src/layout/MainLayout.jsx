// src/layout/MainLayout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
    const location = useLocation();
    const hideFooter = location.pathname === "/contact";

    return (
        <div>
            {/* 상단 네비게이션 */}
            <Header />

            {/* 페이지 컨텐츠 */}
            <main>
            {children}
            </main>

            {/* 하단 푸터 */}
            {!hideFooter && <Footer />}
        </div>
    );
}
