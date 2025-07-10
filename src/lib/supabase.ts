import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqcpyxazdckiepoxhukm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xY3B5eGF6ZGNraWVwb3hodWttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNzE2MTcsImV4cCI6MjA1MTk0NzYxN30.DxZpzq8X2DLr6yGKPHLPLxGLMJPGk6kKOCMKBPmfGNE' // This should be your public anon key

export const supabase = createClient(supabaseUrl, supabaseKey)

export type UserRole = 'customer' | 'admin'

export interface UserProfile {
  id: string
  email: string
  role: UserRole
  created_at: string
}