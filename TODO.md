# Project TODOs

## ✅ Completed
- [x] **Project Setup**: Initial Next.js structure with Tailwind CSS.
- [x] **UI Implementation**: Ported core designs for Home, Login, and Detail pages.
- [x] **Google Drive Integration**:
    - [x] Backend API to fetch images.
    - [x] Frontend Gallery component.
    - [x] OAuth connection flow for credentials.

## 🚀 Pending Tasks

### 1. User Management (Supabase)
- [ ] **Setup Supabase Project**:
    - [ ] Create a new Supabase project.
    - [ ] Configure Auth providers (Google, Email).
- [ ] **Frontend Integration**:
    - [ ] Install Supabase client libraries.
    - [ ] Replace mock Login page with actual Supabase Auth logic.
    - [ ] Create `AuthContext` to manage user session state.
    - [ ] Implement strict route protection for "My Page" and "Wishlist".

### 2. Database & User Data
- [ ] **Database Schema**:
    - [ ] Design `profiles` table (link to Auth users).
    - [ ] Design `wishlist` table (user_id, image_id, metadata).
    - [ ] Design `downloads` table (track user download history).
- [ ] **Feature Implementation**:
    - [ ] Enable "Save to Wishlist" functionality using Supabase DB.
    - [ ] internal API for syncing downloaded assets.

### 3. Payments (Stripe)
- [ ] **Stripe Setup**:
    - [ ] Create Stripe account and get API keys.
    - [ ] Configure Webhooks for payment events.
- [ ] **Product Setup**:
    - [ ] Define products (Single Download, Pro Subscription) in Stripe Dashboard.
- [ ] **Checkout Integration**:
    - [ ] Implement Stripe Checkout session creation.
    - [ ] Create a "Success" and "Cancel" page for payment redirection.
    - [ ] Create API webhook handler to update user's "Pro" status or unlock downloads upon payment success.

### 4. Advanced Drive Integration
- [ ] **Download Logic**:
    - [ ] Implement secure proxy for downloading full-resolution images (hide direct Drive links).
    - [ ] Add rate limiting to prevent abuse.
- [ ] **Performance**:
    - [ ] Implement caching (Redis or Next.js Cache) for Drive API responses to reduce API quota usage.

### 5. Final Polish
- [ ] **SEO Optimization**: Add metadata to all pages.
- [ ] **Deployment**: Finalize Vercel configuration.
