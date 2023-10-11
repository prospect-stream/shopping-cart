import { z } from 'zod';

export const config = z
  .object({
    PORT: z.coerce.number().int().min(1024).max(49151)
  })
  .parse(process.env);
