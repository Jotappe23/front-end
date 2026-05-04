import AppHeader from "./header/app-header.jsx";
import AppContent from "./content/app-content.jsx";
import AppFooter from "./footer/app-footer.jsx";


function AppLayout () {
    return (
        <>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </>
    )
}

export default AppLayout