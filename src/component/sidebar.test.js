// import '@testing-library/jest-dom/extend-expect';
// import { fireEvent, render, screen } from '@testing-library/react';
// import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import Sidebar from './sidebar';

// const renderWithRouter = (ui) => {
//   return render(
//     <MemoryRouter>
//       {ui}
//     </MemoryRouter>
//   );
// };

// describe('Sidebar Component', () => {
//   it('renders all menu items', () => {
//     renderWithRouter(<Sidebar />);

//     expect(screen.getByText('Home')).toBeInTheDocument();
//     expect(screen.getByText('Movies')).toBeInTheDocument();
//     expect(screen.getByText('Watchlist')).toBeInTheDocument();
//     expect(screen.getByText('Profile')).toBeInTheDocument();
//   });

//   it('navigates to the correct route when clicking on menu items', () => {
//     renderWithRouter(<Sidebar />);

//     fireEvent.click(screen.getByText('Movies'));
//     expect(window.location.pathname).toBe('/movieDetails');

//     fireEvent.click(screen.getByText('Watchlist'));
//     expect(window.location.pathname).toBe('/watchlist');

//     fireEvent.click(screen.getByText('Profile'));
//     expect(window.location.pathname).toBe('/profile');
//   });

//   it('toggles sidebar collapse state when clicking the menu button', () => {
//     renderWithRouter(<Sidebar />);

//     const toggleButton = screen.getByRole('button', { name: /menu/i });
//     fireEvent.click(toggleButton);

//     // Check if sidebar is collapsed based on the state or CSS class
//     const sidebarMenu = screen.getByRole('menu');
//     expect(sidebarMenu).toHaveClass('ant-menu-hidden'); // Example class for hidden state
//   });
// });