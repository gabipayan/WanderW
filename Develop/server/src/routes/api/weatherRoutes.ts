import { Router, type Request, type Response } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, _res: Response) => {
  // TODO: GET weather data from city name
  const city = req.body.city;
  // TODO: save city to search history
  HistoryService.addCity(city);
});

// TODO: GET search history
router.get('/history', async (_req: Request, res: Response) => {
  // TODO: GET search history from history service
  const cities = await HistoryService.getCities();
  res.json(cities);
});

// * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
