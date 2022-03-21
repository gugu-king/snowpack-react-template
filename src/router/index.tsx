import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from "React";
import router, { RoutesConfig } from "@/config/router"

function getRouter(items: RoutesConfig) {
    return items.map(i => (<Route key={i.path} path={i.path} element={<i.element />} >{i.children ? getRouter(i.children) : null}</Route>))
}



export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>...</div>}>
                <Routes>
                    {getRouter(router)}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}