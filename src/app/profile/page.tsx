'use client';

import BottomNav from '@/components/layout/BottomNav';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const router = useRouter();

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark max-w-[480px] mx-auto overflow-x-hidden pb-24 font-sans text-[#141118] dark:text-white">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-10 flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
                <button
                    onClick={() => router.back()}
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl hover:bg-gray-50 dark:hover:bg-primary/5 transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Profile</h2>
                <div className="flex w-12 items-center justify-end">
                    <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 w-10 bg-transparent text-primary hover:bg-primary/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl">settings</span>
                    </button>
                </div>
            </header>

            {/* Profile Header Section */}
            <main className="flex-1 overflow-y-auto">
                <div className="flex p-6 flex-col items-center bg-white dark:bg-background-dark">
                    <div className="relative group">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 ring-4 ring-primary/10 shadow-lg"
                            role="img"
                            aria-label="Close-up portrait of a professional female photographer"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDuhd_VQlCYP-ZREyAN8f6ytSR6bAIuwRjYU9_nQnZm37Fd4M2jQCUWDOj2DExtypfYDpaOW3-8V2BDAipIEZq_BNYXrwgCkQJt02cccUSWl8khLJjFNLX708WzHoP3U2GFIWqMH-alSVnZ_w_Cej4V75MaAfW5YyaVhjXfyZojrdvP0SkXiWuhO2d8MPdrTHqV984fhX6LtC7QrUq1JJg7S4f4ea7VLyzP3z6ygV43BQXen32c4k-N2WQ7XrAMLI8f5ovi796otk")' }}
                        >
                        </div>
                        <button className="absolute bottom-1 right-1 bg-primary text-white dark:text-black p-2 rounded-full shadow-md border-2 border-white dark:border-background-dark flex items-center justify-center hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                    </div>
                    <div className="mt-4 flex flex-col items-center text-center">
                        <p className="text-[24px] font-bold leading-tight tracking-tight">Alex Rivers</p>
                        <p className="text-primary font-medium text-sm mt-1">Premium Member</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">San Francisco, CA</p>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="flex flex-wrap gap-4 px-6 py-6 bg-white dark:bg-background-dark">
                    {[
                        { label: 'Views', value: '1.2k' },
                        { label: 'Galleries', value: '48' },
                        { label: 'Followers', value: '250' }
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-1 flex-col gap-1 rounded-xl bg-background-light dark:bg-primary/10 p-4 items-center text-center shadow-sm">
                            <p className="text-xl font-bold leading-tight">{stat.value}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Menu Sections */}
                <div className="mt-2 space-y-6 pb-8">
                    {/* Account Section */}
                    <section>
                        <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest px-6 pb-2">Account</h3>
                        <div className="bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800 divide-y divide-gray-50 dark:divide-gray-800">
                            {[
                                { icon: 'person', label: 'Personal Information' },
                                { icon: 'verified_user', label: 'Login & Security' },
                                { icon: 'credit_card', label: 'Subscription & Payments' }
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4 px-6 min-h-[56px] hover:bg-gray-50 dark:hover:bg-primary/5 cursor-pointer transition-colors group">
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">{item.icon}</span>
                                    <p className="text-base font-medium flex-1">{item.label}</p>
                                    <span className="material-symbols-outlined text-gray-300 text-xl">chevron_right</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Preferences Section */}
                    <section>
                        <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest px-6 pb-2">Preferences</h3>
                        <div className="bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800 divide-y divide-gray-50 dark:divide-gray-800">
                            <div className="flex items-center gap-4 px-6 min-h-[56px] hover:bg-gray-50 dark:hover:bg-primary/5 cursor-pointer transition-colors group">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">palette</span>
                                <p className="text-base font-medium flex-1">Display Mode</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400 font-medium">System Default</span>
                                    <span className="material-symbols-outlined text-gray-300 text-xl">chevron_right</span>
                                </div>
                            </div>
                            {[
                                { icon: 'notifications_active', label: 'Notifications' },
                                { icon: 'language', label: 'App Language' }
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4 px-6 min-h-[56px] hover:bg-gray-50 dark:hover:bg-primary/5 cursor-pointer transition-colors group">
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">{item.icon}</span>
                                    <p className="text-base font-medium flex-1">{item.label}</p>
                                    <span className="material-symbols-outlined text-gray-300 text-xl">chevron_right</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Support Section */}
                    <section>
                        <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest px-6 pb-2">Support</h3>
                        <div className="bg-white dark:bg-background-dark border-y border-gray-100 dark:border-gray-800 divide-y divide-gray-50 dark:divide-gray-800">
                            {[
                                { icon: 'help_outline', label: 'Help Center' },
                                { icon: 'description', label: 'Privacy Policy' }
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-4 px-6 min-h-[56px] hover:bg-gray-50 dark:hover:bg-primary/5 cursor-pointer transition-colors group">
                                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">{item.icon}</span>
                                    <p className="text-base font-medium flex-1">{item.label}</p>
                                    <span className="material-symbols-outlined text-gray-300 text-xl">chevron_right</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Logout Button */}
                    <div className="px-6 pt-4">
                        <button className="w-full flex items-center justify-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 py-4 rounded-xl font-bold tracking-tight hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors active:scale-[0.98]">
                            <span className="material-symbols-outlined">logout</span>
                            Log Out
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-6 pb-4">Version 2.4.0 (2023)</p>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    );
}
