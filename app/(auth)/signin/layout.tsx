"use client";
import RoomBanner from "@/public/RoomBanner.svg";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content flex space-x-10">
      <div className="image   my-6 mx-28">
        <RoomBanner />
      </div>
      {children}
    </div>
  );
}
