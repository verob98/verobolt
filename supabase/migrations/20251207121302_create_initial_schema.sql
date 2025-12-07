/*
  # Create IT Services Website Schema

  1. New Tables
    - `service_requests`
      - `id` (uuid, primary key)
      - `service_type` (text) - Type of service requested
      - `client_name` (text) - Client's full name
      - `client_phone` (text) - Client's phone number
      - `client_email` (text) - Client's email address
      - `problem_description` (text) - Description of the problem
      - `status` (text) - Request status: 'pending', 'in_progress', 'completed'
      - `created_at` (timestamptz) - Request creation timestamp
      
    - `tips`
      - `id` (uuid, primary key)
      - `title` (text) - Tip title
      - `description` (text) - Brief description
      - `full_description` (text) - Complete description
      - `youtube_url` (text) - YouTube video URL
      - `thumbnail_url` (text) - Thumbnail image URL
      - `category` (text) - Tip category (hardware, software, security, etc.)
      - `created_at` (timestamptz) - Creation timestamp
      - `views` (integer) - View counter
      
  2. Security
    - Enable RLS on both tables
    - Public read access for tips
    - Public insert access for service_requests
    - Authenticated admin access for managing tips
*/

-- Create service_requests table
CREATE TABLE IF NOT EXISTS service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL,
  client_name text NOT NULL,
  client_phone text NOT NULL,
  client_email text NOT NULL,
  problem_description text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create tips table
CREATE TABLE IF NOT EXISTS tips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  full_description text NOT NULL,
  youtube_url text NOT NULL,
  thumbnail_url text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now(),
  views integer DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE tips ENABLE ROW LEVEL SECURITY;

-- RLS Policies for service_requests
CREATE POLICY "Anyone can create service requests"
  ON service_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view service requests"
  ON service_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for tips
CREATE POLICY "Anyone can view tips"
  ON tips
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can create tips"
  ON tips
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update tips"
  ON tips
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete tips"
  ON tips
  FOR DELETE
  TO authenticated
  USING (true);