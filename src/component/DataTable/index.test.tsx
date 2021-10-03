import { 
  render,
  screen,
  waitFor,
  cleanup 
} from '@testing-library/react';
import { launchesSuccessOneRecord } from '../../mocks/data/launches';
import { DataTable } from './index';

afterEach(cleanup);

test('renders table with one record', () => {
  render(<DataTable data={launchesSuccessOneRecord} />);
  const linkElement = screen.getByText(/FalconSat/i);
  expect(linkElement).toBeInTheDocument();
});
