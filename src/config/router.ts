import { FC, lazy } from "react";
import Layout from "@/layout"

type Route = {
    children?: Array<Route>;
    element: FC;
    index?: boolean;
    path: string;
}
export type RoutesConfig = Array<Route>
const router: RoutesConfig = [
    {
        path: "/",
        element: Layout,
        children: [
            {
                path: "a",
                element: lazy(() => import('@/page/A'))
            }
        ]

    }
]
export default router

