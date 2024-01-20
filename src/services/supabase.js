import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gaxqmpgizqegibilxiku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdheHFtcGdpenFlZ2liaWx4aWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MzczODksImV4cCI6MjAyMDIxMzM4OX0.Aq6WEJub7quiQTKmRfiJYcmMSDfeVR08560P7Ja8B1k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
