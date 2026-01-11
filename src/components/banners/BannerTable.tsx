import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/ui/status-badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Filter } from "lucide-react";

export interface Banner {
  id: string;
  image: string;
  name: string;
  displayIn: string;
  status: "active" | "inactive";
  displayTo: string;
  displayToStatus: "active" | "inactive";
  navigationOnClick: string;
  externalLinks: string;
}

interface BannerTableProps {
  banners: Banner[];
}

export function BannerTable({ banners }: BannerTableProps) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b border-border">
            <TableHead className="text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                Banner <ArrowDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground font-medium">Name</TableHead>
            <TableHead className="text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                Display In <Filter className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                Display to <Filter className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground font-medium">
              <div className="flex items-center gap-1">
                Navigation (upon click) <ArrowDown className="h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground font-medium">External Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {banners.map((banner) => (
            <TableRow key={banner.id} className="border-b border-border hover:bg-muted/50">
              <TableCell>
                <Avatar className="h-12 w-12 rounded-lg">
                  <AvatarImage src={banner.image} alt={banner.name} className="object-cover" />
                  <AvatarFallback className="rounded-lg bg-muted text-xs">IMG</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{banner.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span>{banner.displayIn}</span>
                  <StatusBadge status={banner.status} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <span>{banner.displayTo}</span>
                  <StatusBadge status={banner.displayToStatus} />
                </div>
              </TableCell>
              <TableCell>{banner.navigationOnClick}</TableCell>
              <TableCell className="max-w-[200px] truncate text-muted-foreground">
                {banner.externalLinks}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
