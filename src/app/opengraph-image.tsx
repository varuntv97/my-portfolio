import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Varun TV - Senior Software Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const numberOfYears = (): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const isAfterAugust = currentDate.getMonth() > 7; // Months are 0-indexed (June = 5)

  // Add +1 if the current date is after June
  return isAfterAugust ? currentYear - 2021 + 1 : currentYear - 2021;
};

export default async function Image() {
  // Fetch avatar image
  const avatarResponse = await fetch(
    "https://avatars.githubusercontent.com/u/40756782?v=4"
  );
  const avatarBuffer = await avatarResponse.arrayBuffer();
  const avatarBase64 = `data:image/jpeg;base64,${Buffer.from(avatarBuffer).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "60px 80px",
        }}
      >
        {/* Main content container - mimics hero layout */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 1000,
            gap: 60,
          }}
        >
          {/* Left side - Text content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 16,
            }}
          >

            {/* Main Heading */}
            <h1
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#0a0a0a",
                margin: 0,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Hi, I&apos;m Varun
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 28,
                color: "#71717a",
                margin: 0,
                lineHeight: 1.4,
                maxWidth: 550,
              }}
            >
              Senior Software Developer with {numberOfYears()} years of experience, passionate
              about modern technologies and user experiences.
            </p>

            {/* URL */}
            <p
              style={{
                fontSize: 20,
                color: "#a1a1aa",
                margin: 0,
                marginTop: 8,
              }}
            >
              varuntv.me
            </p>
          </div>

          {/* Right side - Avatar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={avatarBase64}
              alt="Varun TV"
              width={200}
              height={200}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #f4f4f5",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
