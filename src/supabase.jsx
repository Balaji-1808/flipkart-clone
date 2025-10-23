import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dkthsvipphvjbutjmdkx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrdGhzdmlwcGh2amJ1dGptZGt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1OTYyMTksImV4cCI6MjA3NjE3MjIxOX0.g69DoeK3tmFtfQaFXxL-E5ROwMy5R5ZqEqcEETJA4fI'
        

if (!supabaseKey) {
  throw new Error("Missing Supabase Key");
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;