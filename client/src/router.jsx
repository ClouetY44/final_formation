import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home.jsx"
import List from "./components/pages/articles/list.jsx"
import DetailArticle from "./components/pages/articles/detail.jsx";
import Character from "./components/pages/characters/list.jsx";
import DetailCharacter from "./components/pages/characters/detail.jsx";
import User from "./components/pages/dashboard/user.jsx";
import Admin from "./components/pages/dashboard/admin.jsx";

function Router() {
    return (
     
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/article" element={<List />} />
            <Route path ="/article/detail" element={<DetailArticle />} />
            <Route path ="/character" element={<Character />} />
            <Route path ="/character/detail" element={<DetailCharacter />} />
            <Route path ="/dashboard" element={<User />} />
            <Route path ="/dashboard/admin" element={<Admin />} />
        </Routes>
       
    )
}

export default Router;


