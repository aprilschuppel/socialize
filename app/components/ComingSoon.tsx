import { Card, CardContent, CardHeader } from "@/components/ui/card";

  
  interface ComingSoonProps {
    header: string;
  }

  export function ComingSoon({ header }: ComingSoonProps) {
    return (
      <Card className="p-4">
        <CardHeader className="text-5xl font-bold tracking-tighter text-coolors-emerald-300">
          {header}
        </CardHeader>
        <CardContent className="text-center mt-24 mb-36">
          This page is under construction.
        </CardContent>
      </Card>
    );
  }
  