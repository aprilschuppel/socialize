
import { fetchInteractions } from "../lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const interactions = await fetchInteractions();
console.log(interactions);

export default async function AllInteractionLog() {
  return (
    <Card className="p-4">
      <CardHeader className="text-5xl font-bold tracking-tighter text-coolors-emerald-300">
        Social Interactions
      </CardHeader>
      <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6">Name</TableHead>
            <TableHead className="w-1/2">Notes</TableHead>
            <TableHead className="w-1/6">Type</TableHead>
            <TableHead className="w-1/6">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {interactions.map((interaction, index) => (
            <TableRow key={index}>
              <TableCell className="flex-auto">
                <div className="text-center">{interaction.contact_name}</div>
              </TableCell>
              <TableCell>{interaction.notes}</TableCell>
              <TableCell>{interaction.type}</TableCell>
              <TableCell>
                {new Date(interaction.date).toLocaleDateString("en-UK", {
                  day: "numeric",
                  month: "short",
                  year: "2-digit",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </CardContent>
    </Card>
  );
}
