import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router
} from '@angular/router';
import { BuildingService } from 'src/app/containers/components/in/services/static/building.service';
import { FetchByCodePipe } from '../../../pipes/static/fetch-by-code.pipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingInstanceGuard implements CanActivate {
  private _fetchByCodePipe = new FetchByCodePipe();
  
  constructor(
    private _buildingService: BuildingService,
    private _router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot) {
    const code = next.paramMap.get('code');
    console.log(code);
    if (!code) {
      this._router.navigate(['/in/play/buildings']);
      return false;
    }

    const buildingsFromStorage = this
      ._buildingService
      .getBuildingsFromStorage();

    const staticEntity = this
      ._fetchByCodePipe
      .transform(buildingsFromStorage || [], code);
    if (!staticEntity) {
      this._router.navigate(['/in/play/buildings']);
      return false;
    }

    return true;
  }
}
