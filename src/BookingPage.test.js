import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import BookingPage from './Components/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book a table now");
    expect(headingElement).toBeInTheDocument();
})

test('Checking times in the form', () => {
    render(<BookingForm />);
    const times = screen.getByText("Choose time");
    expect(times).toBeInTheDocument();
})