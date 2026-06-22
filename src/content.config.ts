import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const landingCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/landing' }),
  schema: z.object({
    lang: z.string(),
    title: z.string(),
    description: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      lede: z.string(),
      actions: z.object({
        primary: z.object({
          text: z.string(),
          href: z.string()
        }),
        secondary: z.object({
          text: z.string(),
          href: z.string()
        })
      }).optional()
    }),
    idea: z.object({
      kicker: z.string(),
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string()
      }))
    }),
    principles: z.object({
      kicker: z.string(),
      title: z.string(),
      items: z.array(z.string())
    }),
    closing: z.object({
      title: z.string(),
      text: z.string(),
      button: z.object({
        text: z.string(),
        href: z.string()
      })
    })
  })
});

export const collections = {
  landing: landingCollection,
};
