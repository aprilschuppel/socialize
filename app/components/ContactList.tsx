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

// const contacts = [
//     {
//       id: "CT001",
//       headshot: "https://cdn.jsdelivr.net/gh/alohe/memojis/png/vibrent_1.png",
//       name: "Alice Wonderland",
//       preferredContact: "Email",
//       notes: "Met at the Mad Hatter's tea party. Loves riddles and talking to rabbits.",
//       lastContacted: "2023-10-31",
//       groups: ["Wonderland Crew"],
//     },
//     {
//       id: "CT002",
//       headshot: "https://cdn.jsdelivr.net/gh/alohe/memojis/png/toon_4.png",
//       name: "Bob The Builder",
//       preferredContact: "Phone",
//       notes: "Can fix anything. Always has a can-do attitude.",
//       lastContacted: "2024-01-05",
//       groups: ["Construction Contacts"],
//     },
//     {
//       id: "CT003",
//       headshot: "https://cdn.jsdelivr.net/gh/alohe/memojis/png/upstream_12.png",
//       name: "Carmen Sandiego",
//       preferredContact: "Telegram",
//       notes: "World traveler. Hard to pin down, but always leaves a red hat behind.",
//       lastContacted: "2023-12-25",
//       groups: ["Globetrotters"],
//     },
//     {
//       id: "CT004",
//       headshot: "https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png",
//       name: "Dora The Explorer",
//       preferredContact: "Instagram",
//       notes: "Loves adventures and exploring new places. Always has her trusty map and backpack.",
//       lastContacted: "2024-01-10",
//       groups: ["Adventure Buddies"],
//     }
//   ];

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
