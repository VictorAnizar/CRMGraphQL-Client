import react from "react";
import Link from "next/link";
import { useRouter} from "next/router";

const Sidebar = () => {

    // Routing de next

    const router = useRouter();

    console.log(router.pathname);

    return (
        <aside className="bg-gray-800 sm:w-1/4 xl:1/5 sm:min-h-screen p-5">
            <div>
                <p className="text-white text-2xl font-black">CRM Clientes</p>
            </div>
            <nav className="mt-5 list-none">
                <li className={router.pathname === "/" ? "bg-blue-800 p-3" : "p-3"}>
                    <Link href="/">
                        <a className="text-white mb-3 block">
                            Clientes
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/pedidos" ? "bg-blue-800 p-3" : "p-3"}>
                    <Link href="/pedidos">
                        <a className="text-white mb-3 block">
                            Pedidos
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/productos" ? "bg-blue-800 p-3" : "p-3"}>
                    <Link href="/productos">
                        <a className="text-white mb-3 block">
                            Productos
                        </a>
                    </Link>
                </li>
            </nav>
        </aside>
    );
}

export default Sidebar;