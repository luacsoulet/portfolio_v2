"use client"
import { useState } from "react"
import { login } from "@/utils/apifunctions"
// import { Toast } from "@/components/Toast"

interface LoginError extends Error {
    status?: number;
    statusText?: string;
}

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'danger';
    type?: 'button' | 'submit';
}

const Button = ({ onClick, children, variant = 'primary', type = 'button' }: ButtonProps) => {
    const baseClasses = "btn btn-md active:scale-95 transition-all duration-300";
    const variantClasses = {
        primary: "bg-[#899878] active:bg-[#E4E6C3] hover:bg-[#E4E6C3] hover:text-black",
        danger: "bg-red-700 active:bg-red-600 hover:bg-red-600 hover:text-black"
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<LoginError | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await login(email, password);
            localStorage.setItem('token', response.token);
            setTimeout(() => {
                setIsLoading(false);
                window.location.href = '/';
            }, 3000);
        } catch (error) {
            console.error('Login error:', error);
            const loginError = error as LoginError;
            setError(loginError);
        }
    }

    const retryLogin = () => {
        setError(null);
        handleSubmit(new Event('submit') as unknown as React.FormEvent<HTMLFormElement>);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mockup-window bg-base-100/40 border border-base-100/60">
                <div className="grid place-content-center p-8 w-[400px]">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-[400px]">
                            {error ? (
                                <>
                                    <h1 className="text-2xl text-center font-bold mb-6">Login failed</h1>
                                    <p className="text-center text-sm mb-6">{error?.statusText}</p>
                                    <div className="flex items-center justify-center gap-6">
                                        <Button onClick={() => retryLogin()}>Try again</Button>
                                        <Button onClick={() => setIsLoading(false)} variant="danger">Cancel</Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-2xl text-center font-bold mb-6">Logging in <span className="loading loading-dots loading-xl"></span></h1>
                                    <Button onClick={() => setIsLoading(false)}>Cancel</Button>
                                </>
                            )}
                        </div>
                    ) : (
                        <>
                            <h1 className="text-2xl text-center font-bold mb-6">Login</h1>
                            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 w-full">
                                <label className="floating-label">
                                    <span className="label-text mb-2 text-md">Email</span>
                                    <input
                                        type="text"
                                        placeholder="mail@site.com"
                                        className="input w-64 input-md font-md"
                                        value={email}
                                        autoComplete="email"
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <label className="floating-label">
                                    <span className="label-text mb-2 text-md">Password</span>
                                    <input
                                        type="password"
                                        placeholder="********"
                                        className="input w-64 input-md text-md"
                                        value={password}
                                        autoComplete="current-password"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                                <Button type="submit">Login</Button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}