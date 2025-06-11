import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://nnceklxlpwvjmezeslye.supabase.co"
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uY2VrbHhscHd2am1lemVzbHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTIzMTEsImV4cCI6MjA2NTA2ODMxMX0.zMma0LqqlL-eTgwzbe3hlUGS1JpoFMF1KSrvCe8-J3E"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
