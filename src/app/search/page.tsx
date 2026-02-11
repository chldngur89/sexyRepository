'use client';

import { useRouter } from 'next/navigation';

export default function SearchPage() {
    const router = useRouter();

    return (
        <div className="relative flex h-screen w-full flex-col bg-[#f7f6f8]/95 dark:bg-[#191121]/95 backdrop-blur-[20px] overflow-hidden max-w-[480px] mx-auto">
            {/* Search Header */}
            <div className="flex items-center px-4 pt-6 pb-2 gap-4">
                <div className="flex-1">
                    <label className="flex items-center w-full h-11 bg-white dark:bg-white/10 rounded-xl px-3 border border-black/5 dark:border-white/5 shadow-sm">
                        <span className="material-symbols-outlined text-zinc-400 mr-2 text-[20px]">search</span>
                        <input
                            autoFocus
                            className="w-full bg-transparent border-none focus:ring-0 text-sm font-normal text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none"
                            placeholder="Search photos..."
                            type="text"
                        />
                    </label>
                </div>
                <button
                    onClick={() => router.back()}
                    className="text-primary font-semibold text-[15px] shrink-0 active:opacity-60 transition-opacity"
                >
                    Cancel
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto px-4 pt-6 no-scrollbar">
                {/* Recent Searches Section */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Recent Searches</h3>
                        <button className="text-xs font-semibold text-primary/80">Clear All</button>
                    </div>
                    <div className="space-y-1">
                        {[
                            { text: "Summer 2023", icon: "history" },
                            { text: "Mountain peaks", icon: "history" },
                            { text: "Modern Architecture", icon: "history" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-3 group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-zinc-400 text-[20px]">{item.icon}</span>
                                    <p className="text-[15px] text-zinc-800 dark:text-zinc-200">{item.text}</p>
                                </div>
                                <button className="material-symbols-outlined text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 text-[18px]">close</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trending Tags Section */}
                <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">Trending Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {['#Landscape', '#Portrait', '#StreetPhotography', '#Wildlife', '#Minimal', '#Cinematic', '#BlackAndWhite'].map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-white dark:bg-white/10 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium border border-black/5 dark:border-white/5 cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Discover Section */}
                <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">Popular Collections</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBc-nCC2Rc8gDm7QSzqqhBf0rxJVc9u9TS-PRGFNnkLF--Ts1sMtMBW5mTPKN_IRZxEV4yGhE4BvgJ13hbq-G2y18Kq4rMU9gLJS8PrWLzyhMOllyF7a-vt0Wzrs69ZbOvHaa5TuS8mieK_JgRa_Cc1z1ne9m5wu1NVqqMqxgyc448v2ZQSx-Bi-fEuE8zWz0OLot_yb6R1pjp-PYa3NrUEwDxJgdjrYH_bsI4b2C7ZfTmggaD1RXzZhsXr8LcK7RDtfSIYra_Q2Rs')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <p className="absolute bottom-2 left-3 text-white text-sm font-semibold">National Parks</p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC77JaExkZMDeOxyAeLe-uLSQDSv9vWBCMISTrsflY1l12NWrLSfPbWz2uIA1DGuLhNwWSoByCG93rYGq171CRXqp8QTZvLSkXBVhVWBE8jSBWX76BzMCx15fonWAhevnL3f8esb-j9lWfVqD1C1x6sX-FjlHYmOgv9E5ik3Hv3RG2dwrkFDGARnEGHeUBRKCFAoTS8wsFj0CCfvlOYjpdjCzyUAAqeCdngL1tiwb1qu6d36BHIC-HBft8wCE06sdBgJGdRKOByi2Q')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <p className="absolute bottom-2 left-3 text-white text-sm font-semibold">City Escapes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Search Tips */}
            <div className="px-4 py-6 border-t border-black/5 dark:border-white/5 bg-[#f7f6f8]/50 dark:bg-[#191121]/50">
                <div className="flex items-start gap-3 bg-primary/10 rounded-xl p-4">
                    <span className="material-symbols-outlined text-primary text-[22px]">lightbulb</span>
                    <div>
                        <p className="text-sm font-semibold text-primary">Pro Tip</p>
                        <p className="text-xs text-primary/80 mt-1">Try searching by camera model like "Leica" or colors like "Neon Blue".</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
