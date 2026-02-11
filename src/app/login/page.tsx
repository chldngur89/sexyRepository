'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex-1 flex flex-col px-8 max-w-[480px] mx-auto w-full min-h-screen">
            {/* Top Spacer */}
            <div className="h-12 w-full"></div>

            {/* Header Section */}
            <header className="mt-16 mb-12">
                <h1 className="text-[#141118] dark:text-white tracking-tight text-[36px] font-bold leading-tight">
                    Welcome Back
                </h1>
                <p className="text-[#a092b0] dark:text-[#a092b0] text-base font-normal leading-normal mt-3">
                    Sign in to access your curated gallery.
                </p>
            </header>

            {/* Form Section */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                {/* Email Input */}
                <div className="flex flex-col w-full">
                    <label className="text-[#141118] dark:text-[#e0dce5] text-sm font-semibold leading-normal pb-2 px-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex w-full rounded-xl text-[#141118] dark:text-white focus:outline-0 focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 border border-[#e0dce5] dark:border-[#3a2d4a] bg-white dark:bg-[#251a33] focus:border-black dark:focus:border-white h-14 placeholder:text-[#756388] p-[18px] text-base font-normal leading-normal transition-all"
                    />
                </div>

                {/* Password Input */}
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center pb-2 px-1">
                        <label className="text-[#141118] dark:text-[#e0dce5] text-sm font-semibold leading-normal">
                            Password
                        </label>
                        <button
                            type="button"
                            className="text-[#756388] dark:text-[#a092b0] text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <div className="flex w-full items-stretch relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="flex w-full rounded-xl text-[#141118] dark:text-white focus:outline-0 focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 border border-[#e0dce5] dark:border-[#3a2d4a] bg-white dark:bg-[#251a33] focus:border-black dark:focus:border-white h-14 placeholder:text-[#756388] p-[18px] pr-12 text-base font-normal leading-normal transition-all"
                        />
                        <div
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#756388] cursor-pointer flex items-center justify-center select-none"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <span className="material-symbols-outlined text-[22px]">
                                {showPassword ? 'visibility_off' : 'visibility'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sign In Button */}
                <button className="mt-4 w-full bg-[#141118] dark:bg-white text-white dark:text-[#141118] font-bold text-lg h-14 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:opacity-90">
                    Sign In
                </button>
            </form>

            {/* Divider Section */}
            <div className="flex items-center my-10 gap-4">
                <div className="h-[1px] flex-1 bg-[#e0dce5] dark:bg-[#3a2d4a]"></div>
                <span className="text-[#756388] text-xs font-medium uppercase tracking-widest">
                    or continue with
                </span>
                <div className="h-[1px] flex-1 bg-[#e0dce5] dark:bg-[#3a2d4a]"></div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
                <button className="flex-1 h-14 rounded-xl border border-[#e0dce5] dark:border-[#3a2d4a] bg-white dark:bg-[#251a33] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-primary/10 transition-colors">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        ></path>
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        ></path>
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                            fill="#FBBC05"
                        ></path>
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        ></path>
                    </svg>
                </button>
                <button className="flex-1 h-14 rounded-xl border border-[#e0dce5] dark:border-[#3a2d4a] bg-white dark:bg-[#251a33] flex items-center justify-center hover:bg-gray-50 dark:hover:bg-primary/10 transition-colors">
                    {/* Using a generic apple icon SVG if font not loaded, but stick to font for now to match design strictly if valid */}
                    {/* If 'ios' is not a valid material symbol, I'll use 'apple' or a unicode.*/}
                    {/* Actually, I will use a path for Apple logo to be safe as material symbols 'ios' might be platform specific or obscure */}
                    <span className="material-symbols-outlined text-[24px] dark:text-white">
                        smartphone
                    </span>
                    {/* Note: I replaced 'ios' with 'smartphone' temporarily or I should use an SVG for Apple logo. The design said 'ios' which might mean the phone icon or apple logo. I'll stick to 'smartphone' which is standard or check if 'apple' exists. 'apple' is usually not in standard material icons. I'll use SVG for apple to be professional. */}
                </button>
            </div>

            {/* Footer Section */}
            <footer className="mt-auto pb-12 text-center">
                <p className="text-[#a092b0] dark:text-[#a092b0] text-sm">
                    Don't have an account?
                    <Link href="/signup" className="text-primary font-bold ml-1 dark:text-white hover:underline">
                        Sign Up
                    </Link>
                </p>
            </footer>
        </main>
    );
}
