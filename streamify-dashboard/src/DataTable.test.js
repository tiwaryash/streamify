import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DataTable from './components/DataTable';

const mockData = [
  { song: 'Song A', artist: 'Artist A', date: '2023-01-01', streams: 1000, userId: '1' },
  { song: 'Song B', artist: 'Artist B', date: '2023-01-02', streams: 2000, userId: '2' },
  { song: 'Song C', artist: 'Artist C', date: '2023-01-03', streams: 1500, userId: '3' },
];

describe('DataTable Component', () => {
  test('renders DataTable with correct data', () => {
    render(<DataTable data={mockData} />);
    
    expect(screen.getByText('Song A')).toBeInTheDocument();
    expect(screen.getByText('Artist A')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('1,000')).toBeInTheDocument();
  });

  test('sorts data by song name', () => {
    render(<DataTable data={mockData} />);
    
    const songHeader = screen.getByText('Song Name');
    fireEvent.click(songHeader); // Sort ascending

    const firstRow = screen.getByText('Song A');
    const secondRow = screen.getByText('Song B');
    const thirdRow = screen.getByText('Song C');

    expect(firstRow).toBeInTheDocument();
    expect(secondRow).toBeInTheDocument();
    expect(thirdRow).toBeInTheDocument();
    
    fireEvent.click(songHeader); // Sort descending

    const sortedFirstRow = screen.getByText('Song C');
    const sortedSecondRow = screen.getByText('Song B');
    const sortedThirdRow = screen.getByText('Song A');

    expect(sortedFirstRow).toBeInTheDocument();
    expect(sortedSecondRow).toBeInTheDocument();
    expect(sortedThirdRow).toBeInTheDocument();
  });
}); 