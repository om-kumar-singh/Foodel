# Go Food - Food Ordering Website

A simple and efficient food ordering website where users can browse menus, add items to their cart, and place orders online.

## Features

- **User Authentication**: Secure login and registration for users
- **Browse Menus**: Display of available dishes categorized by cuisine type
- **Cart Management**: Add, update, and remove items from the shopping cart
- **Checkout Process**: Secure and streamlined checkout for placing orders
- **Order History**: Users can view their past orders

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Heroku, Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/go-food.git
   cd go-food
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5000`

## Usage

- **Register/Login**: Create an account or log in using your credentials
- **Browse**: Navigate through the menu items and select dishes you wish to order
- **Cart**: Add items to your cart, update quantities, or remove items
- **Order**: Proceed to checkout, enter payment details, and place your order
- **Order History**: View your past orders under the "My Orders" section

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get specific menu item

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get specific order

## Environment Variables

Create a `.env` file in the root directory:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYMENT_GATEWAY_KEY=your_payment_key
```

## Project Structure

```
foodel/
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/YourFeature`
6. Open a pull request

## Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Deployment

### Using Heroku
1. Install Heroku CLI
2. Create a new Heroku app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set NODE_ENV=production`
4. Deploy: `git push heroku main`

### Using Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [omkumarsingh2004@gmail.com](mailto:omkumarsingh2004@gmail.com).

---

**Developed by Om Kumar**