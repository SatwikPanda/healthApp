const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <nav className="bg-red-400 text-white p-6">mmm</nav>
            {children}
        </div>
    );
}

export default AuthLayout;