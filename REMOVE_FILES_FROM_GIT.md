# Remove CV and .txt Files from GitHub

## ✅ Step 1: .gitignore Updated

I've already updated your `.gitignore` file to exclude:
- All `.pdf` files (including your CV)
- All `.txt` files (except documentation files like README.md, etc.)

## Step 2: Remove Files from Git Tracking

Since you've already pushed these files to GitHub, you need to remove them from git tracking (but keep them locally).

### Option A: Remove Specific Files (Recommended)

Run these commands in your terminal from the project root:

```bash
# Navigate to your project root
cd "C:\Users\pc\Desktop\My Portfolia"

# Remove CV from git tracking (keeps file locally)
git rm --cached myapp/public/Abdirahim_Omar_Hassan_Freelance_Software_Developer_CV.pdf

# Remove .txt files from git tracking (keeps files locally)
git rm --cached myapp/public/CV_INSTRUCTIONS.txt

# Commit the removal
git commit -m "Remove CV and instruction files from repository"

# Push to GitHub
git push
```

### Option B: Remove All PDF and TXT Files

If you have multiple PDF/TXT files:

```bash
# Remove all PDF files from git tracking
git rm --cached myapp/public/*.pdf

# Remove all TXT files from git tracking (except documentation)
git rm --cached myapp/public/*.txt

# Commit and push
git commit -m "Remove personal files from repository"
git push
```

## Step 3: Verify

After pushing, check your GitHub repository - the CV and .txt files should no longer be visible, but they'll still exist on your local computer.

## Important Notes:

- ✅ Files will remain on your local computer
- ✅ Files will be removed from GitHub
- ✅ Future commits won't include these files (thanks to .gitignore)
- ⚠️ If others have cloned your repo, they'll need to manually add the CV file

## Alternative: Keep CV but Make it Private

If you want to keep the CV in the repo but make it less obvious, you could:
1. Rename it to something generic like `resume.pdf`
2. Or move it to a different location

But the best practice is to exclude it from git entirely (as we've done above).

