export interface LaunchDataEntryProps {
  crew: null;
  details: string;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_failure_details: {
      time: number;
      altitude: number | null;
      reason: string;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  launch_window: number;
  launch_year: string;
  links?: {
      mission_patch: string;
      mission_patch_small: string;
      reddit_campaign: null;
      reddit_launch: null;
      reddit_recovery: null;
      video_link: string;
  };
  mission_id: never[];
  mission_name: string;
  rocket: {
      rocket_id: string;
      rocket_name: string;
      rocket_type: string;
  };
  ships: never[];
  static_fire_date_unix: number | null;
  static_fire_date_utc: string | null;
  tbd: boolean;
  telemetry: {
      flight_club: null;
  };
  tentative_max_precision: string;
  timeline: {
      webcast_liftoff: number;
  };
  upcoming: boolean;
}
