import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const langSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional()
});

export const collections = {
  apps: defineCollection({
    loader: glob({ pattern: '**/metadata.json', base: './src/content/apps' }),
    schema: z.object({
      appStoreUrl: z.string().url(),
      developer: z.string().default('Alexandre'),
      category: z.string(),
      compatibility: z.string(),
      price: z.string(),
      fr: langSchema.optional(),
      en: langSchema.optional(),
      es: langSchema.optional(),
      it: langSchema.optional(),
      pt: langSchema.optional(),
      de: langSchema.optional()
    })
  }),
  docs: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
    // Pas besoin de schema complexe, on utilise juste le corps du Markdown
    schema: z.object({}).passthrough()
  })
};
