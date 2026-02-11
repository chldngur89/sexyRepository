'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PhotoDetailPage({ params }: { params: { id: string } }) {
    const router = useRouter();

    return (
        <div className="relative mx-auto flex h-full min-h-screen max-w-[480px] flex-col overflow-x-hidden bg-white dark:bg-background-dark">
            {/* Transparent Top Bar Overlay */}
            <header className="absolute top-0 z-10 flex w-full items-center justify-between p-4 bg-gradient-to-b from-black/40 to-transparent">
                <button
                    onClick={() => router.back()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors hover:bg-white/30">
                    <span className="material-symbols-outlined">share</span>
                </button>
            </header>

            {/* Main Photo Section */}
            <main className="flex flex-col">
                <div className="aspect-[4/5] w-full overflow-hidden">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        role="img"
                        aria-label="Stunning mountain landscape with orange sunset glow"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9kOefANXrJZ4Rc-WSXNojSSpEOel-zCVcOz5WDH6auu9ruDaxMn3n0Edf5a0TiKj3_zas1xAr-jwS2FaGKVS413J0xOsTKgKFlXNW2kssF-4wdVqUol4lv-l9O_CwkOGVuFec71H12COqzPhCV2okg-ZH5TIV-fMZvpI6hyUf_d4o8dgOAFEoRlvyfH1zB97HdkLMqxdLuNebGvhbAcLIqFcdv-UM9i0cKNKl8tKtRPMifV2nlS8dKTxSm41DrJRdlYpzjB8hjeY")' }}
                    >
                    </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col gap-6 p-6">
                    {/* Title and Photographer */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div
                                className="h-14 w-14 shrink-0 rounded-full bg-cover bg-center border-2 border-primary/10"
                                role="img"
                                aria-label="Professional photographer portrait avatar"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5QSWd5kUblzgf_a97skP-Rs4fFL_VzgoHKvWyu0P0Z99jDLuBZARi93owC9FyW2vRvDUbAbF5DXFfKL36xYxq7yzycSgLfkTjfapkFB1Qcxi--PvhLGTgm_Ski1DKO2_X0t-vOFwnJfRaYuiTkEsJq2AOqa0e9KLImszfbEWuUN5CRlFqPWGOQSASjjUoQfKXAQLIidQMyjt4lJnyXjP9KtrN_KXfbiidXBdMX1nRM_2BJsGJyPuzL4GmEZYq_7-Bu_IFbja2oFc")' }}
                            >
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold tracking-tight text-[#141118] dark:text-white leading-tight">Sunset over the Dolomites</h1>
                                <p className="text-sm font-medium text-[#756388] dark:text-[#a394b3]">@marcus_v</p>
                            </div>
                        </div>
                        <button className="rounded-xl bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:text-primary">
                            Follow
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="flex gap-4">
                        <div className="flex flex-1 flex-col items-start gap-1 rounded-2xl border border-[#e0dce5] p-4 dark:border-white/10 dark:bg-white/5">
                            <span className="material-symbols-outlined text-primary mb-1">visibility</span>
                            <p className="text-xs font-medium text-[#756388] dark:text-[#a394b3]">Views</p>
                            <p className="text-lg font-bold text-[#141118] dark:text-white">12.4k</p>
                        </div>
                        <div className="flex flex-1 flex-col items-start gap-1 rounded-2xl border border-[#e0dce5] p-4 dark:border-white/10 dark:bg-white/5">
                            <span className="material-symbols-outlined text-primary mb-1">favorite</span>
                            <p className="text-xs font-medium text-[#756388] dark:text-[#a394b3]">Likes</p>
                            <p className="text-lg font-bold text-[#141118] dark:text-white">1.2k</p>
                        </div>
                        <div className="flex flex-1 flex-col items-start gap-1 rounded-2xl border border-[#e0dce5] p-4 dark:border-white/10 dark:bg-white/5">
                            <span className="material-symbols-outlined text-primary mb-1">download</span>
                            <p className="text-xs font-medium text-[#756388] dark:text-[#a394b3]">Saved</p>
                            <p className="text-lg font-bold text-[#141118] dark:text-white">450</p>
                        </div>
                    </div>

                    {/* Description/Tags Placeholder */}
                    <div className="flex flex-wrap gap-2">
                        {['Nature', 'Mountains', 'Italy', 'Landscape'].map((tag) => (
                            <span key={tag} className="rounded-full bg-background-light px-3 py-1 text-xs font-medium text-[#756388] dark:bg-white/10 dark:text-[#a394b3]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </main>

            {/* Fixed Footer Actions */}
            <footer className="sticky bottom-0 mt-auto flex items-center gap-4 bg-white/80 p-6 backdrop-blur-xl dark:bg-background-dark/80">
                <button className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95">
                    <span className="material-symbols-outlined">download</span>
                    Download Image
                </button>
                <button className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-primary text-primary transition-colors hover:bg-primary/5 active:scale-95">
                    <span className="material-symbols-outlined font-variation-settings-fill">favorite</span>
                </button>
            </footer>

            {/* iPhone Notch/Safe Area Spacer */}
            <div className="h-8 w-full bg-white dark:bg-background-dark"></div>
        </div>
    );
}
