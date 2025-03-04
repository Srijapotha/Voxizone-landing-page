export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden bg-neutral-100 px-4 py-28 dark:bg-neutral-950">
      <div className="prose prose-neutral prose-invert relative mx-auto grid min-h-screen w-full max-w-4xl grid-cols-1 overflow-hidden px-4">
        {children}
      </div>
    </div>
  );
}
