import Nav from "./Nav";
export default function basicRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav/>
      <section className="p-5">{children}</section>
    </div>
  );
}