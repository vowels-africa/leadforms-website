export default function CompetitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`body { background: #ffffff !important; margin: 0; padding: 0; }`}</style>
      {children}
    </>
  );
}
