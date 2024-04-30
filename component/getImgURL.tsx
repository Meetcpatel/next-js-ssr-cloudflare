const BASEURL = "https://api.airhub-app.com";

export const getImgURL = (url: string) => {
  if (!url) return ""; // Handle empty URL case if needed.

  // Check if the URL is a production CDN URL
  const isCdnUrl = url.includes("cdn.digitaloceanspaces.com");

  if (isCdnUrl) {
    // If it's already a CDN URL, return as is
    return url;
  } else if (url.includes("digitaloceanspaces.com")) {
    // If it's a production URL without CDN, add CDN part
    const cdnUrl = url.replace(
      "digitaloceanspaces.com",
      "cdn.digitaloceanspaces.com"
    );
    return cdnUrl;
  } else if (url.startsWith("http://") || url.startsWith("https://")) {
    // If it's already an absolute URL, return as is
    return url;
  } else {
    // If it's a relative URL, prepend the BASEURL
    return BASEURL + url;
  }
};
