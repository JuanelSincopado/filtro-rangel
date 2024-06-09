
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mssxqvdicwgkjerhnoap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zc3hxdmRpY3dna2plcmhub2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzEwNDU5MiwiZXhwIjoyMDMyNjgwNTkyfQ.-dx98-xIbBHwUdoZT9qesR-0yoeg-ZaCNzBkE836mXo')

export default supabase;