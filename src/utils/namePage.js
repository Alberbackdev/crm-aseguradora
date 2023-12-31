import { usePathname } from "next/navigation";

export const NamePageHelper = () => {
    const {pathname  } = usePathname();
    if(pathname === '/') return 'Bienvenido';
    if(pathname ==='/clientes') return 'Clientes';
    if(pathname === '/dashboard') return 'Dashboard';
    if(pathname === '/ventas') return 'Ventas';
}