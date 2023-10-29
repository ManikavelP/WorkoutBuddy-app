

```markdown
# WorkoutBuddy-app 

WorkoutBuddy-app is a web application that helps you track your fitness progress, create workout routines.
Whether you're a seasoned gym-goer or just starting your fitness journey, WorkoutBuddy-app is here to support you in achieving your fitness goals.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Styling with Tailwind CSS](#styling-with-tailwind-css)
- [Contributing](#contributing)


## Features

- Create, edit, and delete workout routines
- Add, update, and remove exercises within routines
- Track your workout history
- User-friendly and intuitive user interface
- Responsive design for mobile and desktop

## Getting Started

Follow these instructions to set up and run WorkoutBuddy-app on your local machine.

### Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) (on the server side)
- [Core](https://www.npmjs.com/package/core) (on the client side)
- [date-fns](https://www.npmjs.com/package/date-fns) (on the client side)
- [dotenv](https://www.npmjs.com/package/dotenv) (on the server side)
- [React, React Router DOM, React DOM](https://reactjs.org/) (on the client side)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WorkoutBuddy-app.git
   ```

2. Change directory to the project folder:

   ```bash
   cd WorkoutBuddy-app
   ```

3. Install server dependencies:

   ```bash
   npm install express mongoose nodemon dotenv
   ```

4. Change directory to the client folder:

   ```bash
   cd client
   ```

5. Install client dependencies:

   ```bash
   npm install core date-fns react react-router-dom react-dom
   ```

6. Return to the project root directory:

   ```bash
   cd ..
   ```

7. Create a `.env` file in the project root directory and configure your environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   ```

8. Start the server and client concurrently:

   ```bash
   npm run dev
   ```

The server will run on `http://localhost:4000`, and the client will run on `http://localhost:3000`.

## Usage

Create your workout routines, add exercises, and track your progress. Stay motivated, achieve your fitness goals, and have fun!

## Contributing

We welcome contributions to make WorkoutBuddy-app better! 

Feel free to reach out to me  if you have any questions or feedback. Happy exercising! 💪🏋️‍♀️🚴‍♂️🏃‍♂️
```
In this updated README, I've added a new "Prerequisites" section and updated the "Installation" section with separate commands for installing the necessary server and client dependencies. I've also included links to the respective packages in the prerequisites section.
