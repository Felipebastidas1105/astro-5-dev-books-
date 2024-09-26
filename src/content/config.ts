//Z es una librería de validación de datos y defineCollection es un método de la librería astro:content
import { defineCollection, z } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            usa: z.string().url()
        })
    })
})

export const collections = {
    books
}