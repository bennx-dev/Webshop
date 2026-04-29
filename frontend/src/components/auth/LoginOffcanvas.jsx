import LoginForm from "./LoginForm.jsx";

export default function LoginOffcanvas() {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="loginOffcanvas"
            aria-labelledby="loginOffcanvasLabel"
        >
            <div className="offcanvas-header">
                <h5 id="loginOffcanvasLabel">Account</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                />
            </div>

            <div className="offcanvas-body">
                <LoginForm />
            </div>
        </div>
    );
}