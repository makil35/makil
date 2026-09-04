CREATE TABLE public.site_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event text NOT NULL,
  path text,
  referrer text,
  session_id text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX site_events_created_at_idx ON public.site_events (created_at DESC);
CREATE INDEX site_events_event_idx ON public.site_events (event);

GRANT INSERT ON public.site_events TO anon;
GRANT INSERT, SELECT ON public.site_events TO authenticated;
GRANT ALL ON public.site_events TO service_role;

ALTER TABLE public.site_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record an event"
ON public.site_events FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(event) <= 60
  AND (path IS NULL OR length(path) <= 300)
  AND (referrer IS NULL OR length(referrer) <= 300)
  AND (session_id IS NULL OR length(session_id) <= 60)
);

CREATE POLICY "Admins can read events"
ON public.site_events FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));