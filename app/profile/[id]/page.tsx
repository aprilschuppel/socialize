import InteractionLog from "@/app/components/InteractionLog";
import ContactProfile from "../../components/ContactProfile";
import { fetchContactDetails, fetchContactInteractions } from "../../lib/data";
import { notFound } from "next/navigation";
import { Interaction } from "@/app/lib/definitions";
import { Card, CardContent } from "@/components/ui/card";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const id = params.id;
  const [contact, interactionsArray] = await Promise.all([
    fetchContactDetails(id),
    fetchContactInteractions(id),
  ]);
  const interactions = interactionsArray.flat() as Interaction[];
  console.log(interactions);

  if (!contact) {
    notFound();
  }

  return (
    <div className="pt-20">
      <div className="bg-white flex min-h-screen flex-col items-center justify-top">
        <Card className="w-4/5">
          <CardContent>
            <ContactProfile contact={contact} />
            <br/>
            <hr/>
            <br/>
            <div className="mx-auto px-4 pb-16 pt-10">
            <span className='font-bold text-4xl'>Interactions</span>
            <InteractionLog interactions={interactions} />
            </div>
            
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
