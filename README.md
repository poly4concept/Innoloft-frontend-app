## Setup
- You need to add `.env` that mirrors the `.env.sample` file [here](https://github.com/poly4concept/Innoloft-frontend-app/blob/main/.env.sample)
- Install all necessary dependencies using `npm i`.(if you receive a peer-dependency error , install with `npm i --legacy-peer-deps`)

## What I would have done differently
- **Persistence of Configuration Data:** It would have been beneficial to find a way to persist configuration data, ensuring it survives rerendering and page refreshes. This could be achieved using `localStorage`, `sessionStorage` or  `cookies`. Storing the configuration data locally will minimize the need for frequent API calls since configuration data won't change often. 
- **Editing Product:** On the Edit page, I was updating the product in 2 different parts (the details section and description section) with a `PUT` request. A more correct approach would be to use a `PATCH` request, which allows for partial updates to a resource. Alternatively, I would harmonise the data from all components in the edit page and perform a single `PUT` operation.
