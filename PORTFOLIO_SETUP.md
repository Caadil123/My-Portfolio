# Portfolio Setup Instructions

## ✅ What's Already Done

Your portfolio is fully set up with:
- ✅ React.js with Vite
- ✅ Tailwind CSS configured
- ✅ Beautiful UI components
- ✅ CV download functionality
- ✅ GitHub projects integration (Top 5 projects)
- ✅ Live demo links support
- ✅ Responsive design
- ✅ Smooth animations

## 🚀 Quick Start

1. **Install dependencies** (already done):
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to the URL shown (usually `http://localhost:5173`)

## 📝 Customization Steps

### 1. Add Your CV
- Place your CV PDF file in the `public` folder
- Name it `cv.pdf` (or update the filename in `src/App.jsx` line 11)
- Update the download filename in `src/App.jsx` line 12

### 2. Update GitHub Username
- Open `src/components/Projects.jsx`
- Find line 6: `const { repos, loading, error } = useGitHubRepos('your-github-username');`
- Replace `'your-github-username'` with your actual GitHub username

### 3. Update Personal Information

**Hero Section** (`src/components/Hero.jsx`):
- Line 7: Change initials "JD" to your initials
- Line 9: Change "John Doe" to your name
- Line 12: Update your title/role
- Line 15: Update your bio
- Lines 25-42: Update social media links (GitHub, LinkedIn, Email)

**About Section** (`src/components/About.jsx`):
- Lines 4-6: Update skills array with your actual skills
- Line 13: Update the about me description

**Contact Section** (`src/components/Contact.jsx`):
- Line 30: Update email address
- Line 40: Update phone number
- Line 50: Update location

**Footer** (`src/components/Footer.jsx`):
- Line 7: Update copyright name
- Lines 13-27: Update social media links

### 4. Add Live Demo Links to GitHub Projects
To show live demos for your GitHub projects:
1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Enable GitHub Pages and set it up
5. The live demo link will automatically appear if the `homepage` field is set in your repo

Alternatively, you can manually add projects in `Projects.jsx` by modifying the component.

## 🎨 Customize Colors

Edit `tailwind.config.js` to change the color scheme:
- Primary colors are defined in the `colors.primary` section
- Current primary color: Sky blue (#0ea5e9)

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deploy

You can deploy to:
- **Vercel**: `npm run build` then drag `dist` folder to Vercel
- **Netlify**: Connect your GitHub repo or drag `dist` folder
- **GitHub Pages**: Use the `dist` folder contents

## 📚 Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Smooth Scrolling**: Navigation smoothly scrolls to sections
- **CV Download**: One-click CV download button
- **GitHub Integration**: Automatically fetches your top 5 projects
- **Live Demos**: Shows live demo links when available
- **Modern UI**: Beautiful, clean design with Tailwind CSS
- **Animations**: Smooth hover effects and transitions

## 🐛 Troubleshooting

**Projects not showing?**
- Make sure you've updated your GitHub username in `Projects.jsx`
- Check that your GitHub profile is public
- Verify your repositories are public

**CV not downloading?**
- Make sure `cv.pdf` exists in the `public` folder
- Check the filename matches in `App.jsx`

**Styles not working?**
- Make sure Tailwind CSS is properly installed: `npm install --legacy-peer-deps`
- Restart the dev server after installing dependencies

## 📞 Need Help?

Check the component files for comments explaining each section. All components are well-structured and easy to customize!

