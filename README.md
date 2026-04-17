# 🚀 GitHub Profile Finder

A React-based web application that allows users to:

* 🔍 Search GitHub users by username
* 🔄 Generate random GitHub profiles
* 🔢 Control number of profiles displayed
* 🧑 View profile details with clickable cards

---

## 🛠️ Tech Stack

* **React.js** (Hooks: useState, useEffect)
* **Tailwind CSS** (for styling)
* **GitHub REST API**

---

## ✨ Features

### 🔍 Search by Username

* Search any GitHub user using the search bar
* Uses GitHub Search API

### 🔄 Random Users

* Fetch random GitHub profiles
* Helps explore different users

### 🔢 Number of Profiles

* Control how many profiles to display
* Dynamic API request based on user input

### 🧑 Clickable Cards

* Each card shows:

  * Profile image
  * Username
  * Profile link
* Click opens GitHub profile in new tab

---

## 📡 API Used

### Get Random Users

```
https://api.github.com/users?since={random}&per_page={count}
```

### Search Users

```
https://api.github.com/search/users?q={username}&per_page={count}
```

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── Body.jsx
 │   └── Card.jsx
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/github-profile-finder.git
```

2. Navigate to project folder

```
cd github-profile-finder
```

3. Install dependencies

```
npm install
```

4. Run the app

```
npm run dev
```

---

## 🧠 What I Learned

* Working with APIs in React
* Handling asynchronous data using `fetch`
* Using `useEffect` for lifecycle management
* Managing state with `useState`
* Component-based architecture
* Tailwind CSS for rapid UI development

---

## 🚀 Future Improvements

* ⏳ Add loading spinner
* ❌ Handle API errors
* 📄 Show full profile details inside app
* ⭐ Display repositories and followers
* 🌙 Dark mode support

---



## 🤝 Contributing

Feel free to fork this repo and contribute.


