import { z } from 'zod';

export const envSchema = z.object({
  
  WATCHMODE_API_KEY: z.string().min(1, 'A variável WATCHMODE_API_KEY é obrigatória'),
});


export const env = envSchema.parse(process.env);