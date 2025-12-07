import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ServiceRequest {
  id?: string;
  service_type: string;
  client_name: string;
  client_phone: string;
  client_email: string;
  problem_description: string;
  status?: string;
  created_at?: string;
}

export interface Tip {
  id?: string;
  title: string;
  description: string;
  full_description: string;
  youtube_url: string;
  thumbnail_url: string;
  category: string;
  created_at?: string;
  views?: number;
}
