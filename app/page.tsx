import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LAYOUT, SPACING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className={cn(LAYOUT.pageCenter, SPACING.pagePadding)}>
      <Card className={cn(LAYOUT.container)}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight">Wedge-1</CardTitle>
        </CardHeader>
        <CardContent className={cn(SPACING.stackGap, "flex flex-col")}>
          <p className="text-muted-foreground">Insert product here.</p>
          <div>
            <Button>Get Started</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
