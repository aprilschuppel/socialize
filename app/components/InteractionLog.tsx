import { Interaction } from "../lib/definitions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InteractionLogProps {
  interactions: Interaction[];
}

export default async function ContactInteractionLog({
  interactions,
}: InteractionLogProps) {
  return (
    <div>
      <div className="text-2xl font-bold tracking-tighter text-coolors-emerald-300">
        History
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {interactions.map((interaction, index) => {
            const formattedDate = new Date(interaction.date).toLocaleDateString(
              "en-UK",
              { day: "numeric", month: "short", year: "2-digit" }
            );

            return (
              <TableRow key={index}>
                <TableCell>{formattedDate}</TableCell>
                <TableCell>{interaction.type}</TableCell>
                <TableCell>{interaction.notes}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
