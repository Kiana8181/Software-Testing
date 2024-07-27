# Software Testing

Welcome to the Software Testing Course! This repository contains materials and resources for understanding and implementing various software testing strategies, including unit testing, integration testing, and end-to-end testing using Cypress.

## Course Overview

Software testing is a critical part of the software development process, aimed at ensuring that applications meet specified requirements and function correctly. This course covers the following key areas:

- **Unit Testing**: Focuses on testing individual units or components of the software to ensure each part functions correctly.
- **Integration Testing**: Involves testing the combination of different software modules and their interactions to ensure they work together as expected.
- **End-to-End (E2E) Testing**: Tests the entire application as a whole in a simulated user environment, validating complete workflows.

## Testing Strategies

### Unit Testing

Unit testing validates the behavior of individual functions, methods, or classes. The goal is to ensure that each unit of the code performs as expected. Unit tests are typically automated and help in maintaining code quality and reliability.

### Integration Testing

Integration testing combines individual modules and tests them as a group. It ensures that data transfers correctly between modules and that their interactions meet the specified requirements. This type of testing can be performed using various approaches, such as top-down, bottom-up, and big bang.

### End-to-End Testing with Cypress

End-to-End testing simulates real user scenarios and verifies the application flow from start to finish. Cypress is used for E2E testing due to its powerful capabilities for interacting with web applications, allowing developers to write tests that mimic actual user behavior.

## Testing Tools

- **Cypress**: A JavaScript-based end-to-end testing framework that provides a rich set of tools for testing modern web applications.
- **Jest**: A JavaScript testing framework commonly used for unit and integration tests, offering a simple and effective way to write and run tests.

## Course Objectives

By the end of this course, participants should be able to:

1. Understand the differences between various types of software testing.
2. Write and execute unit tests to validate individual code components.
3. Develop integration tests to ensure seamless interaction between different modules.
4. Implement end-to-end tests using Cypress to simulate user interactions.

## Related Materials

You can view the PDF related to this course in the root of this repository: [Software Testing.pdf](./Software%20Testing.pdf).

## Getting Started

1. Clone the repository: `git clone https://github.com/Kiana8181/Software-Testing.git`
2. Install dependencies: `npm install`
3. Run tests: `npm test`

## Scripts

- **Development Server**: `npm run dev` – Starts the Vite development server.
- **Build**: `npm run build` – Builds the project using Vite.
- **Preview**: `npm run preview` – Previews the built project.
- **Unit and Integration Tests**: `npm run test` – Runs Jest in watch mode with verbose output and coverage report.
- **End-to-End Tests**: `npm run e2e` – Opens Cypress for running end-to-end tests.
