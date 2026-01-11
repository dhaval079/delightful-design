import { Card, CardContent } from "@/components/ui/card";

interface PlaceholderSectionProps {
  title: string;
  description: string;
}

export function PlaceholderSection({ title, description }: PlaceholderSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
      <Card>
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground">
            This section is under construction. Coming soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
