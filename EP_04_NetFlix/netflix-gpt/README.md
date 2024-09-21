# Movie Recommendation App

This project is a fully responsive Netflix-style movie recommendation web application that uses GPT-based AI to suggest movies based on user preferences. It leverages the TMDB API to retrieve detailed movie information and provides a seamless, dynamic user experience.

## Live Demo

You can view the live demo of the application at [Netflix GPT](https://netflixgpt-174a5.web.app/).


## Features

### 1. **Movie Recommendations (GPT-based)**
   - **Natural Language Search**: Users can type in preferences like “action movies,” “romantic comedies,” or “thrillers,” and the app will generate movie recommendations.
   - **GPT-powered Suggestions**: The app uses the Cohere API (a GPT model) to generate a list of 5 movie titles based on the input query. The recommendations are received in a comma-separated format and displayed dynamically on the front end.

### 2. **TMDB API Integration**
   - Once movie titles are recommended by the GPT API, each title is sent to The Movie Database (TMDB) API to fetch detailed information about the movie.
   - **Movie Details**: The fetched data includes movie title, poster, overview, release date, and other relevant information.
   - **Error Handling**: If any movie title does not yield results from the TMDB API, the app handles this gracefully and alerts the user.

### 3. **State Management (Redux)**
   - The application uses Redux to manage both the search state and the movie data. This ensures that the user's movie recommendations and search results persist across components.
   - **Efficient State Updates**: By leveraging Redux, the app efficiently updates the UI when new recommendations are fetched, improving the user experience.

### 4. **Responsive UI with Tailwind CSS**
   - The app is designed to be fully responsive, providing an optimal experience on all devices (desktop, tablet, mobile).
   - **Tailwind CSS** is used to style components dynamically, making it easy to maintain consistency throughout the design.

### 5. **Firebase Hosting**
   - The app is deployed and hosted on Firebase, which provides a fast, secure, and scalable hosting solution for the project.
   - Firebase ensures that the app remains accessible and performant for a global audience.

### 6. **Interactive Search Interface**
   - **Search Bar**: Users can enter their movie preferences in the search bar to receive dynamic recommendations.
   - **Movie List**: The app renders a list of movies with full details (from TMDB) based on GPT recommendations.
   - **Loader**: A loading spinner or animation is shown while recommendations are being fetched from both the GPT and TMDB APIs.

## Data Flow

### GPT Movie Recommendation Process
1. **User Input**: The user enters a search term in the search bar (e.g., “comedy movies”).
2. **GPT Query**: This input is sent as a query to the Cohere API, which responds with 5 comma-separated movie titles.
3. **Movie Fetching**: For each of the recommended movies, a separate API call is made to TMDB to retrieve full movie details, including the poster, description, and rating.
4. **State Management**: The movie data is stored in Redux and passed down to components to be rendered dynamically.

### Data Storage
- **Redux** is used to store:
  - The **search term** entered by the user.
  - The list of **recommended movie titles** (from GPT).
  - The **movie details** fetched from TMDB for each recommended title.
- **Component Reusability**: The state is passed as props to reusable components like `MovieList`, which renders each movie's details dynamically.
- **No Database Storage**: The app does not persist data beyond the current session (e.g., no user accounts or database integration is included).

## Tech Stack

- **React**: Used to build the user interface, handle component logic, and provide a seamless user experience.
- **Tailwind CSS**: For custom, responsive styling and layout.
- **Redux**: For managing state across components and handling data from the GPT and TMDB APIs.
- **Cohere GPT API**: Provides AI-based movie recommendations based on natural language input.
- **TMDB API**: Fetches detailed movie data for each recommended title.
- **Firebase**: Hosting service to deploy and serve the app to users.

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/netflix-recommendation-app.git
   cd netflix-recommendation-app
   
## Install dependencies:

  ```bash
    npm install && npm start

## Configure Environment Variables

Create a `.env` file in the root of your project and set up the required API keys:

```env
REACT_APP_COHERE_KEY=your-cohere-api-key
REACT_APP_TMDB_KEY=your-tmdb-api-key


