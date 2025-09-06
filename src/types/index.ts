// Interface Segregation Principle - Interfaces específicas e focadas

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

export interface LocationAddress {
  city?: string;
  village?: string;
  town?: string;
}

export interface LocationData {
  address: LocationAddress;
}

export interface LocationService {
  getCurrentLocation(): Promise<LocationCoordinates>;
  getCityFromCoordinates(coordinates: LocationCoordinates): Promise<string>;
}

export interface LocationState {
  city: string;
  isLoading: boolean;
  error: string | null;
}

export interface LocationHook {
  locationState: LocationState;
  refreshLocation: () => Promise<void>;
}

export interface ComponentProps {
  className?: string;
}

export interface TitleProps extends ComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'medium' | 'large';
}