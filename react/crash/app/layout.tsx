import "./globals.css";
import Nav from "./Nav";
export const metadata = {
  title: "static website",
  description: "react for static website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
          <Nav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
