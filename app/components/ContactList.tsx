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
    <div className="bg-white flex min-h-screen flex-col items-center justify-top">
      <Card className="p-4">
        <CardHeader className='font-extrabold text-2xl'>Contact List</CardHeader>
        <CardContent>
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
                  <TableCell>
                    <Link href={`/profile/${contact.id}`}>{contact.name}</Link>
                  </TableCell>
                  <TableCell>{contact.preferredContactMethod}</TableCell>
                  <TableCell>{contact.notes}</TableCell>
                  <TableCell>
                    {formatDateWithDaysSince(
                      new Date(contact.lastContact),
                      true
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
