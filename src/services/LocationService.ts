// Single Responsibility Principle - Serviço focado apenas em geolocalização
// Interface Segregation Principle - Interface específica para localização

import type { LocationCoordinates, LocationService, LocationData } from '../types';

// Implementação concreta do serviço de geolocalização
export class GeolocationService implements LocationService {
  async getCurrentLocation(): Promise<LocationCoordinates> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocalização não é suportada neste navegador'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(new Error(`Erro ao obter localização: ${error.message}`));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutos
        }
      );
    });
  }

  async getCityFromCoordinates(coordinates: LocationCoordinates): Promise<string> {
    try {
      const { latitude, longitude } = coordinates;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
      );
      
      if (!response.ok) {
        throw new Error('Erro ao buscar informações de localização');
      }
      
      const data: LocationData = await response.json();
      
      // Prioriza cidade, depois vila, depois town
      const city = data.address?.city || 
                   data.address?.village || 
                   data.address?.town || 
                   'Sua Cidade';
      
      return city;
    } catch (error) {
      console.error('Erro ao obter cidade:', error);
      return 'Sua Cidade'; // Fallback
    }
  }
}