# draw-n-grow

  draw-n-grow is an interactive e-learning platform designed to help children develop their artistic skills through structured drawing courses, video lessons, and personalized feedback.

## Features

- **Progressive Learning Path**: Structured courses from beginner to advanced levels
- **Interactive Video Lessons**: High-quality video tutorials for each drawing lesson
- **Drawing Submissions**: Students can submit their artwork for review
- **Progress Tracking**: Track completion status and achievements
- **Badge System**: Earn badges for completing courses and milestones
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React.js
- React Router for navigation
- React Bootstrap for UI components
- Supabase for backend and authentication
- Font Awesome for icons
- Styled Components for custom styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/artsy-sprouts.git
cd artsy-sprouts
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

```
artsy-sprouts/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   └── assets/        # Images, fonts, etc.
├── public/            # Static files
└── package.json       # Project dependencies
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Features in Detail

### User Authentication
- Email/password registration and login
- Protected routes for authenticated users
- User profile management

### Course System
- Multiple difficulty levels
- Progress tracking per course
- Video lessons with drawing instructions
- Drawing submission and review system

### Achievement System
- Badge rewards for course completion
- Progress tracking and visualization
- Achievement showcase on user dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.


