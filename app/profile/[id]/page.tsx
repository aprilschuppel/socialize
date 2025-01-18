import ContactProfile from "../../components/ContactProfile";
import { fetchContactDetails } from "../../lib/data";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;
  const id = params.id;
  const contact = await Promise.all([fetchContactDetails(id)]);

  if (!contact) {
    notFound();
  }

  return (
    <div className="pt-20">
      <ContactProfile contact={contact[0]} />
    </div>
  );
}
