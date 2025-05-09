import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  private featureFlags: { [key: string]: boolean } = {
    'selling-options': true,
  };

  isFeatureEnabled(feature: string): boolean {
    return this.featureFlags[feature] || false;
  }
}
