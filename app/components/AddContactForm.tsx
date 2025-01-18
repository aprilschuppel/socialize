"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createContact, State } from "../lib/actions";

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
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder=""
          className="w-full rounded border px-3 py-2"
        />
        <input
          type="text"
          name="location"
          placeholder=""
          className="w-full rounded border px-3 py-2"
        />
        <textarea
          name="notes"
          placeholder=""
          className="w-full rounded border px-3 py-2"
        />
        <Button type="submit">Add contact!</Button>
      </form>
    </div>
  );
}
