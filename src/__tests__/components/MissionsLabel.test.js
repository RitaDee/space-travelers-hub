import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MissionsLabel from '../../components/MissionsLabel';

describe('MissionsLabel', () => {
  it('should render "NOT A MEMBER" when isReserved is false', () => {
    const { getByText } = render(<MissionsLabel isReserved={false} />);
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
  });

  it('should render "Active Member" when isReserved is true', () => {
    const { getByText } = render(<MissionsLabel isReserved />);
    expect(getByText('Active Member')).toBeInTheDocument();
  });

  it('should have a blue background when isReserved is true', () => {
    const { getByText } = render(<MissionsLabel isReserved />);
    expect(getByText('Active Member')).toHaveStyle('background-color: #18a2b8');
  });

  it('should have a gray background when isReserved is false', () => {
    const { getByText } = render(<MissionsLabel isReserved={false} />);
    expect(getByText('NOT A MEMBER')).toHaveStyle('background-color: #6d757d');
  });
});
