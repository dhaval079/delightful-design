import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
  activeItem: string;
  onItemClick: (item: string) => void;
}

export function MainLayout({ children, activeItem, onItemClick }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={onItemClick} />
      
      <div className="lg:ml-64">
        <Header />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
