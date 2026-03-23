-- =============================================
-- PSYCHO Quest Booking System - Database Setup
-- Run this in Supabase SQL Editor
-- =============================================

-- Rooms table
CREATE TABLE rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name_en text NOT NULL,
  name_ro text NOT NULL,
  name_ru text NOT NULL,
  capacity_min int NOT NULL DEFAULT 2,
  capacity_max int NOT NULL DEFAULT 10,
  duration_minutes int NOT NULL DEFAULT 60,
  fear_level int NOT NULL DEFAULT 3,
  has_actors boolean NOT NULL DEFAULT true,
  image_url text,
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES rooms(id),
  booking_date date NOT NULL,
  time_slot text NOT NULL,
  customer_name text,
  phone text NOT NULL,
  email text,
  players int NOT NULL DEFAULT 2,
  message text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  lang text NOT NULL DEFAULT 'ru',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for fast availability lookups
CREATE INDEX idx_bookings_date_room ON bookings(booking_date, room_id) WHERE status != 'cancelled';

-- Enable RLS
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Public can read rooms
CREATE POLICY "rooms_public_read" ON rooms FOR SELECT USING (true);

-- Public can insert bookings (customers booking)
CREATE POLICY "bookings_public_insert" ON bookings FOR INSERT WITH CHECK (true);

-- Public can read bookings (for availability checking)
CREATE POLICY "bookings_public_read" ON bookings FOR SELECT USING (true);

-- Authenticated users (admin) can update bookings (confirm/cancel)
CREATE POLICY "bookings_admin_update" ON bookings FOR UPDATE USING (auth.role() = 'authenticated');

-- Seed rooms
INSERT INTO rooms (slug, name_en, name_ro, name_ru, capacity_min, capacity_max, duration_minutes, fear_level, has_actors, image_url, sort_order) VALUES
  ('experiment', 'The Experiment', 'Experimentul', 'Эксперимент', 2, 10, 60, 4, true, 'images/experiment.jpg', 1),
  ('wrong-turn', 'Wrong Turn', 'Drum Gresit', 'Неверный поворот', 2, 10, 60, 5, true, 'images/wrong-turn.png', 2),
  ('horror-cinema', 'Horror Cinema', 'Cinema Horror', 'Хоррор Кинотеатр', 2, 10, 90, 5, true, 'images/horror-cinema.jpg', 3);
