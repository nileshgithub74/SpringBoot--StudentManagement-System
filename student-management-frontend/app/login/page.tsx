"use client";

import { login } from "@/services/authService";
import { getErrorMessage } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            await login({ email, password });
            router.replace("/dashboard");
        } catch (requestError) {
            setError(getErrorMessage(requestError, "Invalid email or password."));
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="grid min-h-screen place-items-center bg-[#f7f8f5] px-5">
            <section className="w-full max-w-md border border-[var(--line)] bg-white p-6 shadow-sm sm:p-9">
                <p className="font-display text-2xl text-[var(--ink)]">Campsly</p>
                <p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-[#2d8269]">
                    Welcome back
                </p>
                <h1 className="mt-2 font-display text-4xl text-[var(--ink)]">
                    Sign in to your workspace
                </h1>
                <p className="mt-2 text-sm text-[var(--muted)]">
                    Use your administrator account to continue.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {error && (
                        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}
                    <label className="field">
                        <span>Email address</span>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="you@campus.edu"
                        />
                    </label>
                    <label className="field">
                        <span>Password</span>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter your password"
                        />
                    </label>
                    <button disabled={loading} className="btn-primary w-full">
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
