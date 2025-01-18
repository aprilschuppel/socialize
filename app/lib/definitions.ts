export type Contact = {
    id: number;
    name: string;
    photo: string;
    notes: string;
    birthday: string;
    location: string;
    preferredContactMethod: string;
    lastContact: string;
    targetFrequencyDays: number;
    favorite: boolean;
    interests: string[];
    links: any;
};

// Represents a person in your network
export type Person = {
    id: string;
    name: string;
    photo?: string; // Optional profile photo URL
    preferredContact: 'LinkedIn' | 'Twitter' | 'Email' | 'Text' | 'Other'; // Preferred way to contact this person
    socialMediaLinks?: { [platform: string]: string }; // Links to various social media platforms
    groups?: string[]; // IDs of groups this person belongs to
    notes?: string; // Any notes about this person
    interactions?: Interaction[]; // History of interactions with this person
    lastContacted?: Date; // Date of last interaction
    location?: string; // Person's location
    personality?: string; // Description of their personality
    interests?: string[]; // List of their interests
    organizations?: string[]; // IDs of organizations this person belongs to
  };
  
  // Represents an interaction with a person
  export type Interaction = {
    date: Date; // Date of the interaction
    type: 'Meeting' | 'Message' | 'Call' | 'Other'; // export type of interaction
    platform?: 'LinkedIn' | 'In-person' | 'Phone' | 'Email' | 'Other'; // Platform where the interaction occurred
    notes?: string; // Any notes about the interaction
  };
  
  // Represents an event (e.g., conference, meetup)
  export type CalendarEvent = {
    id: string;
    name: string;
    date: Date; // Date of the event
    location?: string; // Location of the event
    attendees?: string[]; // IDs of people attending the event
    topics?: string[]; // IDs of topics related to the event
    organizations?: string[]; // IDs of organizations hosting or involved in the event
  };
  
  // Represents a reminder to follow up with a person
  export type Reminder = {
    id: string;
    personId: string; // ID of the person to follow up with
    date: Date; // Date of the reminder
    note?: string; // Note about the reminder
  };
  
  // Represents a group of people (e.g., "Hackathon Buddies", "Colleagues")
  export type Group = {
    id: string;
    name: string;
    members?: string[]; // IDs of people in the group
  };
  
  // Represents a topic of interest (e.g., "AI", "Web Development")
  export type Topic = {
    id: string;
    name: string;
  };
  
  // Represents an organization (e.g., company, community group)
  export type Organization = {
    id: string;
    name: string;
    members?: string[]; // IDs of people in the organization
  };