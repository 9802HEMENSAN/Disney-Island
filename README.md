# Disney Cartoons React Web Application

Welcome to the Disney Cartoons React web application! This single-page application allows you to access details of Rick and Morty characters, featuring pagination, filtering, and search functionalities. Below, you'll find instructions on how to run the app and an overview of its key features.

## Getting Started

Follow these steps to run the Disney Cartoons React web application on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/9802HEMENSAN/Disney-Island.git
   ```

2. Navigate to the project directory:

   ```bash
   cd disney-cartoons
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and access the app at [http://localhost:3000](http://localhost:3000).

## App Features

### Rick and Morty Character Cards

- On the initial load of the page, the app will render Rick and Morty characters in the form of cards.
- Each card includes the character's picture, name, and status (Alive, Dead, or Unknown).
- Pagination is implemented, displaying 12 characters per page in a grid layout (4 rows x 3 columns).

### Character Details Page

- Clicking on a character card will navigate you to the dynamic route `/character/<id>`.
- The character details page displays the following information:
  - Image of the Character
  - Name
  - Status
  - Species
  - Type
  - Gender
  - Origin
  - Location

### Search Functionality

- There is a search bar at the top of the page that allows you to search for characters.
- The search functionality instantly updates the displayed character cards as you type.

### Filtering Functionality

- You can filter characters by the following criteria:
  - Status (Alive, Dead, or Unknown) using a dropdown menu.
  - Gender (Male or Female) using a dropdown menu.
- The filters are applied instantly, and the character cards are updated accordingly.

### Seamless Integration

- Pagination, search, and filter functionalities work together seamlessly, allowing you to refine your character search and explore the Rick and Morty universe.

## API Documentation

For more details about the Rick and Morty API and its supported query parameters, please refer to the [API documentation](https://rickandmortyapi.com/documentation/).

Enjoy exploring the world of Rick and Morty with the Disney Cartoons React web application! If you have any questions or encounter issues, please feel free to reach out to us.

**Happy exploring!**