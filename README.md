# Product Page Application

A full-stack web application for managing products with a modern, responsive UI built using React and Chakra UI.

## Features

- View product listings
- Add new products
- Edit existing products
- Delete products
- Responsive design
- Dark/Light mode support
- Real-time updates

## Tech Stack

### Frontend
- React.js
- Vite
- Chakra UI
- Framer Motion
- React DOM
- Next Themes
- Zustand for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Dotenv for environment variables

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd productPage
```

2. Install dependencies for both server and client:
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Application

1. Start the backend server:
```bash
# From the root directory
npm run dev
```

2. Start the frontend development server:
```bash
# From the client directory
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure

```
productPage/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── store/        # State management
│   │   └── ...
│   └── package.json
├── server/                # Backend Node.js/Express application
│   ├── server.js
│   └── ...
├── .env                   # Environment variables
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Light mode
<img width="1374" alt="Screenshot 2025-03-18 at 6 51 32 PM" src="https://github.com/user-attachments/assets/d9a875bb-0b3f-409e-85c9-5363630e1e6c" />

Dark mode
<img width="1261" alt="Screenshot 2025-03-18 at 6 51 39 PM" src="https://github.com/user-attachments/assets/3131da94-c605-4fa3-98ec-bf834c773566" />
Creating a product
<img width="1241" alt="Screenshot 2025-03-18 at 6 52 24 PM" src="https://github.com/user-attachments/assets/466f974f-cfab-48c9-88d4-d23f5c237594" />
<img width="1311" alt="Screenshot 2025-03-18 at 6 52 40 PM" src="https://github.com/user-attachments/assets/8059f28e-0bb0-4b94-836a-3d85110fe176" />
Editing a product
<img width="1361" alt="Screenshot 2025-03-18 at 6 52 48 PM" src="https://github.com/user-attachments/assets/c62da6df-4ed3-4322-9359-249bb471ef9a" />
