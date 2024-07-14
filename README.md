# GEN-Z Book Club Platform

Welcome to the GEN-Z Book Club Platform, a vibrant online space where book lovers from the Gen-Z community can connect, discuss, and explore their favorite books. This platform offers a variety of features to enhance your reading experience and foster a sense of community among readers.

## Table of Contents
Features
Technologies Used
Getting Started
Usage
Contributing
License

## Features
- **User-Friendly Interface**: Clean and intuitive design with responsive layouts for both desktop and mobile.
- **User Accounts**: Secure authentication, profile management, and personalized reading preferences.
- **Book Clubs**: Create, join, and manage book clubs with customizable settings.
- **Discussion Forums**: Interactive forums for book discussions with moderation tools.
- **Blog**: Share articles, reviews, and reading-related content with engagement features.
- **Reading Lists**: Personal reading lists, book recommendations, and reading progress tracking.
- **Privacy and Security**: Robust security measures to protect user data and ensure a safe community.

## Technologies Used
- **Frontend**: React, React Router, Styled-components
- **Backend**: Flask, Flask-RESTful, Flask-CORS, Flask-Migrate
- **Database**: SQLAlchemy
- **Other Tools**: Git, GitHub, VS Code, Postman

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Python**: Make sure you have Python installed. You can download it from [here](https://www.python.org/downloads/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lilymueni/online-book-club-platform.git 
   cd online-book-club-platform
   ```

2. **Install frontend dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../server
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the backend server**:
   ```bash
   cd server
   python app.py
   ```

2. **Start the frontend development server**:
   ```bash
   cd ../client
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

### Navigating the Platform
- **Sign Up/Log In**: Create an account or log in to access the full features of the platform.
- **Explore Book Clubs**: Browse existing book clubs or create a new one.
- **Participate in Discussions**: Engage in book discussions within your book clubs.
- **Read and Share Blog Posts**: Access articles and reviews, and contribute your own content.
- **Manage Reading Lists**: Keep track of your reading progress and get book recommendations.

## Contributing

We welcome contributions from the community! To contribute, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m 'Add some feature'
   ```
5. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a pull request**.

Please make sure your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.