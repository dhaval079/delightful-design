import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil, Clock } from "lucide-react";

export interface Analyst {
  id: string;
  name: string;
  category: string;
  timeframe: string;
  description: string;
  avatar: string;
  twitter?: string;
  linkedin?: string;
}

interface AnalystCardProps {
  analyst: Analyst;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function AnalystCard({ analyst, onEdit, onDelete }: AnalystCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={analyst.avatar} alt={analyst.name} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {analyst.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate">{analyst.name}</h3>
            <p className="text-sm text-muted-foreground">{analyst.category}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <Clock className="h-3 w-3" />
              <span>{analyst.timeframe}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mt-4 line-clamp-3">
          {analyst.description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            {analyst.twitter && (
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
            )}
            {analyst.linkedin && (
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Button>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={onDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={onEdit}
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
