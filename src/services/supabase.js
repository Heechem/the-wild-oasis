import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ewfbnthuhteqagzyuxke.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZmJudGh1aHRlcWFnenl1eGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5MzU1NTQsImV4cCI6MjAwNjUxMTU1NH0.63j7ioPtck4ZrMcO-spuzLln01ZTKF_cD7qz6aplr6c';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
