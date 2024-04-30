import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../../backend/main/schema.graphql",
  overwrite: true,
  documents: "GraphQL/**/*.graphql",
  generates: {
    "GraphQL/graphql-types.tsx": {
      config: {
        useIndexSignature: true,
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
export default config;
