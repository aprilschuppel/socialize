import { calculateAge } from "../lib/utils";
import { Badge } from "@/components/ui/badge";
import { Contact } from "../lib/definitions";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Interaction } from "../lib/definitions";
import ContactInteractionLog from "./InteractionLog";
import { SocialIcon } from "react-social-icons";

export default function ContactProfile({
  contact,
  interactions,
}: {
  contact: Contact;
  interactions: Interaction[];
}) {
  console.log(contact);
  return (
    <Card className="p-4">
      <CardHeader className="flex flex-row">
        <div className="flex basis-3/4">
          <div>
            <div className="text-5xl font-bold tracking-tighter text-coolors-emerald-300">
              {contact.name}
            </div>
            <div className="text-sm my-2 ms-2">
              {`Birthday: ${calculateAge(new Date(contact.birthday), true)}`}
            </div>
            <div className="flex-auto mt-2">
              {contact && contact.interests && contact.interests.length > 0 ? (
                <div>
                  {contact.interests.map((interest) => (
                    <Badge
                      key={interest}
                      className="ms-2 bg-coolors-lavender_blush-200 border-none"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="mt-4 text-xs ms-2 w-3/4">{contact.notes}</div>
          </div>
        </div>
        <div className="flex basis-1/4 content-center">
          <Avatar className="size-48 content-end">
            <AvatarImage
              src={contact.photo}
              alt={`${contact.name} Photo`}
              className="object-cover"
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row">
        <div className="flex basis-3/4">
          <ContactInteractionLog interactions={interactions} />
        </div>
        <div className="flex basis-1/4 justify-center content-center">
        {contact && contact.links && contact.links.length > 0 ? (
              <div className="space-x-2">
                {contact.links.map((link) => (
                  <SocialIcon
                    key={link.platform}
                    url={link.link}
                    style={{ height: 40, width: 40 }}
                    bgColor="#177650"
                    className=""
                  />
                ))}
              </div>
            ) : null}
        </div>
      </CardContent>

    </Card>
  );
}
