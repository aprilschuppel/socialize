"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  name: z.string(),
  location: z.string(),
  photo: z.string(),
  notes: z.string(),
  lastContact: z.string(),
  preferredContactMethod: z.string(),
});

const ContactSchema = z.object({
  name: z.string(),
  photo: z.string().nullable(),
  notes: z.string().nullable(),
  birthday: z.date().nullable(),
  location: z.string().nullable(),
  preferredContactMethod: z.string().nullable(),
  lastContact: z.date().nullable(),
  targetFrequencyDays: z.number().nullable(),
});

const CreateContact = FormSchema;

export type State = {
  errors?: { name?: string[]; location?: string[]; notes?: string[] };
  message?: string | null;
};

export async function createContact(
  prevState: State,
  formData: FormData
): Promise<State> {
  console.log("createContact called"); // Debugging statement

  // Validate form fields using Zod
  const validatedFields = CreateContact.safeParse({
    name: formData.get("name"),
    location: formData.get("location"),
    photo: formData.get("photo"),
    notes: formData.get("notes"),
    lastContact: formData.get("lastContact"),
    preferredContactMethod: formData.get("preferredContactMethod"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log(
      "Validation failed",
      validatedFields.error.flatten().fieldErrors
    ); // Debugging statement
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing username or guess.",
    };
  }

  // Prepare data for insertion into the database
  const data = validatedFields.data;
  console.log(data);

  // Insert data into the database
  try {
    await sql`
      INSERT INTO public.contacts (name, location, photo, notes, "lastContact", "preferredContactMethod")
      VALUES (${data.name}, ${data.location}, ${data.photo}, ${data.notes}, ${data.lastContact}, ${data.preferredContactMethod});
    `;
    console.log("Data inserted successfully"); // Debugging statement
  } catch (error) {
    console.error("Database error:", error); // Debugging statement
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Contact.",
    };
  }

  // Revalidate the cache for the home page and redirect the user.
  revalidatePath("/");
  redirect("/");
}

export async function createNewContact(
  prevState: State,
  formData: FormData
): Promise<State> {
  console.log("createContact called"); // Debugging statement

  // Validate form fields using Zod
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    photo: formData.get("photo"),
    notes: formData.get("notes"),
    birthday: formData.get("birthday")
      ? new Date(formData.get("birthday") as string)
      : null,
    location: formData.get("location"),
    preferredContactMethod: formData.get("preferredContactMethod"),
    lastContact: formData.get("lastContact")
      ? new Date(formData.get("lastContact") as string)
      : null,
    targetFrequencyDays: formData.get("targetFrequencyDays"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log(
      "Validation failed",
      validatedFields.error.flatten().fieldErrors
    ); // Debugging statement
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing username or guess.",
    };
  }

  // Prepare data for insertion into the database
  const data = validatedFields.data;

  // Insert data into the database
  try {
    await sql`
      INSERT INTO contacts (name, photo, notes, birthday, location, preferredContactMethod, lastContact, targetFrequencyDays)
      VALUES (${data.name}, ${data.photo}, ${data.notes}, ${
        data.birthday ? data.birthday.toISOString() : null
      }, ${data.location}, ${data.preferredContactMethod}, ${
        data.lastContact ? data.lastContact.toISOString() : null
      }, ${data.targetFrequencyDays});
    `;
    console.log("Data inserted successfully"); // Debugging statement
  } catch (error) {
    console.error("Database error:", error); // Debugging statement
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Contact.",
    };
  }

  // Revalidate the cache for the home page and redirect the user.
  revalidatePath("/");
  redirect("/");
}
