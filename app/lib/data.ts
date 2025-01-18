import { sql } from "@vercel/postgres";
import { Contact, Interaction } from "./definitions";

export async function fetchContacts() {
  try {
    const data = await sql<Contact>`
          SELECT *
          FROM contacts
          ORDER BY name ASC
        `;

    const contacts = data.rows;
    return contacts;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all contacts.");
  }
}

export async function fetchInteractions() {
  try {
    const data = await sql`
          SELECT *
          FROM contact_interactions
          ORDER BY date DESC
        `;

    const interactions = data.rows;
    return interactions;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all interactions.");
  }
}


export async function fetchContactDetails(id: number) {
  try {
    const data = await sql<Contact>`
            SELECT *
            FROM contacts
            WHERE "id" = ${id}
          `;

    const contact = data.rows.map((contact) => ({
      ...contact,
      notes: contact.notes.replace(/&apos;/g, "'"),
    }));

    return contact[0];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch the contact with id ${id}.`);
  }
}

export async function fetchContactInteractions(contactId: number) {
  console.log('Id in fetchContactItneractions: ', contactId);
  try {
    const data = await sql<Interaction>`
            SELECT *
            FROM interactions
            WHERE "contactId" = ${contactId}
            ORDER BY date DESC
          `;

    const interactions = data.rows.map((interaction) => ({
      ...interaction,
      notes: interaction.notes.replace(/&apos;/g, "'"),
    }));

    return interactions;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch the interactions with contactId ${contactId}.`);
  }
}
