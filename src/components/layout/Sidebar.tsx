import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PhoneCall, 
  Users, 
  Bell, 
  Grid3X3, 
  FileSpreadsheet,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: "home-page-banner", label: "Home page Banner", icon: LayoutDashboard },
  { id: "active-closed-calls", label: "Active and Closed Calls", icon: PhoneCall },
  { id: "analyst-master", label: "Analyst Master", icon: Users },
  { id: "notification", label: "Notification", icon: Bell },
  { id: "category-master", label: "Category Master", icon: Grid3X3 },
  { id: "performance-sheet", label: "Performance Sheet", icon: FileSpreadsheet },
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-card border-r border-border transition-transform duration-300 lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-6 border-b border-border">
          <div className="flex items-center gap-2">
            <Menu className="h-5 w-5 text-muted-foreground" />
            <span className="text-xl font-bold">
              Strik<span className="text-primary">e</span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onItemClick(item.id);
                  setIsMobileOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-accent text-primary border-l-4 border-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
