# 💱 Currency Converter

A fast and responsive **Currency Converter** web app built with **React + Vite** and styled with **Tailwind CSS**. It fetches real-time exchange rates from a public API and supports swapping currencies with a single click.

---

## 🚀 Features

- 🌍 **Real-time exchange rates** powered by the [fawazahmed0 Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/)
- 🔄 **Swap currencies** instantly between "From" and "To"
- 💡 **Custom React Hook** (`useCurrencyInfo`) for clean data fetching
- 🎨 **Glassmorphism UI** with a beautiful background
- ⚡ Built with **Vite** for lightning-fast development

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite 8 | Build Tool & Dev Server |
| Tailwind CSS | Styling |
| fawazahmed0 Currency API | Live Exchange Rates |

---

## 📁 Project Structure

```
CurrencyConvertor/
├── public/
├── src/
│   ├── components/
│   │   └── INPUT.jsx       # Reusable InputBox component
│   ├── hooks/
│   │   └── useCurrencyInfo.js  # Custom hook for fetching rates
│   ├── App.jsx             # Main application component
│   └── main.jsx            # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manthansharma6767/CurrencyConvertor.git
   cd CurrencyConvertor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

---

## 🌐 API Reference

This project uses the free [fawazahmed0 Currency API](https://github.com/fawazahmed0/exchange-api):

```
GET https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Made with ❤️ by [Manthan Sharma](https://github.com/manthansharma6767)
