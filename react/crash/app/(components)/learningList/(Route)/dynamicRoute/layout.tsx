'use client'
import Header from "./header";
export default function dynamicRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header/>
      <section className="px-5">{children}</section>
    </div>
  );
}