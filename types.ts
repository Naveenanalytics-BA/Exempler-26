
export interface Speaker {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Event {
  time: string;
  title:string;
  description: string;
  type: 'workshop' | 'seminar' | 'competition';
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Organizer {
    name: string;
    role: string;
    imageUrl: string;
}
