import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageURL = searchParams.get("image");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "white",
        }}
      >
        {imageURL && (
          <img
            src={imageURL}
            alt="Airhub item image"
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </div>
    ),
    {
      width: 300,
      height: 300,
    }
  );
}
