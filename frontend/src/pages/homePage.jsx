import Categories from "../components/categories.jsx";
import FetchArticles from "../components/articles.jsx";
import LoginForm from "../components/loginForm.jsx";
import SearchBar from "../components/searchBar.jsx";
import MobileCategorieSidebar from "../components/mobileCategorieSidebar.jsx";

export default function HomePage() {
    return (
        <main className="container-fluid">
            <SearchBar/>
            <MobileCategorieSidebar/>

            <div className="d-flex flex-row gap-3" >
                {/*desktop categorieen*/}
                <div className="d-none d-md-block d-flex " style={{ flex: "0 0 230px" }}>
                    <Categories/>
                </div>

                <div className="flex-grow-1">
                    <FetchArticles/>
                </div>
            </div>
            <LoginForm/>
        </main>
    );
}