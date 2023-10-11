import express from 'express';
import {config} from './config';
import * as db from './db';
import cors from 'cors';
import { ZodError, z } from 'zod';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (_req, res) => {
  res.status(200).send();
});

app.get('/shopping-cart', async (_req, res) => {
  const items = await db.getShoppingCart();
  res.status(200).send(items);
});

app.post('/shopping-cart/items', async (req, res) => {
  try {
    const payload = z.object({
      id: z.number()
    }).parse(req.body);

    const item = (await db.getItems()).find(i => i.id === payload.id);

    if (!item) {
      res.status(400).send();
      return;
    }

    await db.addItemToShoppingCart(item);
    res.status(200).send();
    return;

  } catch (e) {
    if (e instanceof ZodError) {
      res.status(400).send();
      return;
    }
    throw e;
  }
})

app.get('/items', async (_req, res) => {
  const items = await db.getItems();
  res.status(200).send(items);
});

app.listen(config.PORT, () => {
  console.log('listening');
})