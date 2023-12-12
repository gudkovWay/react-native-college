import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://qqnaertskvtuojcsgpin.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbmFlcnRza3Z0dW9qY3NncGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzOTExMTYsImV4cCI6MjAxNzk2NzExNn0.c_ZRoHUKEb3Zz35R5_vcKDv74fZMFs0wWTeZcRbbBQ4"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)