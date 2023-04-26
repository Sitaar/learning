import Nav from "./Nav";
export default function LearningListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Nav />
      <section className="w-4/5">{children}</section>
    </div>
  );
}
