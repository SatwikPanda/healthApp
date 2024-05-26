import { LoginButton } from "./auth/login-button";
import { Button } from "./ui/button";
import  AuthButton  from "./elements/authButton"
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="px-9 py-2 flex justify-between items-center">
                    <div className="mx-2">
                        <Link href="#" className="font-bold text-xl tracking-tighter">Doccon</Link>
                    </div>
                    <div className="flex justify-between tracking-tight hidden lg:block">
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">Home</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">App</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">Pricing</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">EMR</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">Press Room</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">Company</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">Blog</Link>
                        <Link href="#" className="hover:bg-slate-300 px-4 rounded-full transition duration-450 ease-in-out transform py-1">FAQ</Link>
                    </div>
                    <div className="mx-2">
                    <LoginButton>
                        <Button variant="custom" className="font-semibold hidden lg:block">
                            Sign in
                        </Button>
                    </LoginButton>
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;