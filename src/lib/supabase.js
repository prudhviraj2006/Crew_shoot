import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rcabfhrsvprgsrypuexe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjYWJmaHJzdnByZ3NyeXB1ZXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMjMyMDcsImV4cCI6MjA4OTU5OTIwN30.MANQWHXO9eg01eE7F2y4nMGK7XQQxerN5-8057baeQY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
