import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';
import {Reservation} from "../../Models/Reservation";

describe('<Modal />', () => {
  const reservation : Reservation = {id: 1, restaurant_id:3, date: '12-10-2023', people:1, time: '12:00', user: 'Ti', table_number:3
  }
  test('it should mount', () => {
    render(<Modal onClose={console.log} onReservation={console.log}/>);
    
    const modal = screen.getByTestId('Modal');

    expect(modal).toBeInTheDocument();
  });
});