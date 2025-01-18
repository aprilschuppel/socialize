"use client";
import { formatDateWithDaysSince, calculateAge } from "../lib/utils";
import SocialMediaLink from "./SocialLink";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Contact } from "../lib/definitions";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactProfile({ contact }: { contact: Contact }) {
  console.log(contact);
  return (
    <div className="bg-white p-24 flex min-h-screen flex-col items-center justify-top">
      <Card className="w-4/5">
        <CardContent>
          <div className="">
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              {/* Contact name and image */}
              <div className="flex lg:col-span-2 lg:pr-8">
                <Avatar className="size-24 border-2">
                  <AvatarImage
                    src={contact.photo}
                    alt={`${contact.name} Photo`}
                    className="object-cover"
                  />
                  <AvatarFallback></AvatarFallback>
                </Avatar>
                <div className="pl-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {contact.name}
                  </h1>
                  <div className="text-sm">
                    {`Birthday: ${calculateAge(
                      new Date(contact.birthday),
                      true
                    )}`}
                  </div>
                  {contact && contact.interests && contact.interests.length > 0 ? (
                    <div>
                        {contact.interests.map((interest) => (
                        <Badge key={interest} className="mr-2">
                          {interest}
                        </Badge>
                      ))}
                      </div>
                  ) : null}
                  
                </div>
              </div>

              <div></div>

              {/* Description and details */}
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <div className="pl-4">
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900 whitespace-pre-line">
                        {contact.notes}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    {/* <h3 className="text-md font-bold text-gray-900">
                      Interests
                    </h3>
                    <div className="text-base text-gray-900">
                      <ul role="list" className="list-disc pl-4">
                        {contact.interests.map((interest) => (
                          <li key={interest}>{interest}</li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Contact sidebar */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Contact information</h2>
                <p className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {contact.location}
                </p>
                <div>
                  <b>Last contact:</b>{" "}
                  {formatDateWithDaysSince(new Date(contact.lastContact))}
                </div>

                {contact && contact.links && contact.links.length > 0 ? (
                  <div className="mt-4 ">
                    <h3 className="text-lg font-bold mt-2">Social Media</h3>

                    {contact.links.map((link: any) => (
                      <div key={link.platform}>
                        <SocialMediaLink
                          platform={link.platform}
                          link={link.link}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                {/* <div className="mt-2">
                  <h3 className="text-lg font-bold">Groups</h3>
                  <ul role="list" className="list-disc pl-4">
                    {contact.groups.map((group) => (
                      <li key={group}>{group}</li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
