import { BuildingConstructionComponent } from './components/building-construction/building-construction.component';
import { BuildingDisplayerComponent } from './components/building-displayer/building-displayer.component';
import { BuildingHarvestComponent } from './components/building-harvest/building-harvest.component';
import { BuildingInstanceComponent } from './components/building-instance/building-instance.component';
import { BuildingInstanceGuard } from './components/building-instance/building-instance.guard';
import { BuildingOverviewComponent } from './building-overview.component';
import { BuildingStateComponent } from './components/building-state/building-state.component';
import { CommonModule } from '@angular/common';
import { ComputeAvailableWorkforcePipe } from '../../pipes/dynamic/compute-available-workforce.pipe';
import { ComputeHarvestWorkforceLimitPipe } from '../../pipes/dynamic/compute-harvest-workforce-limit.pipe';
import { ComputeMostAffordableImprovementPipe } from '../../pipes/dynamic/compute_most_affordable_improvement.pipe';
import { ComputeTotalUnitsHarvestingPipe } from '../../pipes/dynamic/compute-total-units-harvesting.pipe';
import { GarrisonService } from '../../../../services/dynamic/garrison.service';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [
    BuildingConstructionComponent,
    BuildingDisplayerComponent,
    BuildingHarvestComponent,
    BuildingInstanceComponent,
    BuildingOverviewComponent,
    BuildingStateComponent,
    ComputeAvailableWorkforcePipe,
    ComputeHarvestWorkforceLimitPipe,
    ComputeMostAffordableImprovementPipe,
    ComputeTotalUnitsHarvestingPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    BuildingInstanceGuard,
    ComputeAvailableWorkforcePipe,
    GarrisonService
  ]
})
export class BuildingOverviewModule {}