import "./globals.css";
export const metadata = {
  title: "SkillTrack",
  description: "Your Ultimate Skill Management Solution",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
