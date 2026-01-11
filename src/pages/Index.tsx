import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { HomePageBanners } from "@/components/banners/HomePageBanners";
import { AnalystMaster } from "@/components/analysts/AnalystMaster";
import { CategoryMaster } from "@/components/categories/CategoryMaster";
import { PlaceholderSection } from "@/components/placeholder/PlaceholderSection";

const Index = () => {
  const [activeItem, setActiveItem] = useState("home-page-banner");

  const renderContent = () => {
    switch (activeItem) {
      case "home-page-banner":
        return <HomePageBanners />;
      case "analyst-master":
        return <AnalystMaster />;
      case "category-master":
        return <CategoryMaster />;
      case "active-closed-calls":
        return (
          <PlaceholderSection
            title="Active and Closed Calls"
            description="Manage active and closed trading calls"
          />
        );
      case "notification":
        return (
          <PlaceholderSection
            title="Notifications"
            description="Manage platform notifications"
          />
        );
      case "performance-sheet":
        return (
          <PlaceholderSection
            title="Performance Sheet"
            description="View and manage performance metrics"
          />
        );
      default:
        return <HomePageBanners />;
    }
  };

  return (
    <MainLayout activeItem={activeItem} onItemClick={setActiveItem}>
      {renderContent()}
    </MainLayout>
  );
};

export default Index;
