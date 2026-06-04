# E2E Test Automation Project

## Overview

This project is an end-to-end (E2E) test automation suite that validates critical user journeys of a web application.  
It focuses on core business flows such as authentication, product browsing, cart operations, and checkout.

The suite is designed with maintainability and clarity in mind, prioritizing real user behavior over isolated test cases.

---

## Tech Stack

- Playwright
- Node.js
- JavaScript 

### Why this stack?

Playwright was chosen due to:
- Reliable cross-browser execution
- Built-in auto-waiting mechanisms that reduce flakiness
- Strong debugging tools (trace viewer, screenshots, video)
- Simple setup and fast execution for E2E testing

---

## Test Scenarios Covered

This suite includes two main end-to-end flows:

### 1. Complete Purchase Flow
- User login
- Navigate to product list
- Open product detail
- Add product to cart
- Return to products page
- Navigate to cart
- Proceed to checkout
- Review order overview
- Complete purchase successfully

### 2. Cart Management Flow
- User login
- Navigate to product list
- Open product detail
- Add product to cart from product detail page
- Remove product from cart
- Return to products page

---

## Project Structure


pages/
LoginPage.js
ProductPage.js
DetailPage.js
YourCartPage.js
CheckoutPage.js
OverviewPage.js
CompletionPage.js

tests/
purchase-flow.spec.js
cart-management.spec.js

playwright.config.js


---

## Setup Instructions

### Install dependencies

npm install


### Install Playwright browsers

npx playwright install


---

## How to run tests

### Run all tests

npx playwright test


### Run a specific test

npx playwright test tests/purchase-flow.spec.js


### Run UI mode (debugging)

npx playwright test --ui


---

## Design Decisions

- Page Object Model (POM) was implemented to improve maintainability and scalability
- Each test represents a complete user journey rather than isolated actions
- Focus was placed on critical business flows instead of exhaustive coverage
- Tests are independent and reusable
- Structure follows a real-world e-commerce user journey

---

## Known Limitations

- No CI/CD pipeline integration yet
- Test data is currently static
- Environment configuration is not externalized
- Limited coverage for edge cases and negative scenarios

---

## Evidence

Execution evidence can be provided through:
- Playwright HTML report
- Screenshots on failure
- Terminal execution logs

---

## Author

QA Automation Engineer Gabriela Villoria
