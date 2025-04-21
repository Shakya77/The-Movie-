import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));

            if (location.pathname === "/login") {
                navigate("/watchlist");
            }
        }
    }, [navigate, location.pathname]);

    const login = (username, password) => {
        if (username === "admin" && password === "admin") {
            const userData = { username };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            const from = location.state?.from?.pathname || "/trending";
            navigate(from, { replace: true });
        } else {
            alert("Invalid Credentials");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
