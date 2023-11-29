# TFD - Layout Tool

[⬇️ Production deployment `main`](https://thefilmdash.vercel.app/)

*TFD (The Film Dash) - Layout Tool* is a frontend-driven tool built to facilitate the creation of sleek Instagram post presentations for film- and TV show reviews.


## Features
The Layout Tool facilitates the creation of slick Instagram post designs, cutting out the need for image editing/manipulation programs (and PhotoShop skills). 

It has three key features:

- ### Generating 'Title Slide'
Based on user input, this function generates an image displaying the film/TV show title, the rating, and the release year on top of a custom backdrop image.

- ### Generating 'Content Slide'
After submitting a review, this function creates an image that highlights the actual review text, and also displays additional information like the film/show rating and title. 

- ### Generating 'Stills Slide'
The user submits 3 images which get stacked on top of each other. Used for highlighting specific aspects of the film/TV show in the slidepost.

Every slide is generated in a 1080x1350px resolution, utilizing Instagram's maximum image post size.

## Tech stack
- [`Next.js`](https://nextjs.org/)
- [`TypeScript`](https://www.typescriptlang.org/)
- [`TailwindCSS`](https://tailwindcss.com/)
- [`npm`](https://www.npmjs.com/)

## Getting Started

If you want to have a look at the tool yourself, you can visit the production deployment [here](https://thefilmdash.vercel.app).

To get started with Layout Tool locally, follow these steps:

1. Clone the repository.
```bash
git clone git@github.com:quinceyvd/thefilmdash.git
```

2. Install the dependencies.
```bash
npm install
```

3. Run the development server.
```
npm run dev
```

