# Simple blog starter template with Next.js and caisy

### Features

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support
- ✅ Robots.txt support

### To run this project locally

- [ ] `git clone https://github.com/caisy-io/starter-template-next-simple-blog.git`
- [ ] create `.env.local` file with your project id and API key - see `.env.sample`
- [ ] `npm install`
- [ ] `npm run dev`

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "Simple Blog"

### We are using

- Next.js as server and server side rendering framework
- tailwindcss for styling
- @caisy/rich-text-react-renderer to render the caisy richtexts in react
- graphql and graphql-request to fetch data from caisy

#### Codegen

During development we generate code using

- @graphql-codegen/cli and plugins

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm install`       | Installs dependencies                                    |
| `npm run dev`       | Starts local dev server at `localhost:3000`              |
| `npm run gen`       | Regenerates generated types and SDK                      |
| `npm run gen:watch` | Wachting changes and regenerates generated types and SDK |
| `npm run build`     | Build your production site to `./dist/`                  |

## Next.js x Caisy

## 👀 Want to learn more?

Feel free to check [caisy documentation](https://caisy.io/developer/docs)
Feel free to check [Next.js documentation](https://nextjs.org/docs)
