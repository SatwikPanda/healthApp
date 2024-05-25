import { LoginButton } from "./auth/login-button";
import { Button } from "./ui/button";
import  AuthButton  from "./elements/authButton"

const Navbar = () => {
    return (
        <header>
            <nav>
                <AuthButton text="Sign in"/>
            </nav>
        </header>
    );
}
 
export default Navbar;