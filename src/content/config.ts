import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    subtitle: z.string().optional(),
    tag: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['download', 'open-source']),
    version: z.string().optional(),
    fileSize: z.string().optional(),
    platform: z.string().optional(),
    repo: z.string().optional(),
    license: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const cases = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    client: z.string().optional(),
    industry: z.string().optional(),
    emoji: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'products': products,
  'docs': docs,
  'cases': cases,
};
