export default function LoginForm() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <form>
                <h2 className="mb-3 p-2 text-center">Inloggen</h2>
                <div className="mb-3">
                    <input
                        id="emailAdres"
                        type="text"
                        className="form-control"
                        placeholder="Emailadres"
                    />
                </div>

                <div className="mb-0">
                    <input
                        id="wachtwoord"
                        type="password"
                        className="form-control"
                        placeholder="Wachtwoord"
                    />
                </div>

                <div className="mb-3 mt-0 text-end">
                    <a href="#" className="small">Wachtwoord vergeten?</a>
                </div>

                <button
                    type="submit"
                    className="w-100 mb-3"
                >
                    Inloggen
                </button>

                <p className="text-center small">
                    Heb je nog geen account bij ons? Maak dan{" "}
                    <a href="#">hier</a> een account aan.
                </p>
            </form>
        </div>
    );
}