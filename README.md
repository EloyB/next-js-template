## Project information

**Name:** _project name_
**Project Start Date:** _project name_
**Description:** _project name_
**Repository:** _repository URL_
**Figma File:** _figma URL_

## Tech stack

**Frontend:** NextJS + Typescript + Tailwind
**Backend:** _backend technology_
**Database:** _database type_

## File structure

#### New Route

1. Create a map in the `/app` folder with the name of the route you would like it to have
2. In the folder create a `page.tsx` file. Content returned by this file will be shown to the client

#### Grouped Routes

Grouped routes are marked with a folder where the name is inside of brackets ex. `(folder-name)`. The name of the folder won't be taken into account in the URL. Every folder in the grouped route folder needs a `page.tsx` file to become a route.

#### Other files

All other files (components, utils, data, services, models, etc.) are put in folders outside of the `app` folder.

## Forms

For handling type-safety on forms we use the npm package named **Zod**. An example of the use can be found below

```
const FormSchema = z.object({
  name: z.string().min(2, { message: "Agency name must be atleast 2 chars." }),
  companyEmail: z.string().min(1),
  companyPhone: z.string().min(1),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
});

```

More documentation on **Zod** can be found [here](https://zod.dev/?id=introduction)

## Styling

As a styling library we use Tailwind css. A basic config is already set up in the `tailwind.config.ts` file. Here you can add values and defaults for the specific project.

## UI library

To make things easier we use **shadcn/ui** UI as a UI library. This pre-built library of component is already installed and the base of the re-usable components can be found in the `components/ui` folder.

More info on the use of the components and some examples can be found [here](https://ui.shadcn.com)

## Translations

The template is set up with all the basics to start using translations for your pages.

### Add a new language

1. Find the `locales` folder in de root
2. Create a dedicated json file for your language you want to add (ex. `en.json`)
3. Start adding the translation keys you need (keep yourself to the convention of using uppercase letters as the key => **'KEY': 'value'**)

**IMPORTANT:** Keep in mind that all the json files for your languages should have the same translation keys. If not, certain things will not be translated correctly for some languages.

### Using the language keys in your page content

1. Create a constant with the `useTranslation` hook (`const t = useTranslation()`)
2. Inside of your html-tag just use the following syntax => `{t('KEY')}`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
