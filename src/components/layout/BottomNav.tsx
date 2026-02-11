'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 dark:bg-[#191121]/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/5 px-8 pt-4 pb-8 flex justify-between items-center z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
            <Link href="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'} transition-colors`}>
                <span className={`material-symbols-outlined text-[28px] ${isActive('/') ? 'active-icon' : ''}`}>home</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest">Home</span>
            </Link>

            <Link href="/search" className={`flex flex-col items-center gap-1 ${isActive('/search') ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'} transition-colors`}>
                <span className={`material-symbols-outlined text-[28px] ${isActive('/search') ? 'active-icon' : ''}`}>explore</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest">Discover</span>
            </Link>

            <Link href="/saved" className={`flex flex-col items-center gap-1 ${isActive('/saved') ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'} transition-colors`}>
                <span className={`material-symbols-outlined text-[28px] ${isActive('/saved') ? 'active-icon' : ''}`}>favorite</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest">Saved</span>
            </Link>

            <Link href="/profile" className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white'} transition-colors`}>
                <span className={`material-symbols-outlined text-[28px] ${isActive('/profile') ? 'active-icon' : ''}`}>person</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest">Profile</span>
            </Link>
        </nav>
    );
}
