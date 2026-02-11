# Project TODOs

## 🚀 Setup & Infrastructure
- [ ] **Initialize Project Project**
    - [ ] Initialize Next.js (TypeScript, Tailwind CSS, App Router).
    - [ ] Configure ESLint/Prettier.
    - [ ] Setup folder structure (components, app, lib, types).
- [ ] **Organize Assets**
    - [ ] Move existing HTML design files to `legacy_designs/` folder.
    - [ ] Extract images/assets to `public/` or `assets/` folder.

## 🎨 UI/UX Implementation (Porting)
- [ ] **Design System**
    - [ ] Configure Tailwind theme (colors, fonts, border-radius) to match `login_screen/code.html`.
    - [ ] Setup custom fonts (Inter, Material Symbols).
- [ ] **Authentication**
    - [ ] Implement `LoginPage` (UI only initially).
    - [ ] Add form validation and layout.
- [ ] **Home & Gallery**
    - [ ] Implement `HomePage` / `Gallery` layout.
    - [ ] Create `PhotoCard` component.
    - [ ] Implement Bottom Navigation Bar.
    - [ ] Implement Tab/Category filter bar.
- [ ] **Photo Details**
    - [ ] Implement `PhotoDetailPage`.
    - [ ] Create `DownloadProgress` overlay component.
- [ ] **Search**
    - [ ] Implement `SearchOverlay` component/modal.
- [ ] **User Profile & Wishlist**
    - [ ] Implement `WishlistPage` (Saved items).
    - [ ] Implement `ProfilePage` (`MyPage`).
- [ ] **Payment**
    - [ ] Implement `CheckoutPage` / Payment modal.

## ⚙️ Logic & Integration (Future)
- [ ] Connect Authentication (Supabase/NextAuth).
- [ ] Connect Database/API for dynamic content.
- [ ] Implement actual File Download logic.
- [ ] Stripe/Payment integration.

## 📝 Documentation
- [x] Create README.md.
- [x] Create TODO.md.
