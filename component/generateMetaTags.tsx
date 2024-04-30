import Head from "next/head";

export const generateMetaTags = (
  title: string,
  description: string,
  imageUrl: string,
  siteURL: string
) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />

        <meta name="image" content={imageUrl} />
        <meta name="title" content={title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={siteURL} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
};
