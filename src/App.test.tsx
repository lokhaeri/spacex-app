import { 
  render,
  screen,
  waitFor,
  cleanup 
} from '@testing-library/react';
import App from './App';
import { spaceXApi } from './config/api';

import { server, rest } from './mocks/server';

describe('App test suite', () => {

  afterEach(cleanup);

  it('renders app with error reponse if server returns status 500', async () => {
    server.use(
      rest.get(`${spaceXApi}/v3/launches`, async (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "Server Error"}))
      }),
    )
    render(<App />);

    await waitFor(() => {
      let emptyElement = screen.getByText("Couldn't load api");
      expect(emptyElement).toBeInTheDocument();
    });
  });


  it('renders app "No information available" message if data is empty array', async () => {
    server.use(
      rest.get(`${spaceXApi}/v3/launches`, async (req, res, ctx) => {
        return res(ctx.json([]))
      }),
    )

    render(<App />);

    await waitFor(() => {
      let emptyElement = screen.getByText("No information available");
      expect(emptyElement).toBeInTheDocument();
    });
  });

  it('renders app without error', async () => {
    render(<App />);

    await waitFor(() => {
      let cellElement = screen.getByText("FalconSat");
      expect(cellElement).toBeInTheDocument();
    });
  });

});
