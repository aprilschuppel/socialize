import InteractionLog from "../../components/InteractionLog";
import { fetchContactInteractions } from "../../lib/data";
import { notFound } from "next/navigation";
import { Interaction } from "@/app/lib/definitions";


export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const contactId = params.id;
  const interactionsArray = await Promise.all([fetchContactInteractions(contactId)]);
   const interactions = interactionsArray.flat() as Interaction[];

  if (!interactions) {
    notFound();
  }

  return (
    <div className='p-24'>
      <InteractionLog interactions={interactions}/>
    </div>
  );
}
