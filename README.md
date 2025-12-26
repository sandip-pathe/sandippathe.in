# 🚀 Sandip Pathe - Personal Portfolio & Essays

AI Engineer & Founder building durable AI workflows for legal tech, research platforms, and healthcare. This is my personal website featuring my work, essays on AI automation systems, and professional profile.

## 🔗 Live Site
👉 [sandippathe.in](https://sandippathe.in)

## ✨ Features
- **Server-Side Rendered** - Optimized for SEO and performance
- **Dynamic Essay Platform** - Write and publish essays with a password-protected editor
- **Dark Mode** - Respects system preferences with manual toggle
- **Fully Responsive** - Mobile-first design with Tailwind CSS
- **Firebase Integration** - Real-time essay storage and retrieval
- **Dynamic Sitemap** - Automatically updates for search engines when new content is added

## 🛠 Tech Stack
- **Framework:** Next.js 15.2.3 (App Router with SSR)
- **Styling:** Tailwind CSS with dark mode support
- **Database:** Firebase Firestore
- **Hosting:** Vercel
- **Fonts:** Inter & Montserrat (Google Fonts)
- **Icons:** Lucide React

## 📂 Project Structure
```
/public/          # Static assets (images, favicons, OG images)
/src
 ├── app/         # Next.js App Router
 │   ├── essays/  # Essay listing & editor (password: sandip2025)
 │   ├── work/    # Portfolio/projects showcase
 │   ├── faq/     # FAQ page
 │   └── sitemap.ts  # Dynamic sitemap generation
 ├── components/  # Reusable UI components
 ├── data/        # Static JSON data (about, skills, projects)
 └── helper/      # Firebase config & utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Firebase project set up (for essay functionality)

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sandip-pathe/sandippathe.in.git
cd sandippathe.in
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Environment Setup
Update Firebase configuration in `src/helper/firebase.ts` with your credentials.

### 4️⃣ Run Development Server
```sh
npm run dev
```
The site will be available at: `http://localhost:3000`

### 5️⃣ Build for Production
```sh
npm run build
```

## 📝 Essay Editor
Access the password-protected essay editor at `/essays/editor` (password: `sandip2025`). Essays are stored in Firebase Firestore and appear immediately on the site.

## 🎨 Key Features

### SEO Optimized
- Server-side rendering for all pages
- Dynamic sitemap generation from Firebase
- Comprehensive meta tags and Open Graph images
- JSON-LD structured data

### Dark Mode
- Automatic detection of system theme preference
- Manual toggle with localStorage persistence
- CSS variables for consistent theming

### Performance
- Static generation where possible
- Optimized images and fonts
- Minimal client-side JavaScript

## 📬 Contact
📧 Email: [sandippathe9689@gmail.com](mailto:sandippathe9689@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/sandippathe](https://linkedin.com/in/sandippathe)  
🐦 Twitter: [@sandippathe](https://twitter.com/sandippathe)

## 📄 License
This project is open source and available under the MIT License.

---

Built with ❤️ by Sandip Pathe in Mumbai, India

---

### 🎉 Thank You for Visiting!
Hope you like my portfolio. If you do, consider giving the repo a ⭐ on GitHub!

