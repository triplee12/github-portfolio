# GitHub Repositories Portfolio

This is a web application that allows users to view, search, create, update, and delete repositories on their GitHub account. It uses the GitHub API to fetch repository data and React for the front-end interface. The application features pagination, search, and modals for creating and updating repositories. Additionally, it includes error handling with error boundaries and a 404 page for unmatched routes.

## Features

- **View Repositories**: List all repositories of a user with pagination.
- **Search Repositories**: Search through the user's repositories.
- **Create Repository**: Create a new repository using a modal form.
- **Update Repository**: Update repository details using a modal form.
- **Delete Repository**: Delete a repository.
- **Error Handling**: Display a custom error boundary page and a 404 page for unmatched routes.
- **Good UI/UX**: A clean, responsive, and accessible user interface.

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/triplee12/github-portfolio.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd github-portfolio
    ```

3. **Install dependencies:**

    Using npm:
    ```sh
    npm install
    ```

    Using yarn:
    ```sh
    yarn install
    ```

4. **Create a `.env` file in the root directory and add your GitHub API token:**

    ```
    REACT_APP_GITHUB_TOKEN=your_github_token_here
    ```

5. **Start the development server:**

    Using npm:
    ```sh
    npm start
    ```

    Using yarn:
    ```sh
    yarn start
    ```

6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **View Repositories:**
   - On the home page, you can see a list of your repositories.
   - Use the pagination buttons to navigate through pages.

2. **Search Repositories:**
   - Use the search input to filter repositories by name.

3. **Create Repository:**
   - Click on the "Create New Repository" button to open a modal form.
   - Fill in the repository details and submit.

4. **Update Repository:**
   - Click the "Edit" button next to a repository to open a modal form.
   - Update the repository details and submit.

5. **Delete Repository:**
   - Click the "Delete" button next to a repository to remove it.

## Project Structure

- **`src/components`**: Contains reusable components like `RepoModal`.
- **`src/pages`**: Contains page components like `Home` and `RepoDetail`.
- **`src/App.jsx`**: Main application component with routes.
- **`src/index.js`**: Entry point of the application.

## Error Handling

- **Error Boundary**: Wraps the main application to catch and display errors gracefully.
- **404 Page**: Displays a custom 404 page for unmatched routes.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ejie Ebuka - [@TripleeO](https://twitter.com/TripleeO)

Project Link: [https://github.com/triplee12/github-portfolio](https://github.com/triplee12/github-portfolio)

---
