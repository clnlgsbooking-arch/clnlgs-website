export const metadata = {
  title: "CLN LGS",
  description: "Official website of CLN LGS — DJ, artist, and producer.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body>{children}</body>
    </html>
  );
}
