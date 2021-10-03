import { rest } from 'msw';
import { spaceXApi } from '../config/api';
import { launchesSuccessOneRecord } from './data/launches';

export const handlers = [
  rest.get(`${spaceXApi}/v3/launches`, (req, res, ctx) => {
    return res(
      ctx.json(launchesSuccessOneRecord),
    )
  }),
];
