
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabase_client_for_Org_schema = (org_id) =>
  createClient(supabaseUrl, serviceRoleKey, {
    db: {
      schema: `organization_${org_id}`,
    },
  });
