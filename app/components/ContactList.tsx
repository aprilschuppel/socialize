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
import Link from "next/link";
import { formatDateWithDaysSince } from "../lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const contacts = await fetchContacts();

export function ContactList() {
  return (
    <Card className="p-4">
      <CardHeader className="text-5xl font-bold tracking-tighter text-coolors-emerald-300">
        Contact List
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="text-xs">
              <TableHead className="w-1/6"></TableHead>
              <TableHead className="w-1/2">Notes</TableHead>
              <TableHead className="w-1/6">Last Contacted</TableHead>
              <TableHead className="w-1/6">Pref. Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="flex-auto">
                  <Link
                    className="text-center font-bold text-md"
                    href={`/contacts/${contact.id}`}
                  >
                    <Avatar className="size-16 mb-2 mx-auto content-center">
                      <AvatarImage
                        src={contact.photo}
                        alt={`${contact.name} Photo`}
                        className="object-cover"
                      />
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <div className="text-center">{contact.name}</div>
                  </Link>
                </TableCell>
                <TableCell>{contact.notes}</TableCell>
                <TableCell className="text-xs">
                  {formatDateWithDaysSince(new Date(contact.lastContact), true)}
                </TableCell>
                <TableCell>{contact.preferredContactMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
