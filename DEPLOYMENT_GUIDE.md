# GitHub Deployment Guide

Since `gh` CLI is not available, please follow these manual steps to push your prototype to GitHub.

## 1. Create a New Repository on GitHub
1. Go to [GitHub - Create a new repository](https://github.com/new).
2. Enter a **Repository name** (e.g., `comma-prototype`).
3. Choose **Public** or **Private** visibility.
4. **Do not** initialize with README, .gitignore, or License (we already have them).
5. Click **Create repository**.

## 2. Push Local Code
Copy the URL of your new repository (it looks like `https://github.com/StartItUp/comma-prototype.git`).

Run the following commands in your terminal (replace `YOUR_REPO_URL` with the actual URL):

```bash
git remote add origin YOUR_REPO_URL
git branch -M main
git push -u origin main
```

## 3. Verification
Refresh your GitHub repository page to see your files.
