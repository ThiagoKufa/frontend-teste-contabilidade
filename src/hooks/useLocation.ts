// Single Responsibility Principle - Hook focado apenas em gerenciar estado de localização
// Dependency Inversion Principle - Depende da abstração LocationService

import { useState, useEffect, useCallback } from 'react';
import { GeolocationService } from '../services/LocationService';
import type { LocationHook, LocationState } from '../types';

const initialState: LocationState = {
  city: 'Sua Cidade',
  isLoading: true,
  error: null,
};

// Instância única do serviço para evitar recriação a cada render
const service = new GeolocationService();

export const useLocation = (): LocationHook => {
  const [locationState, setLocationState] = useState<LocationState>(initialState);

  const updateLocationState = useCallback((updates: Partial<LocationState>) => {
    setLocationState(prev => ({ ...prev, ...updates }));
  }, []);

  const fetchLocation = useCallback(async () => {
    try {
      updateLocationState({ isLoading: true, error: null });
      
      const coordinates = await service.getCurrentLocation();
      const city = await service.getCityFromCoordinates(coordinates);
      
      updateLocationState({ 
        city, 
        isLoading: false, 
        error: null 
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      
      updateLocationState({ 
        isLoading: false, 
        error: errorMessage,
        city: 'Sua Cidade' // fallback
      });
    }
  }, [updateLocationState]);

  const refreshLocation = useCallback(async () => {
    await fetchLocation();
  }, [fetchLocation]);

  useEffect(() => {
    fetchLocation();
  }, [fetchLocation]);

  return {
    locationState,
    refreshLocation,
  };
};