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
                    <div className="flex w-[620px] justify-between font-semibold">
                        <Link href="#">Home</Link>
                        <Link href="#">App</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">EMR</Link>
                        <Link href="#">Press Room</Link>
                        <Link href="#">Company</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">FAQ</Link>
                    </div>
                    <div className="mx-2">
                    <LoginButton>
                        <Button variant="secondary" className="lg">
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