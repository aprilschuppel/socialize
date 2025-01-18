import ContactProfile from "../../components/ContactProfile";
import { fetchContactDetails, fetchContactInteractions } from "../../lib/data";
import { notFound } from "next/navigation";
import { Interaction } from "@/app/lib/definitions";

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
    <div>
      <ContactProfile contact={contact} interactions={interactions} />
    </div>
  );
}
