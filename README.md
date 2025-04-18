# 🎮 The Movie App

The Movie App is a simple web application that allows users to browse and search for movies using data from a movie API (e.g., TMDB). Users can view trending movies, search for titles, and get detailed movie information.

## 🚀 Features

- Browse trending movies
- Search for specific movie titles
- View detailed information for each movie
- Responsive design

## 🔐 Environment Setup

This project uses an API key stored securely in an `.env` file to connect to the movie API (e.g., [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)).

### Example `.env` file

Create a `.env` file in the root directory of your project and add the following:

```env
VITE_API_KEY=your_api_key_here
```

> ⚠️ **Important:** Never expose your API key publicly or commit your `.env` file to version control.

## 💠 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Shakya77/The-Movie-.git
cd The-Movie-
```

2. Install dependencies:

```bash
npm install
```

3. Add your API key to a `.env` file as shown above.

4. Start the development server:

```bash
npm run dev
```

The app should now be running at `http://localhost:5173` (or a different port if configured).

## 📂 Project Structure

```
The-Movie-/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── .env
├── package.json
└── vite.config.js
```

## 📄 License

This project is open-source

---

Made with ❤️ by [Bijan Shakya](https://github.com/Shakya77)
