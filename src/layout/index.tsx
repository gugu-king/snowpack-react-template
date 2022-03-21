import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate()
    return (
        <div>layout
            <div> <a onClick={() => { navigate("/a") }}>goA</a></div>
            <Outlet />
        </div>
    )
}
