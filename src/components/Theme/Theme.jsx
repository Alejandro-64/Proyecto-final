import { useEffect, useState } from "react";
import "./Theme.css";

const Theme = () => {

    const savedTheme = () => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        return true
    }

    const [darkTheme, setDarkTheme] = useState(savedTheme);

    useEffect(() => {
        
        if (darkTheme) {
            document.body.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }

    }, [darkTheme])

    return (
        <>
            <button onClick={() => setDarkTheme(!darkTheme)} className="theme">
                <span className="theme__span">
                    <i className={`bi ${darkTheme ? "bi-sun-fill" : "bi-moon-fill"} theme__span-icon`}></i>
                </span>
            </button>
        </>
    );
}

export default Theme;