"use client";

import Image from "next/image";
import { formatDateWithDaysSince } from "../lib/utils";
import SocialMediaLink from "./SocialLink";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const detailedContact = {
  id: "CT006",
  name: "Jane Doe",
  photo: "https://cdn.jsdelivr.net/gh/alohe/memojis/png/upstream_14.png",
  preferredContact: "LinkedIn",
  links: [
    { platform: "linkedin", url: "https://www.linkedin.com/" },
    { platform: "twitter", url: "https://twitter.com/" },
    { platform: "instagram", url: "https://www.instagram.com/" },
  ],
  groups: ["Tech Industry", "Startup Founders", "Mentorship Program"],
  notes: `
      - Met Jane at the "Future of Tech" conference in December.
      - She's the CEO of a promising startup called "Innovate."
      - Very passionate about AI and its potential to revolutionize healthcare.
      - Wants to connect with more developers to join her team.
      - Mentioned she's a big fan of sci-fi movies and enjoys hiking in her free time.
    `,
  interactions: [
    {
      date: "2024-01-10",
      type: "Meeting",
      platform: "In-person",
      notes:
        "Had a great conversation with Jane at the conference. Exchanged contact info and discussed potential collaboration opportunities.",
    },
    {
      date: "2024-01-15",
      type: "Message",
      platform: "LinkedIn",
      notes:
        "Sent Jane a follow-up message on LinkedIn, thanking her for the conversation and expressing my interest in learning more about Innovate.",
    },
  ],
  lastContacted: "2024-01-15",
  location: "San Francisco, CA",
  personality: "Enthusiastic, driven, visionary",
  interests: [
    "Artificial Intelligence",
    "Healthcare",
    "Startups",
    "Sci-fi movies",
    "Hiking",
  ],
};

export default function Example() {
  return (
    <div className="bg-white p-24 flex min-h-screen flex-col items-center justify-top">
      <Card className="w-4/5">
        <CardContent>
          <div className="">
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              {/* Contact name and image */}
              <div className="flex lg:col-span-2 lg:pr-8">
                <Image
                  src={detailedContact.photo}
                  alt={`${detailedContact.name} headshot`}
                  height={64}
                  width={64}
                />
                <div className="pl-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-2">
                    {detailedContact.name}
                  </h1>
                  {detailedContact.interests.map((interest) => (
                    <Badge key={interest} className="mr-2">
                      {interest}
                    </Badge>
                  ))}
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
                        {detailedContact.notes}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-md font-bold text-gray-900">
                      Interests
                    </h3>
                    <div className="text-base text-gray-900">
                      <ul role="list" className="list-disc pl-4">
                        {detailedContact.interests.map((interest) => (
                          <li key={interest}>{interest}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact sidebar */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Contact information</h2>
                <p className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                  {detailedContact.location}
                </p>
                <div>
                  <b>Last contact:</b>{" "}
                  {formatDateWithDaysSince(
                    new Date(detailedContact.lastContacted)
                  )}
                </div>
                <div className="mt-4 ">
                  <h3 className="text-lg font-bold mt-2">Social Media</h3>
                  {detailedContact.links.map((link) => (
                    <div key={link.url}>
                      <SocialMediaLink
                        platform={link.platform}
                        link={link.url}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-bold">Groups</h3>
                  <ul role="list" className="list-disc pl-4">
                    {detailedContact.groups.map((group) => (
                      <li key={group}>{group}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
