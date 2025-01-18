import { Card, CardTitle } from "@/components/ui/card";
import React from "react";
import { Interaction } from "../lib/definitions";

interface InteractionLogProps {
  interactions: Interaction[];
}

export default async function InteractionLog({
  interactions,
}: InteractionLogProps) {
  return (
    <Card className="p-4 shadow-none border-none">
      <div className="grid grid-cols-2 border-m gap-y-8">
        {interactions.map((interaction, index) => {
          const formattedDate = new Date(interaction.date).toLocaleDateString();

          return index % 2 === 0 ? (
            <div key={index} className="justify-items-end pl-4 col-span-2">
              <div></div>
              <Card className="w-1/2 p-4 shadow-coolors-emerald">
                <CardTitle className="text-coolors-emerald-200 text-xl">
                  {formattedDate} - {interaction.type}
                </CardTitle>
                {interaction.notes}
              </Card>
            </div>
          ) : (
            <div key={index} className="justify-items-start pr-4 col-span-2">
              <Card className="w-1/2 p-4 shadow-coolors-emerald text-xl">
                <CardTitle className="text-coolors-emerald-200">
                  {formattedDate} - {interaction.type}
                </CardTitle>
                {interaction.notes}
              </Card>
              <div></div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
