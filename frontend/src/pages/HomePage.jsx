import SearchBar from "../components/search/SearchBar.jsx";
import {useParams} from "react-router-dom";
import Categories from "../components/categories/Categories.jsx";
import ArticlesContainer from "../components/articles/ArticlesContainer.jsx";
import useCategories from "../hooks/useCategories.jsx";

export default function HomePage() {
    const {categoryId} = useParams();
    const categories = useCategories();

    return (
        <main className="container-fluid">
            <SearchBar/>
            {/*<MobileCategorySidebar categories={categories} />*/}

            <div className="d-flex flex-row gap-3">
                {/*desktop categorieen*/}
                <div className="d-none d-md-block d-flex " style={{flex: "0 0 230px"}}>
                    <Categories categories={categories}/>
                </div>

                <div className="flex-grow-1">
                    <ArticlesContainer key={categoryId || "all"}/>
                </div>
            </div>
        </main>
    );
}