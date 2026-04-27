import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<Menu />} />
            </Route>
        </Routes>
    );
}

export default App;
