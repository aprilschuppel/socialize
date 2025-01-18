"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createContact, State } from "../lib/actions";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  "Call",
  "Text",
  "Email",
  "LinkedIn",
  "Instagram",
  "Other",
];

export function AddContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, setState] = useState(initialState);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    // Log form data (optional)
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    const newState = await createContact(state, formData);

    setState(newState);
  };

  return (
    <Card className='mx-24 p-4'>
        <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <label className='font-bold'>
              Name
              <input
                type="text"
                name="name"
                placeholder=""
                className="w-full rounded border px-3 py-2"
              />
            </label>
            <label className='font-bold'>
              Location
              <input
                type="text"
                name="location"
                placeholder=""
                className="w-full rounded border px-3 py-2"
              />
            </label>
            <label className='font-bold'>
              Photo
              <input
                type="text"
                name="photo"
                placeholder=""
                className="w-full rounded border px-3 py-2"
              />
            </label>
          </div>

          <div className="w-full">
            
            <label className='font-bold'>
              Notes
              <textarea
                name="notes"
                placeholder=""
                className="w-full rounded border px-3 py-2 h-24 "
              />
            </label>

            <label className='font-bold'>
              Last Contact
              <input
                type="text"
                name="lastContact"
                placeholder=""
                className="w-full rounded border px-3 py-2"
              />
            </label>
            <label className='font-bold'>
              Preferred Contact Method
              <select className='border-2' name='preferredContactMethod'>
                {contactMethods.map((method, index) => (
                  <option key={index} value={method.toLowerCase()}>{method}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <Button type="submit">Add contact!</Button>
      </form>
        </CardContent>
    </Card>
  );
}
