import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sassfvpruzplpxycxfix.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_5CfNGUqn0S147VTcfB2d7g_3fBlVFl7';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
