import { Router } from "express";

const router = Router();

router.get('/v2', (req, res) => {
  res.send('api World!');
});

router.get('/v2', (req, res) => {
  res.send('api World!');
});

export default router;