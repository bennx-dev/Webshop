import ReactIcon from "../assets/faviconReact.png";
import SpringIcon from "../assets/faviconSpring.svg";

export default function FooterBottom() {
    return (
        <div className="container-fluid d-grid">
            <div className="row">
                <div className="col-auto">
                    <span>© Bennx </span>
                </div>

                <div className="col text-end">
                    <span>Build with </span>

                    <img src={ReactIcon} alt="Spring" width="16" height="16"/>

                    <span> React and </span>

                    <img src={SpringIcon} alt="Spring" width="16" height="16"/>

                    <span> Spring / Hibernate</span>
                </div>
            </div>
        </div>
    );
}