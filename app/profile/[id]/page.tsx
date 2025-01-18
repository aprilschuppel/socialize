import ContactProfile from "../../components/ContactProfile";
import { fetchContactDetails } from "../../lib/data";
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const id = params.id;
    const contact = await Promise.all([
      fetchContactDetails(id)
    ]);
  
    if (!contact) {
      notFound();
    }

    return (
        <div>
            <ContactProfile contact={contact[0]} />
        </div>
    )
}

// export default async function Page(props: { params: Promise<{ id?: number }> }) {
//     const params = await props.params;
//     const id = params.id;
//     const contact = await Promise.all([fetchContactDetails(id)]);
  
//     // Check if the contact exists
//     if (!contact[0]) {
//       notFound();
//     }
  
//     // If no contact is found, define a default contact
//     const defaultContact = {
//       // Provide default values for the properties you need
//       id: null,
//       name: "Guest",
//       // ... other default values
//     };
  
//     // Use the default contact if no contact was found
//     const contactToUse = contact[0] ?? defaultContact;
  
//     return (
//       <div>
//         <ContactProfile contact={contactToUse} />
//       </div>
//     );
//   }