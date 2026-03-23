-- =============================================
-- Database Webhook for Booking Notifications
-- Run AFTER deploying the notify-booking edge function
-- =============================================

-- Option 1: Use Supabase Dashboard > Database > Webhooks
-- Create webhook:
--   Name: notify-new-booking
--   Table: bookings
--   Events: INSERT
--   Type: Supabase Edge Function
--   Function: notify-booking

-- Option 2: Use pg_net extension (if available)
-- This triggers the edge function on every new booking insert

CREATE OR REPLACE FUNCTION notify_new_booking()
RETURNS trigger AS $$
DECLARE
  payload jsonb;
  edge_url text;
BEGIN
  payload := jsonb_build_object(
    'type', 'INSERT',
    'table', 'bookings',
    'record', row_to_json(NEW)
  );

  edge_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/notify-booking';

  PERFORM net.http_post(
    url := edge_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := payload
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_new_booking
  AFTER INSERT ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_booking();
