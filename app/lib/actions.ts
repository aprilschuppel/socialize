// 'use server';

// import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

// // const FormSchema = z.object({
// //   id: z.string(),
// //   customerId: z.string({
// //     invalid_type_error: 'Please select a customer.',
// //   }),
// //   amount: z.coerce
// //     .number()
// //     .gt(0, { message: 'Please enter an amount greater than $0.' }),
// //   status: z.enum(['pending', 'paid'], {
// //     invalid_type_error: 'Please select an invoice status.',
// //   }),
// //   date: z.string(),
// // });

// const linksSchema = z.object({
//     link: z.string(),
//     platform: z.string()
// });

// const FormSchema = z.object({
//   id: z.number(),
//   name: z.string({
//         invalid_type_error: 'Please enter a name.',
//       }),
//   photo: z.string(),
//   notes: z.string(),
//   birthday: z.string(),
//   location: z.string(),
//   preferredContactMethod: z.string(),
//   lastContact: z.string(),
//   targetFrequencyDays: z.number(),
//   favorite: z.boolean(),
//   interests: z.array(z.string()),
//   links: z.record(linksSchema)
// });



// const CreateContact = FormSchema.omit({ id: true });
// // const UpdateInvoice = FormSchema.omit({ date: true, id: true });

// export type State = {
//   errors?: {
//     name?: string[];
//   };
//   message?: string | null;
// };

// // export async function createContactSimple(formData: FormData) {
// //   const validatedFields = CreateContact.safeParse({
// //       name: formData.get('name'),
// //       notes: formData.get('notes'),
// //   });

// //   const data = validatedFields.data;

// //   try {
// //     await sql`
// //     INSERT INTO public.contacts (name, notes)
// //     VALUES (${data.name}, ${data.notes} )
// //     `; 
// //   } catch (error) {
// //     return {
// //       message: 'Database Error: Failed to Create Contact.',
// //     };
// //   }

// //   // Revalidate the cache for the page and redirect the user.
// //   revalidatePath('/');
// //   redirect('/');
// // }

// // export async function createContact(prevState: State, formData: FormData) {
// //   // Validate form fields using Zod
// //   const validatedFields = CreateContact.safeParse({
// //     name: formData.get('name'),
// //     // photo: formData.get('photo'),
// //     notes: formData.get('notes'),
// //     // birthday: formData.get('birthday'),
// //     // location: formData.get('location'),
// //     // preferredContactMethod: formData.get('preferredContactMethod'),
// //     // lastContact: formData.get('lastContact'),
// //     // targetFrequencyDays: formData.get('targetFrequencyDays'),
// //     // favorite: formData.get('favorite'),
// //     // interests: formData.get('interests'),
// //     // links: formData.get('links'),
// //   });

// //   // If form validation fails, return errors early. Otherwise, continue.
// //   if (!validatedFields.success) {
// //     return {
// //       errors: validatedFields.error.flatten().fieldErrors,
// //       message: 'Missing Fields. Failed to Create Contact.',
// //     };
// //   }

// //   // Prepare data for insertion into the database
// //   const validatedData = validatedFields.data;

// //   // Insert data into the database
// //   try {
// //     await sql`
// //       INSERT INTO contacts (name, notes)
// //       VALUES (${validatedData.name}, ${validatedData.notes})
// //     `;
// //   } catch (error) {
// //     return {
// //       message: 'Database Error: Failed to Create Contact.',
// //     };
// //   }

// //   // Revalidate the cache for the page and redirect the user.
// //   revalidatePath('/');
// //   redirect('/');
// // }


// // // await sql`
// // // INSERT INTO contacts (name, photo, notes, birthday, location, preferredContactMethod, lastContact, targetFrequencyDays, favorite, interests, links)
// // // VALUES (${validatedData.name}, ${validatedData.photo}, ${validatedData.notes}, ${validatedData.birthday}, ${validatedData.location}, ${validatedData.preferredContactMethod}, ${validatedData.lastContact}, ${validatedData.targetFrequencyDays}, ${validatedData.favorite}, ${validatedData.interests}, ${validatedData.links})
// // // `;