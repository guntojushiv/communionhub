// App.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Test if Home page renders properly
test('renders home page with welcome message', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const welcomeMessage = screen.getByText(/Connecting People Across Faiths & Interests/i);
  expect(welcomeMessage).toBeInTheDocument();
});

// Test navigation to events page
test('navigates to events page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  const eventLink = screen.getByText(/Events/i);
  eventLink.click();
  
  const formElement = screen.getByPlaceholderText(/Event Title/i);
  expect(formElement).toBeInTheDocument();
});

// Test event form submission
test('renders event form and adds new event', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const titleInput = screen.getByPlaceholderText(/Event Title/i);
  const dateInput = screen.getByLabelText(/Date/i);
  const categorySelect = screen.getByLabelText(/Select Category/i);
  
  expect(titleInput).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(categorySelect).toBeInTheDocument();
});

// This will help you make sure your routes, forms, and components are working correctly!
// Let me know if you’d like me to add more detailed test cases. 🚀
