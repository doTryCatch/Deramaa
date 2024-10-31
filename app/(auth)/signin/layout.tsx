"use client";
import RoomBanner from "@/public/RoomBanner.svg";
import SignInOptions from "@/components/signIn_singUp_options";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content flex space-x-10  ">
      <div className="image   my-6 mx-28 w-[50%] relative">
        <RoomBanner />
        <div className="singin-singup-options absolute  left-0 right-0 bottom-9 ">
          <SignInOptions />
        </div>
      </div>
      {children}
    </div>
  );
}
