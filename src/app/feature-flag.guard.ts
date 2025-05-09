import {CanMatchFn, Router} from '@angular/router';
import {FeatureFlagService} from './feature-flag.service';
import {inject} from '@angular/core';

export const featureFlagGuard: CanMatchFn = (route) => {
  const featureFlagService = inject(FeatureFlagService);
  const router = inject(Router);

  const featureFlag = route.data?.['features'] as string;
  const isEnabled = featureFlagService.isFeatureEnabled(featureFlag);
  if (isEnabled) {
    return true;
  }
  alert('This feature is not enabled yet!');
  return router.parseUrl('/');
};
