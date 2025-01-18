import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchContacts } from "../lib/data";
import { formatDateWithDaysSince } from "../lib/utils";

const contacts = await fetchContacts();

export function ContactList() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-md">
          <TableHead></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Pref. Contact</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Last Contacted</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>
              <Avatar className="size-24">
                <AvatarImage
                  src={contact.photo}
                  alt={`${contact.name} Photo`}
                  className="object-cover"
                />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.preferredContactMethod}</TableCell>
            <TableCell>{contact.notes}</TableCell>
            <TableCell>
              {formatDateWithDaysSince(new Date(contact.lastContact), true)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
