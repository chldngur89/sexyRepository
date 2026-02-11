# Stitch (Antigravity) Photo Gallery

## Project Overview
Stitch is a premium photo gallery application that serves as a curated digital exhibition space. The platform is designed to provide high-quality visual content sourced directly from **Google Drive**, offering users a seamless experience to discover and download exclusive imagery.

## 🏗 Technical Architecture

### 1. Content Delivery (Google Drive Integration)
*   **Source**: All images are dynamically fetched from a designated **Google Drive Folder**.
*   **Mechanism**: The app uses the Google Drive API to retrieve image metadata and thumbnails in real-time, ensuring that the gallery is always up-to-date without manual website deployments.
*   **Performance**: Images are optimized for web display, providing a smooth browsing experience even with high-resolution assets.

### 2. User Management (Supabase Auth)
*   **Authentication**: Secure user authentication is handled by **Supabase**.
*   **Features**:
    *   Social Login (Google, Apple).
    *   Email/Password Sign-up.
    *   User Profile Management.
*   **Data Security**: User data is safely stored and managed within the Supabase ecosystem.

### 3. Payments & Monetization (Stripe)
*   **Payment Processor**: **Stripe** is integrated to handle all financial transactions.
*   **Business Model**:
    *   **Premium Downloads**: Users pay to download high-resolution versions of specific images.
    *   **Pro Subscription**: A subscription tier for unlimited access or exclusive content.
*   **Security**: All payment information is processed securely through Stripe's PCI-compliant infrastructure.

## 🚀 Key Features
*   **Live Gallery**: Changes in Google Drive are instantly reflected in the app.
*   **Modern UI/UX**: A dark-mode first, sleek interface inspired by high-end design portfolios.
*   **Wishlist**: Users can save their favorite images for later.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
