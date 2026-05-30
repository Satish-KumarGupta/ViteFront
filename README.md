# Frontend Setup (React + Vite)

## Prerequisites

Install:

* Node.js
* npm

Check version:

```bash
node -v
```

```bash
npm -v
```

---

## 1. Go to frontend folder

```bash
cd frontend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Create Environment File

Create a `.env` file in frontend root.

Example:

```env
VITE_API_URL=http://localhost:5000
```

### Important

Environment variables in Vite must start with:

```txt
VITE_
```

Access in React:

```js
import.meta.env.VITE_API_URL
```

Example:

```js
import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL,
});

export default api;
```

---

## 4. Install Required Packages

If not installed already:

```bash
npm install axios react-router-dom react-hot-toast
```

Install Tailwind CSS:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

## 5. Configure Tailwind CSS

### Update `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

### Add Tailwind in `src/index.css`

```css
@import "tailwindcss";
```

### Import CSS in `main.jsx`

```jsx
import "./index.css";
```

---

## 6. Run Frontend

Start development server:

```bash
npm run dev
```

Runs on:

```txt
http://localhost:5173
```

---

## Frontend Features

* User Signup
* User Login
* JWT Authentication
* Protected Purchase Flow
* Product Listing
* Purchase Products
* My Orders
* Tailwind UI
* React Hot Toast Notifications
* Axios API Integration

---

## Folder Structure

```txt
frontend/
│── public/
│── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│── .env
│── package.json
│── vite.config.js
```

---

## Run Full Project

### Backend

```bash
cd backend
npm run dev
```

Backend:

```txt
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm run dev
```

Frontend:

```txt
http://localhost:5173
```
