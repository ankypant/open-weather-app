export interface AuthDetails {
  username: string;
  password: string;
}

export interface UserDetails {
  id: number;
  name: string;
  email: string;
  imageUrl?: string;
  website?: string;
  isAdmin: boolean;
}
