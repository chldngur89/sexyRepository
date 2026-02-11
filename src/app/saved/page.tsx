'use client';

import BottomNav from '@/components/layout/BottomNav';
import { useRouter } from 'next/navigation';

export default function SavedPage() {
    const router = useRouter();

    const savedItems = [
        { id: 1, title: 'Mountain Peak', author: 'Alex River', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqs-tf8cyMs0_GwL1KbXPepbCEMMwueJFlgRCdHBprVZKATCwb24oS_rvLqfPAqxXJPdXuH4LxxP__DQQspfRIIbGxDwhaF3owmOdNGE4BweNj7eB4-NpS6mD1S7WNaYsp4onDhZDeqPv3tb2evJYEiVg0mf0Upc86e7NPSN5b7d2iXwHX0ysj3LUrR5E7Vw9BQxzYEBX1y_5LdXFdyNel-kP5-6db9hw3hl07qZbS-vaLVKkmnAJ3aIjV6OW759nkrLSWXy27Uy0' },
        { id: 2, title: 'Forest Light', author: 'Sarah Woods', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq6eMwraQ56SEdW3HtVOBGRIgkG_VNVBjthYxvD0lchz7KtVJUS9VBg6mTacF3wA97nnwBaiDJhh3f9zy7k9kgtlDwZ7xSlvn8vXl7RGUyOt5uRb-AgJ9L9_I3nIfPjn280WMyR8LmV5duFVYrzCHOgmDA4wXV3NY3G0ObG24uYS3NCCmHbvl2BDyAOU15qC3pieow6b5sEMAmUNgMtlwvjeLgnwknVZ9parpD1VOMyLLU5yCghVENWCsckvLchb5lD7SPbriJTG0' },
        { id: 3, title: 'Azure Shore', author: 'Marc Ocean', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqF9vhOtxTCaYSnh7a8DbYD0CRQFTtSP_cBUy-B1KVu0QUIG4sG4FnpbJNknFJgsTzaoiLlBq-XucOQTm8QPIOcqqan344WpBlobDTKxD01PSUtSQzZ49u7XgofVu6NmRnnrHsUcZ9tIsseh4r7iEuqcD3RuEtJ8Rxo9F0elYK7DAKjnyxOjntYFR2-rLVFZievLAGHiTltZwO37qMzXnMLzLedhdfDQNnIZWM3hRZxvrUijuiX9Du0X5OMJeRM41GwbnYhYxI9Lo' },
        { id: 4, title: 'Misty Valley', author: 'Elena Sky', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKRoJu9610C8i8joEreIo4-V1XSp0Wm8fyIwH04JA3aMdNsoOJK7KZdZj-CzvTbyVbOYd8WxeRpP1Fe-cybmg9HjvUfAjJ8gsbZxdBFbgnD_uYfSjUCRQlKRJ6e5NbrM7s-Nc-zKJszks19fBe5tZL_zUhjE0Xv_cw1hy7MvuaOs17q5tPvuY9KsZs8q4hK6Cv0nAbp9krda_1SKPAo3StYyJppSpKrCZl9kGx59Fk-tgphXxSnrOU5iVaGAXrnMjq0roGRZ5I0tI' },
        { id: 5, title: 'The Crossing', author: 'Julian Reed', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZVwwSkWwJ-2zZ1HzkKgZbOeS01MM1wFueCLHB6RxwtuuNXXJ5g4CLo0eADaXqGx_eceU4j935t5ulmf9EOBxUjJKiyuqSKSIuzDG2j9tZGAQYkbSwwWLLBcQZ7yQ1J4H8RyBodZ38gY_d2MMd5sv7FVdcIzCCAARnkukh6thTRjTDZforEsGezeZXM2N5UDwY2QRjDvg2nvl0x7p4Yikv8hFVS_WSN5Mrzzh3mzrTv2MvwnrSHSU9wkRo0GmroOi9Cq9ZViTMfes' },
        { id: 6, title: 'Reflections', author: 'Anna Lake', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7RYmMGj1K6CXuKBi9T2VMCxKGtMF-TifZFq-dMAuY8KfQGEOXpN6NfSeATDrtUYmBR8av9pAWLTQMgXBqz8001iKN2Js6HDI4jpWNKFyLJ41dCrIQkBBrqe1Th8NN4pIt40COEOwNjP1zkDfAGiw9iLAeplqL-ReIxudMpFJ36eRcbLJD9D301oIjgdcYcJkSNOAFoJezMbwkhtO-wcC1POGcV1YCEoHB2z5ShSpel_vmbb6W78fvBADIGnlWdpAzO87O6VkjDKk' },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-background-dark max-w-[480px] mx-auto overflow-x-hidden shadow-2xl pb-24">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-2">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={() => router.back()}
                        className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-[#141118] dark:text-white text-xl font-bold leading-tight tracking-tight">Wishlist</h1>
                    <button className="text-primary text-base font-semibold px-2 py-1">Select</button>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                    <p className="text-[#756388] dark:text-gray-400 text-sm font-medium">{savedItems.length} items saved</p>
                    <div className="flex gap-2">
                        <span className="material-symbols-outlined text-gray-400 text-xl cursor-pointer hover:text-primary transition-colors">grid_view</span>
                        <span className="material-symbols-outlined text-gray-300 text-xl cursor-pointer hover:text-primary transition-colors">view_agenda</span>
                    </div>
                </div>
            </header>

            {/* Main Content: Photo Grid */}
            <main className="flex-1 p-4">
                <div className="grid grid-cols-2 gap-4">
                    {savedItems.map((item) => (
                        <div key={item.id} className="relative group cursor-pointer">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    alt={item.title}
                                    src={item.image}
                                />
                                <button className="absolute top-2 right-2 size-8 flex items-center justify-center bg-white/30 backdrop-blur-md rounded-full text-white hover:bg-white/50 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-xl active-icon">favorite</span>
                                </button>
                            </div>
                            <div className="mt-2">
                                <p className="text-sm font-semibold truncate dark:text-white">{item.title}</p>
                                <p className="text-xs text-[#756388] dark:text-gray-400">by {item.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    );
}
