import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MissionsBadge from '../../components/MissionsBadge';

describe('MissionsBadge', () => {
  it('should render with NOT A MEMBER label if isReserved prop is false', () => {
    const { getByText } = render(<MissionsBadge isReserved={false} />);
    const labelElement = getByText('NOT A MEMBER');
    expect(labelElement).toBeInTheDocument();
  });

  it('should render with Active Member label if isReserved prop is true', () => {
    const { getByText } = render(<MissionsBadge isReserved />);
    const labelElement = getByText('Active Member');
    expect(labelElement).toBeInTheDocument();
  });

  it('should have a background color of #6d757d if isReserved prop is false', () => {
    const { container } = render(<MissionsBadge isReserved={false} />);
    expect(container.firstChild).toHaveStyle('background-color: #6d757d');
  });

  it('should have a background color of #18a2b8 if isReserved prop is true', () => {
    const { container } = render(<MissionsBadge isReserved />);
    expect(container.firstChild).toHaveStyle('background-color: #18a2b8');
  });
});
