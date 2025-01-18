import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dotenv from 'dotenv';

dotenv.config();

const FormSchema = z.object({
    id: z.number(),
    name: z.string(),
    location: z.string(),
    notes: z.string(),
});

const CreateContact = FormSchema.omit({id: true});

export type State = {
    errors?: {
        name?: string[];
        location?: string[];
        notes?: string[];
    };
    message?: string | null;
};

export async function createContact(prevState: State, formData: FormData) {
    // const client = await db.connect();
    
    console.log(process.env.DATABASE_URL);
    // validate fields
    const validatedFields = CreateContact.safeParse({
        name: formData.get('name'),
        location: formData.get('location'),
        notes: formData.get('notes'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        console.error('Validation failed:', validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Contact.',
        };
    }

    // Prepare to insert data
    const { name, location, notes } = validatedFields.data;

    // Insert data
    try {
        await sql`
        INSERT INTO public.contact_test ("name", "location", "notes")
        VALUES (${name}, ${location}, ${notes});
        `;
        console.log('Contact created successfully:', { name, location, notes });
    } catch (error) {
        console.error('Database error:', error);
        return {
            message: 'Database Error: Failed to Create Contact'
        };
    }

    revalidatePath('/');
    redirect('/');
}


// INSERT INTO public.contact_test ("name", "location", "notes")
//             VALUES (${name}, ${location}, ${notes})