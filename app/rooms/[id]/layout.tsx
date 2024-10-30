"use client";
import SearchAndFilters from "@/components/searchWithFilters";
import { SearchProvider } from "@/app/context/searchLocation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="content w-">
      <SearchProvider>
        <SearchAndFilters />
        {children}
      </SearchProvider>
    </div>
  );
}
