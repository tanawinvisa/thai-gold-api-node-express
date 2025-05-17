# Node Express Scraper

This project is a simple Node.js application that uses Express to set up a server for scraping price data from a specified website. It utilizes `node-fetch` to make HTTP requests and `cheerio` to parse and extract data from the HTML response.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/node-express-scraper.git
   ```

2. Navigate to the project directory:
   ```
   cd node-express-scraper
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000`.

## Routes

The application exposes the following route for scraping price data:

- `GET /price`: Triggers the price scraping logic and returns the extracted price information.

## License

This project is licensed under the MIT License.