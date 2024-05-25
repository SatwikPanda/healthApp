import { LoginButton } from "../auth/login-button";
import { Button } from "../ui/button";

interface AuthButtonProps {
    text: string;
    variant?: string;
    path?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ text, variant: version, path}) => {
    return (
        <div>
            <LoginButton>
                <Button variant="secondary" className="lg">
                    {text}
                </Button>
            </LoginButton>
        </div>
    );
}
 
export default AuthButton;