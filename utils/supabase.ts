import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://szifgsecudcbmscnlmow.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6aWZnc2VjdWRjYm1zY25sbW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzODQzNzYsImV4cCI6MjA1Mzk2MDM3Nn0.ld0t4StAur69_3arZD0nxFlnmwg1OSK8ey-XgazXEDg"
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})