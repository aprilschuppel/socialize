'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  name: z.string(),
  location: z.string(),
  notes: z.string(),
});

const CreateContact = FormSchema;

export type State = {
  errors?: {name?: string[], location?: string[], notes?: string[]}
  message?: string | null;
};

export async function createContact(
  prevState: State,
  formData: FormData
): Promise<State> {
  console.log('createContact called'); // Debugging statement

  // Validate form fields using Zod
  const validatedFields = CreateContact.safeParse({
    name: formData.get('name'),
    location: formData.get('location'),
    notes: formData.get('notes'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log('Validation failed', validatedFields.error.flatten().fieldErrors); // Debugging statement
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing username or guess.',
    };
  }

  // Prepare data for insertion into the database
  const data = validatedFields.data;

  // Insert data into the database
  try {
    await sql`
      INSERT INTO public.contact_test (name, location, notes)
      VALUES (${data.name}, ${data.location}, ${data.notes});
    `;
    console.log('Data inserted successfully'); // Debugging statement
  } catch (error) {
    console.error('Database error:', error); // Debugging statement
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Contact.',
    };
  }

  // Revalidate the cache for the home page and redirect the user.
  revalidatePath('/');
  redirect('/');
}