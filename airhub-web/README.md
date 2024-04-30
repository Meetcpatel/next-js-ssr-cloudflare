# AirHub Web

This is a Airhub web build with Next.js, Below are the steps to set up and run the project locally.

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://gitlab.com/lablamb-works/air-hub
```

2. Navigate to the project directory:

```bash
cd frontend
cd airhub-web
```

3. Install dependencies using yarn:

```bash
yarn
```

4. Create a `.env` file based on `.env.example` and set the `GRAPHQL_URL` variable to the appropriate GraphQL endpoint.

```bash
cp .env.example .env
```

Open the `.env` file and set the `GRAPHQL_URL` variable to your GraphQL endpoint:

```env
GRAPHQL_URL=<your-graphql-endpoint>
```

## Running the Development Server

To start the development server, run:

```bash
yarn dev
```

This will start the development server at `http://localhost:3000/`.

## Viewing Item Details

To view item details, you need to access a URL in the following format:

```
http://localhost:3000/item-share?marketplaceitem=<item-id>
```

Replace `<item-id>` with the actual ID of the item you want to view details for.

```
http://localhost:3000/item-share?marketplaceitem=clsui0r1c001uz94bl4kdfikt
```
