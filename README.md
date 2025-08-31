# NHRCCB Website - National Human Rights and Crime Control Bureau

A full-stack web application replicating the official NHRCCB website with modern React frontend and Node.js/Express backend.

## Project Structure

```
project_2/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/          # Page components
│   │   └── styles/         # CSS stylesheets
│   └── package.json
├── backend/                 # Node.js/Express backend API
│   ├── routes/             # API route handlers
│   ├── uploads/            # File upload directory
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## Features

### Frontend Features
- **Responsive Design**: Mobile-first responsive layout
- **Modern UI**: Clean and professional interface matching the original website
- **Navigation Menu**: Complete menu structure with dropdowns
- **Hero Slider**: Image carousel with multiple slides
- **Latest Updates**: Scrolling ticker with recent news
- **About Section**: Organization information and mission
- **President Section**: Message from National President
- **Statistics**: Key organizational metrics
- **Gallery Sections**: Photo, video, and print media galleries
- **Contact Form**: Functional contact form with validation
- **Footer**: Comprehensive footer with links and contact info

### Backend Features
- **RESTful API**: Well-structured API endpoints
- **Contact Form Handler**: Email functionality for contact submissions
- **Gallery Management**: API for photos, videos, and media
- **News Management**: Latest updates and press releases
- **Publications API**: Annual reports, journals, books, etc.
- **Authentication**: Basic auth system for admin access
- **File Uploads**: Support for document and image uploads

## Technologies Used

### Frontend
- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Custom styling with responsive design
- **Font Awesome**: Icons and visual elements
- **Axios**: HTTP client for API calls

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **CORS**: Cross-origin resource sharing
- **Nodemailer**: Email functionality
- **Multer**: File upload middleware
- **dotenv**: Environment variable management

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on http://localhost:3000

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the email configuration and other settings

4. Start the server:
   ```bash
   npm start
   ```
   
   For development with auto-restart:
   ```bash
   npm run dev
   ```

The backend API will run on http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Contact
- `POST /api/contact/submit` - Submit contact form
- `GET /api/contact/submissions` - Get all submissions (admin)

### Gallery
- `GET /api/gallery/photos` - Get photo gallery
- `GET /api/gallery/videos` - Get video gallery
- `GET /api/gallery/print-media` - Get print media

### News
- `GET /api/news/latest-updates` - Get latest updates
- `GET /api/news/press-releases` - Get press releases
- `GET /api/news/events` - Get upcoming events

### Publications
- `GET /api/publications/annual-reports` - Get annual reports
- `GET /api/publications/monthly-reports` - Get monthly reports
- `GET /api/publications/books` - Get published books

## Key Components

### Header Component
- Responsive navigation menu
- Top bar with contact info and action buttons
- Dropdown menus matching the original website structure

### Home Page
- Hero slider with multiple slides
- Latest updates ticker
- About section with organization info
- President's message section
- Statistics showcase
- News and events galleries
- Recognition and affiliation logos

### Footer Component
- Comprehensive footer with all important links
- Contact information for multiple offices
- Working hours
- Social media links
- Copyright information

## Styling Guidelines

- **Color Scheme**: 
  - Primary: #1a472a (Dark Green)
  - Secondary: #28a745 (Green)
  - Accent: #007bff (Blue)
  
- **Typography**: Arial font family for consistency
- **Responsive Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 968px
  - Desktop: > 968px

## Development Notes

### Frontend Development
- Components are modular and reusable
- CSS is organized per component
- Responsive design implemented throughout
- State management using React hooks

### Backend Development
- RESTful API design principles
- Mock data for development (can be replaced with database)
- Error handling and validation
- CORS enabled for frontend integration

## Production Deployment

### Frontend Deployment
1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to your web server or hosting service

### Backend Deployment
1. Set environment variables for production
2. Configure email service (Gmail, SendGrid, etc.)
3. Set up database (MongoDB recommended)
4. Deploy to your server or cloud platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational and development purposes, replicating the functionality of the official NHRCCB website.

## Contact

For questions or support regarding this project, please contact the development team.

---

**Note**: This is a replica website created for development purposes. For official NHRCCB information, please visit the original website at https://nhrccb.org/
