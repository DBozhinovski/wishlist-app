# A wishlist app built with Astro, SolidJS, and Baserow

This is the end result of a guide on how to build a wishlist app with [Astro](https://astro.build), [SolidJS](https://www.solidjs.com), and [Baserow](https://baserow.io). You can find the guide [here](https://darko.io/posts/wishlist-app-with-astro-and-solid).

Live demo at: https://wishlist.darko.io

## Deploying the app for yourself

Assuming you have a working version of Node 18.x (required by Astro 3.x)

1. Clone the repo and install the dependencies
2. Get your Baserow credentials as described in the guide linked above
3. Deploy the app to a static site host of your choice

## Development

To run the app locally, run `npm run dev` and open `http://localhost:4321` in your browser. This is a standard Astro app, so you can use all the commands that come with it.

### Project structure and files

The structure of the project is a bog-standard Astro app, with the following notes:

- `src/components/List.tsx` together with `List.css` is the only hydrated part of the app - it uses SolidJS to render the list of items fetched from Baserow via `src/data/baserow.ts`.
- `src/data/baserow.ts` is the utility for fetching data from the Baserow table that describes the wishilist (yes, I know the key is public, have a look at the article for alternative approaches).





