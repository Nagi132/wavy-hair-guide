export const metadata = {
  title: 'Wavy Hair Guide',
  description: 'Your complete guide to wavy hair care',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}