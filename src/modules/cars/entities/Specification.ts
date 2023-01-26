import { v4 as uuidv4 } from 'uuid';

class Specification {
  id: string;
  name: string;
  description: string;
  created_at: Date;
}

export { Specification }