import Categorieen from "../components/categorieen.jsx";
import LoginForm from "../components/registreerLogin.jsx";
import ProductsHome from "../components/productsHome.jsx";

export default function Home() {
    return (
        <main className="container-fluid d-grid ps-0 ps-md-3">
            <div className="row">
                <div className="col-auto pe-0">
                    <Categorieen/>
                </div>
                <div className="col">
                    <ProductsHome/>
                </div>
            </div>
            <LoginForm/>
        </main>
    );
}