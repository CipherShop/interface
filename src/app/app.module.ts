import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/item/item.component';
import { SellerComponent } from './components/seller/seller.component';
import { CategoryComponent } from './components/category/category.component';
import { MotorsComponent } from './components/category/motors/motors.component';

import { MarkdownService } from './services/markdown/markdown.service';
import { Web3Service } from './services/web3/web3.service';
import { CartService } from './services/cart/cart.service';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';

import { AllComponent } from './components/category/all/all.component';
import { AtvSideBySideUtvPartsAccessoriesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-parts-accessories.component';
import { AtvSideBySideUtvAirIntakeFuelDeliveryComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-air-intake-fuel-delivery.component';
import { AtvSideBySideUtvCarburetorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-carburetors/atv-side-by-side-utv-carburetors.component';
import { AutoPartsAccessoriesComponent } from './components/category/motors/auto-parts-accessories/auto-parts-accessories.component';
import { ATVSideBySideUTVAirFiltersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-air-filters/atv-side-by-side-utv-air-filters.component';
import { ATVSideBySideUTVFuelPumpsSendingUnitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-pumps-sending-units/atv-side-by-side-utv-fuel-pumps-sending-units.component';
import { ATVSideBySideUTVFuelTanksComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-tanks/atv-side-by-side-utv-fuel-tanks.component';
import { ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-air-intake-fuel-delivery-gaskets-seals-o-rings/atv-side-by-side-utv-air-intake-fuel-delivery-gaskets-seals-o-rings.component';
import { ATVSideBySideUTVFuelValvesPetcocksComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-valves-petcocks/atv-side-by-side-utv-fuel-valves-petcocks.component';
import { ATVSideBySideUTVFuelInjectorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-injectors/atv-side-by-side-utv-fuel-injectors.component';
import { ATVSideBySideUTVAirHosesLinesPipesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-air-hoses-lines-pipes/atv-side-by-side-utv-air-hoses-lines-pipes.component';
import { ATVSideBySideUTVFuelTankCapsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-tank-caps/atv-side-by-side-utv-fuel-tank-caps.component';
import { ATVSideBySideUTVAirFilterHousingsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-air-filter-housings/atv-side-by-side-utv-air-filter-housings.component';
import { ATVSideBySideUTVAirIntakeFuelSensorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-air-intake-fuel-sensors/atv-side-by-side-utv-air-intake-fuel-sensors.component';
import { ATVSideBySideUTVCarburetorPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-carburetor-parts/atv-side-by-side-utv-carburetor-parts.component';
import { ATVSideBySideUTVFuelFiltersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-filters/atv-side-by-side-utv-fuel-filters.component';
import { ATVSideBySideUTVIntakeCoversDuctsScoopsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-intake-covers-ducts-scoops/atv-side-by-side-utv-intake-covers-ducts-scoops.component';
import { ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-manifold-intake-adapter-inlet-joint/atv-side-by-side-utv-manifold-intake-adapter-inlet-joint.component';
import { ATVSideBySideUTVThrottleBodiesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-throttle-bodies/atv-side-by-side-utv-throttle-bodies.component';
import { ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-throttle-idle-cruise-control-cables-linkages/atv-side-by-side-utv-throttle-idle-cruise-control-cables-linkages.component';
import { ATVSideBySideUTVTurbochargersSuperchargersPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-turbochargers-superchargers-parts/atv-side-by-side-utv-turbochargers-superchargers-parts.component';
import { OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/other-atv-side-by-side-utv-air-intake-fuel-delivery-parts/other-atv-side-by-side-utv-air-intake-fuel-delivery-parts.component';
import { ATVSideBySideUTVFuelHosesLinesPipesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-air-intake-fuel-delivery/atv-side-by-side-utv-fuel-hoses-lines-pipes/atv-side-by-side-utv-fuel-hoses-lines-pipes.component';
import { ATVSideBySideUTVAudioCommunicationNavigationComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-audio-communication-navigation.component';
import { ATVSideBySideUTVAccessoryMountsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-accessory-mounts/atv-side-by-side-utv-accessory-mounts.component';
import { ATVSideBySideUTVAmplifiersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-amplifiers/atv-side-by-side-utv-amplifiers.component';
import { ATVSideBySideUTVAntennasComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-antennas/atv-side-by-side-utv-antennas.component';
import { ATVSideBySideUTVCompleteAudioKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-complete-audio-kits/atv-side-by-side-utv-complete-audio-kits.component';
import { ATVSideBySideUTVGPSNavigationComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-gps-navigation/atv-side-by-side-utv-gps-navigation.component';
import { ATVSideBySideUTVHeadsetsIntercomsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-headsets-intercoms/atv-side-by-side-utv-headsets-intercoms.component';
import { ATVSideBySideUTVInfotainmentMultimediaPlayersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-infotainment-multimedia-players/atv-side-by-side-utv-infotainment-multimedia-players.component';
import { ATVSideBySideUTVSoundbarsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-soundbars/atv-side-by-side-utv-soundbars.component';
import { ATVSideBySideUTVSpeakersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-speakers/atv-side-by-side-utv-speakers.component';
import { ATVSideBySideUTVStereosRadiosComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/atv-side-by-side-utv-stereos-radios/atv-side-by-side-utv-stereos-radios.component';
import { ATVSideBySideUTVBodyFrameComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-frame.component';
import { OtherATVSideBySideUTVAudioCommunicationNavigationComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/other-atv-side-by-side-utv-audio-communication-navigation/other-atv-side-by-side-utv-audio-communication-navigation.component';
import { AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-audio-communication-navigation/audio-communication-navigation-wiring-harnesses-cables-connectors-for-atvs-side-by-sides-utvs/audio-communication-navigation-wiring-harnesses-cables-connectors-for-atvs-side-by-sides-utvs.component';
import { ATVSideBySideUTVBodyPartsDoorsFendersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-body-parts-doors-fenders.component';
import { ATVSideBySideUTVWindshieldsWindowsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-windshields-windows/atv-side-by-side-utv-windshields-windows.component';
import { ATVSideBySideUTVCabsDoorsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-cabs-doors-parts/atv-side-by-side-utv-cabs-doors-parts.component';
import { ATVSideBySideUTVFendersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-fenders/atv-side-by-side-utv-fenders.component';
import { ATVSideBySideUTVRoofsTopsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-roofs-tops/atv-side-by-side-utv-roofs-tops.component';
import { ATVSideBySideUTVHoodsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-hoods/atv-side-by-side-utv-hoods.component';
import { ATVSideBySideUTVFairingsPlasticsBodyKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-fairings-plastics-body-kits/atv-side-by-side-utv-fairings-plastics-body-kits.component';
import { ATVSideBySideUTVGrillesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-grilles/atv-side-by-side-utv-grilles.component';
import { ATVSideBySideUTVHVACPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-hvac-parts/atv-side-by-side-utv-hvac-parts.component';
import { ATVSideBySideUTVWipersWashersPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-wipers-washers-parts/atv-side-by-side-utv-wipers-washers-parts.component';
import { ATVSideBySideUTVUTVBedsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/atv-side-by-side-utv-utv-beds/atv-side-by-side-utv-utv-beds.component';
import { AdditionalATVSideBySideUTVPanelsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-body-parts-doors-fenders/additional-atv-side-by-side-utv-panels-parts/additional-atv-side-by-side-utv-panels-parts.component';
import { ATVSideBySideUTVBumpersPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-bumpers-parts/atv-side-by-side-utv-bumpers-parts.component';
import { ATVSideBySideUTVLicensePlatesFramesHoldersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-license-plates-frames-holders/atv-side-by-side-utv-license-plates-frames-holders.component';
import { ATVSideBySideUTVMountsBracketsHardwareComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-mounts-brackets-hardware/atv-side-by-side-utv-mounts-brackets-hardware.component';
import { ATVSideBySideUTVRunningBoardsStepBarsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-running-boards-step-bars/atv-side-by-side-utv-running-boards-step-bars.component';
import { ATVSideBySideUTVDashboardsConsolesPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-dashboards-consoles-parts/atv-side-by-side-utv-dashboards-consoles-parts.component';
import { ATVSideBySideUTVDecalsVinylsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-decals-vinyls/atv-side-by-side-utv-decals-vinyls.component';
import { ATVSideBySideUTVEmblemsOrnamentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-emblems-ornaments/atv-side-by-side-utv-emblems-ornaments.component';
import { ATVSideBySideUTVGrabBarsHandlesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-grab-bars-handles/atv-side-by-side-utv-grab-bars-handles.component';
import { ATVSideBySideUTVFramesSubframesRollCagesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-frames-subframes-roll-cages/atv-side-by-side-utv-frames-subframes-roll-cages.component';
import { ATVSideBySideUTVFramesSubframesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-frames-subframes-roll-cages/atv-side-by-side-utv-frames-subframes/atv-side-by-side-utv-frames-subframes.component';
import { ATVSideBySideUTVRollCagesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/atv-side-by-side-utv-frames-subframes-roll-cages/atv-side-by-side-utv-roll-cages/atv-side-by-side-utv-roll-cages.component';
import { OtherATVSideBySideUTVBodyFrameComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-body-frame/other-atv-side-by-side-utv-body-frame/other-atv-side-by-side-utv-body-frame.component';
import { ATVSideBySideUTVBrakesBrakePartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brakes-brake-parts.component';
import { ATVSideBySideUTVBrakeBlockoffsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-blockoffs/atv-side-by-side-utv-brake-blockoffs.component';
import { ATVSideBySideUTVBrakeCablesRodsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-cables-rods/atv-side-by-side-utv-brake-cables-rods.component';
import { ATVSideBySideUTVCalipersBracketsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-calipers-brackets/atv-side-by-side-utv-calipers-brackets.component';
import { ATVSideBySideUTVBrakeComponentKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-component-kits/atv-side-by-side-utv-brake-component-kits.component';
import { ATVSideBySideUTVBrakeDiscRotorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-disc-rotors/atv-side-by-side-utv-brake-disc-rotors.component';
import { ATVSideBySideUTVBrakeDrumsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-drums/atv-side-by-side-utv-brake-drums.component';
import { ATVSideBySideUTVBrakeLinesHosesFittingsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-lines-hoses-fittings/atv-side-by-side-utv-brake-lines-hoses-fittings.component';
import { ATVSideBySideUTVBrakeMasterCylindersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-master-cylinders/atv-side-by-side-utv-brake-master-cylinders.component';
import { ATVSideBySideUTVBrakePadsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-pads/atv-side-by-side-utv-brake-pads.component';
import { ATVSideBySideUTVBrakeShoesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-shoes/atv-side-by-side-utv-brake-shoes.component';
import { ATVSideBySideUTVBrakePadShoeHardwareComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-pad-shoe-hardware/atv-side-by-side-utv-brake-pad-shoe-hardware.component';
import { ATVSideBySideUTVBrakeSensorsSwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-brake-sensors-switches/atv-side-by-side-utv-brake-sensors-switches.component';
import { ATVSideBySideUTVRebuildKitsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-rebuild-kits-parts/atv-side-by-side-utv-rebuild-kits-parts.component';
import { ATVSideBySideUTVReservoirsCapsCoversComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/atv-side-by-side-utv-reservoirs-caps-covers/atv-side-by-side-utv-reservoirs-caps-covers.component';
import { OtherATVSideBySideUTVBrakePartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-brakes-brake-parts/other-atv-side-by-side-utv-brake-parts/other-atv-side-by-side-utv-brake-parts.component';
import { ElectricATVSxSUTVPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/electric-atv-sx-s-utv-parts/electric-atv-sx-s-utv-parts.component';
import { ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/electric-atv-sx-s-utv-parts/electric-atv-sx-s-utv-batteries-bms-charging-units/electric-atv-sx-s-utv-batteries-bms-charging-units.component';
import { ElectricATVSxSUTVBatteriesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/electric-atv-sx-s-utv-parts/electric-atv-sx-s-utv-batteries-bms-charging-units/electric-atv-sx-s-utv-batteries/electric-atv-sx-s-utv-batteries.component';
import { ElectricATVSxSUTVBatteryAccessoriesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Batteries-BMS-Charging-Units/electric-atv-sx-s-utv-battery-accessories/electric-atv-sx-s-utv-battery-accessories.component';
import { ElectricATVSxSUTVBatteryManagementSystemsBMSComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Batteries-BMS-Charging-Units/electric-atv-sx-s-utv-battery-management-systems-bms/electric-atv-sx-s-utv-battery-management-systems-bms.component';
import { ElectricATVSxSUTVChargingStationsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Batteries-BMS-Charging-Units/electric-atv-sx-s-utv-charging-stations/electric-atv-sx-s-utv-charging-stations.component';
import { ElectricATVSxSUTVBatteryBMSUnitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Batteries-BMS-Charging-Units/electric-atv-sx-s-utv-battery-bms-units/electric-atv-sx-s-utv-battery-bms-units.component';
import { ElectricATVSxSUTVMobileChargingComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Batteries-BMS-Charging-Units/electric-atv-sx-s-utv-mobile-charging/electric-atv-sx-s-utv-mobile-charging.component';
import { ElectricATVSxSUTVChargingComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-charging-components/electric-atv-sx-s-utv-charging-components.component';
import { ElectricATVSxSUTVChargingCablesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Charging-Components/electric-atv-sx-s-utv-charging-cables/electric-atv-sx-s-utv-charging-cables.component';
import { ElectricATVSxSUTVChargerCarryCasesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Charging-Components/electric-atv-sx-s-utv-charger-carry-cases/electric-atv-sx-s-utv-charger-carry-cases.component';
import { ElectricATVSxSUTVChargingConvertersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Charging-Components/electric-atv-sx-s-utv-charging-converters/electric-atv-sx-s-utv-charging-converters.component';
import { ElectricATVSxSUTVChargerHoldersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Charging-Components/electric-atv-sx-s-utv-charger-holders/electric-atv-sx-s-utv-charger-holders.component';
import { ElectricATVSxSUTVChargingUpgradeKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Charging-Components/electric-atv-sx-s-utv-charging-upgrade-kits/electric-atv-sx-s-utv-charging-upgrade-kits.component';
import { OtherElectricATVSxSUTVChargingComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Charging-Components/other-electric-atv-sx-s-utv-charging-components/other-electric-atv-sx-s-utv-charging-components.component';
import { ElectricATVSxSUTVControlModulesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-control-modules/electric-atv-sx-s-utv-control-modules.component';
import { ElectricATVSxSUTVConversionKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-conversion-kits/electric-atv-sx-s-utv-conversion-kits.component';
import { ElectricATVSxSUTVConvertersInvertersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-converters-inverters/electric-atv-sx-s-utv-converters-inverters.component';
import { ElectricATVSxSUTVCoolingComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-cooling-components/electric-atv-sx-s-utv-cooling-components.component';
import { ElectricATVSxSUTVCoolingPlatesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Cooling-Components/electric-atv-sx-s-utv-cooling-plates/electric-atv-sx-s-utv-cooling-plates.component';
import { ElectricATVSxSUTVFansComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Cooling-Components/electric-atv-sx-s-utv-fans/electric-atv-sx-s-utv-fans.component';
import { ElectricATVSxSUTVHeatsinksCoolingFinsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Cooling-Components/electric-atv-sx-s-utv-heatsinks-cooling-fins/electric-atv-sx-s-utv-heatsinks-cooling-fins.component';
import { ElectricATVSxSUTVDriveMotorsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-drive-motors-parts/electric-atv-sx-s-utv-drive-motors-parts.component';
import { ElectricATVSxSUTVDriveMotorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Drive-Motors-Parts/electric-atv-sx-s-utv-drive-motors/electric-atv-sx-s-utv-drive-motors.component';
import { ElectricATVSxSUTVDriveMotorPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/Electric-ATV-Sx-S-UTV-Drive-Motors-Parts/electric-atv-sx-s-utv-drive-motor-parts/electric-atv-sx-s-utv-drive-motor-parts.component';
import { ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-high-voltage-circuit-fuses-breakers/electric-atv-sx-s-utv-high-voltage-circuit-fuses-breakers.component';
import { ElectricATVSxSUTVRelaysContactorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-relays-contactors/electric-atv-sx-s-utv-relays-contactors.component';
import { ElectricATVSxSUTVSwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-switches/electric-atv-sx-s-utv-switches.component';
import { ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/electric-atv-sx-s-utv-wiring-harnesses-cables-connectors/electric-atv-sx-s-utv-wiring-harnesses-cables-connectors.component';
import { OtherElectricATVSideBySideUTVPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/Electric-ATV-Sx-S-UTV-Parts/other-electric-atv-side-by-side-utv-parts/other-electric-atv-side-by-side-utv-parts.component';
import { ATVSideBySideUTVElectricalIgnitionComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-electrical-ignition-components/atv-side-by-side-utv-electrical-ignition-components.component';
import { ATVSideBySideUTVAlternatorsGeneratorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-alternators-generators/atv-side-by-side-utv-alternators-generators.component';
import { ATVSideBySideUTVAlternatorGeneratorPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-alternator-generator-parts/atv-side-by-side-utv-alternator-generator-parts.component';
import { ATVSideBySideUTVBatteriesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-batteries/atv-side-by-side-utv-batteries.component';
import { ATVSideBySideUTVBatteryAccessoriesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-battery-accessories/atv-side-by-side-utv-battery-accessories.component';
import { ATVSideBySideUTVDistributorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-distributors/atv-side-by-side-utv-distributors.component';
import { ATVSideBySideUTVDistributorPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-distributor-parts/atv-side-by-side-utv-distributor-parts.component';
import { ATVSideBySideUTVECUsCDIsComputerModulesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-ecus-cdis-computer-modules/atv-side-by-side-utv-ecus-cdis-computer-modules.component';
import { ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-electrical-ignition-sensors-switches/atv-side-by-side-utv-electrical-ignition-sensors-switches.component';
import { ATVSideBySideUTVIgnitionKeySwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/ATV-Side-by-Side-UTV-Electrical-Ignition-Sensors-Switches/atv-side-by-side-utv-ignition-key-switches/atv-side-by-side-utv-ignition-key-switches.component';
import { ATVSideBySideUTVSensorsSwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/ATV-Side-by-Side-UTV-Electrical-Ignition-Sensors-Switches/atv-side-by-side-utv-sensors-switches/atv-side-by-side-utv-sensors-switches.component';
import { ATVSideBySideUTVFusesFuseBoxesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-fuses-fuse-boxes/atv-side-by-side-utv-fuses-fuse-boxes.component';
import { ATVSideBySideUTVHornsHornCoversComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-horns-horn-covers/atv-side-by-side-utv-horns-horn-covers.component';
import { ATVSideBySideUTVIgnitionCoilsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-ignition-coils/atv-side-by-side-utv-ignition-coils.component';
import { ATVSideBySideUTVIgnitionKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-ignition-kits/atv-side-by-side-utv-ignition-kits.component';
import { ATVSideBySideUTVIgnitionWiresCapsBootsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-ignition-wires-caps-boots/atv-side-by-side-utv-ignition-wires-caps-boots.component';
import { ATVSideBySideUTVRelaysComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-relays/atv-side-by-side-utv-relays.component';
import { ATVSideBySideUTVSparkPlugsGlowPlugsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-spark-plugs-glow-plugs/atv-side-by-side-utv-spark-plugs-glow-plugs.component';
import { ATVSideBySideUTVStarterMotorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-starter-motors/atv-side-by-side-utv-starter-motors.component';
import { ATVSideBySideUTVStarterMotorPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-starter-motor-parts/atv-side-by-side-utv-starter-motor-parts.component';
import { ATVSideBySideUTVStatorsMagnetosComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-stators-magnetos/atv-side-by-side-utv-stators-magnetos.component';
import { ATVSideBySideUTVStatorMagnetoPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-stator-magneto-parts/atv-side-by-side-utv-stator-magneto-parts.component';
import { ATVSideBySideUTVVoltageRegulatorsRectifiersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/atv-side-by-side-utv-voltage-regulators-rectifiers/atv-side-by-side-utv-voltage-regulators-rectifiers.component';
import { ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/electrical-ignition-wiring-harnesses-cables-connectors-for-atvs-side-by-sides-utvs/electrical-ignition-wiring-harnesses-cables-connectors-for-atvs-side-by-sides-utvs.component';
import { OtherATVSideBySideUTVElectricalIgnitionComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Electrical-Ignition-Components/other-atv-side-by-side-utv-electrical-ignition-components/other-atv-side-by-side-utv-electrical-ignition-components.component';
import { ATVSideBySideUTVEngineCoolingComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-engine-cooling/atv-side-by-side-utv-engine-cooling.component';
import { ATVSideBySideUTVEngineClampsHardwareComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-clamps-hardware/atv-side-by-side-utv-engine-clamps-hardware.component';
import { ATVSideBySideUTVEngineExpansionOverflowTanksComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-expansion-overflow-tanks/atv-side-by-side-utv-engine-expansion-overflow-tanks.component';
import { ATVSideBySideUTVEngineFansFanPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-fans-fan-parts/atv-side-by-side-utv-engine-fans-fan-parts.component';
import { ATVSideBySideUTVEngineGasketsSealsORingsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-gaskets-seals-o-rings/atv-side-by-side-utv-engine-gaskets-seals-o-rings.component';
import { ATVSideBySideUTVEngineOilCoolersLinesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-oil-coolers-lines/atv-side-by-side-utv-engine-oil-coolers-lines.component';
import { ATVSideBySideUTVEnginePipesHosesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-pipes-hoses/atv-side-by-side-utv-engine-pipes-hoses.component';
import { ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-radiator-coolant-reservoir-caps/atv-side-by-side-utv-radiator-coolant-reservoir-caps.component';
import { ATVSideBySideUTVEngineRadiatorsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-radiators/atv-side-by-side-utv-engine-radiators.component';
import { ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-temperature-sensors-switches/atv-side-by-side-utv-engine-temperature-sensors-switches.component';
import { ATVSideBySideUTVEngineThermostatsHousingsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-engine-thermostats-housings/atv-side-by-side-utv-engine-thermostats-housings.component';
import { ATVSideBySideUTVWaterPumpsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/atv-side-by-side-utv-water-pumps/atv-side-by-side-utv-water-pumps.component';
import { OtherATVSideBySideUTVEngineCoolingPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engine-Cooling/other-atv-side-by-side-utv-engine-cooling-parts/other-atv-side-by-side-utv-engine-cooling-parts.component';
import { ATVSideBySideUTVEnginesEnginePartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/atv-side-by-side-utv-engines-engine-parts/atv-side-by-side-utv-engines-engine-parts.component';
import { ATVSideBySideUTVEngineBracketsHardwareComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-brackets-hardware/atv-side-by-side-utv-engine-brackets-hardware.component';
import { ATVSideBySideUTVCompleteCylindersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-complete-cylinders/atv-side-by-side-utv-complete-cylinders.component';
import { ATVSideBySideUTVCompleteEnginesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-complete-engines/atv-side-by-side-utv-complete-engines.component';
import { ATVSideBySideUTVConnectingRodsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-connecting-rods-parts/atv-side-by-side-utv-connecting-rods-parts.component';
import { ATVSideBySideUTVCrankshaftsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-crankshafts/atv-side-by-side-utv-crankshafts.component';
import { ATVSideBySideUTVCylinderBoltsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-cylinder-bolts/atv-side-by-side-utv-cylinder-bolts.component';
import { ATVSideBySideUTVCylinderHeadsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-cylinder-heads/atv-side-by-side-utv-cylinder-heads.component';
import { ATVSideBySideUTVEngineBearingsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-bearings/atv-side-by-side-utv-engine-bearings.component';
import { ATVSideBySideUTVEngineCoversComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-covers/atv-side-by-side-utv-engine-covers.component';
import { ATVSideBySideUTVEngineCrankcasesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-crankcases/atv-side-by-side-utv-engine-crankcases.component';
import { ATVSideBySideUTVEngineMountsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-mounts/atv-side-by-side-utv-engine-mounts.component';
import { ATVSideBySideUTVEngineRebuildKitsComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-rebuild-kits-components/atv-side-by-side-utv-engine-rebuild-kits-components.component';
import { ATVSideBySideUTVEngineSensorsSwitchesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-sensors-switches/atv-side-by-side-utv-engine-sensors-switches.component';
import { ATVSideBySideUTVFlywheelsFlywheelPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-flywheels-flywheel-parts/atv-side-by-side-utv-flywheels-flywheel-parts.component';
import { ATVSideBySideUTVEngineGasketsSealsKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-engine-gaskets-seals-kits/atv-side-by-side-utv-engine-gaskets-seals-kits.component';
import { ATVSideBySideUTVKickStartLeversComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-kick-start-levers/atv-side-by-side-utv-kick-start-levers.component';
import { ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-oil-drain-plugs-filler-caps-dipsticks/atv-side-by-side-utv-oil-drain-plugs-filler-caps-dipsticks.component';
import { ATVSideBySideUTVOilFiltersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-oil-filters/atv-side-by-side-utv-oil-filters.component';
import { ATVSideBySideUTVOilPansComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-oil-pans/atv-side-by-side-utv-oil-pans.component';
import { ATVSideBySideUTVOilPumpsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-oil-pumps-parts/atv-side-by-side-utv-oil-pumps-parts.component';
import { ATVSideBySideUTVOilTanksComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-oil-tanks/atv-side-by-side-utv-oil-tanks.component';
import { ATVSideBySideUTVPistonsRingsPistonKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-pistons-rings-piston-kits/atv-side-by-side-utv-pistons-rings-piston-kits.component';
import { ATVSideBySideUTVServiceKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-service-kits/atv-side-by-side-utv-service-kits.component';
import { ATVSideBySideUTVTimingComponentsKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-timing-components-kits/atv-side-by-side-utv-timing-components-kits.component';
import { ATVSideBySideUTVGuideRailsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Timing-Components-Kits/atv-side-by-side-utv-guide-rails/atv-side-by-side-utv-guide-rails.component';
import { ATVSideBySideUTVSprocketsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Timing-Components-Kits/atv-side-by-side-utv-sprockets/atv-side-by-side-utv-sprockets.component';
import { ATVSideBySideUTVTensionersPulleysComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Timing-Components-Kits/atv-side-by-side-utv-tensioners-pulleys/atv-side-by-side-utv-tensioners-pulleys.component';
import { ATVSideBySideUTVTimingBeltsChainsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Timing-Components-Kits/atv-side-by-side-utv-timing-belts-chains/atv-side-by-side-utv-timing-belts-chains.component';
import { ATVSideBySideUTVEngineTimingKitsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Timing-Components-Kits/atv-side-by-side-utv-engine-timing-kits/atv-side-by-side-utv-engine-timing-kits.component';
import { ATVSideBySideUTVValvetrainComponentsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/atv-side-by-side-utv-valvetrain-components/atv-side-by-side-utv-valvetrain-components.component';
import { ATVSideBySideUTVCamshaftsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-camshafts/atv-side-by-side-utv-camshafts.component';
import { ATVSideBySideUTVEngineValvesComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-engine-valves/atv-side-by-side-utv-engine-valves.component';
import { ATVSideBySideUTVPushRodsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-push-rods/atv-side-by-side-utv-push-rods.component';
import { ATVSideBySideUTVRockerArmsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-rocker-arms-parts/atv-side-by-side-utv-rocker-arms-parts.component';
import { ATVSideBySideUTVTappetsLiftersComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-tappets-lifters/atv-side-by-side-utv-tappets-lifters.component';
import { ATVSideBySideUTVValveGuidesSpringsPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-valve-guides-springs-parts/atv-side-by-side-utv-valve-guides-springs-parts.component';
import { ATVSideBySideUTVVariableValveTimingPartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/ATV-Side-by-Side-UTV-Valvetrain-Components/atv-side-by-side-utv-variable-valve-timing-parts/atv-side-by-side-utv-variable-valve-timing-parts.component';
import { OtherATVSideBySideUTVEnginePartsComponent } from './components/category/motors/auto-parts-accessories/atv-side-by-side-utv-parts-accessories/ATV-Side-by-Side-UTV-Engines-Engine-Parts/other-atv-side-by-side-utv-engine-parts/other-atv-side-by-side-utv-engine-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    SellerComponent,
    CategoryComponent,
    MotorsComponent,
    AllComponent,
    AtvSideBySideUtvPartsAccessoriesComponent,
    AtvSideBySideUtvAirIntakeFuelDeliveryComponent,
    AtvSideBySideUtvCarburetorsComponent,
    AutoPartsAccessoriesComponent,
    ATVSideBySideUTVAirFiltersComponent,
    ATVSideBySideUTVFuelPumpsSendingUnitsComponent,
    ATVSideBySideUTVFuelTanksComponent,
    ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent,
    ATVSideBySideUTVFuelValvesPetcocksComponent,
    ATVSideBySideUTVFuelInjectorsComponent,
    ATVSideBySideUTVAirHosesLinesPipesComponent,
    ATVSideBySideUTVFuelTankCapsComponent,
    ATVSideBySideUTVAirFilterHousingsComponent,
    ATVSideBySideUTVAirIntakeFuelSensorsComponent,
    ATVSideBySideUTVCarburetorPartsComponent,
    ATVSideBySideUTVFuelFiltersComponent,
    ATVSideBySideUTVIntakeCoversDuctsScoopsComponent,
    ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent,
    ATVSideBySideUTVThrottleBodiesComponent,
    ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent,
    ATVSideBySideUTVTurbochargersSuperchargersPartsComponent,
    OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent,
    ATVSideBySideUTVFuelHosesLinesPipesComponent,
    ATVSideBySideUTVAudioCommunicationNavigationComponent,
    ATVSideBySideUTVAccessoryMountsComponent,
    ATVSideBySideUTVAmplifiersComponent,
    ATVSideBySideUTVAntennasComponent,
    ATVSideBySideUTVCompleteAudioKitsComponent,
    ATVSideBySideUTVGPSNavigationComponent,
    ATVSideBySideUTVHeadsetsIntercomsComponent,
    ATVSideBySideUTVInfotainmentMultimediaPlayersComponent,
    ATVSideBySideUTVSoundbarsComponent,
    ATVSideBySideUTVSpeakersComponent,
    ATVSideBySideUTVStereosRadiosComponent,
    AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent,
    OtherATVSideBySideUTVAudioCommunicationNavigationComponent,
    ATVSideBySideUTVBodyFrameComponent,
    ATVSideBySideUTVBodyPartsDoorsFendersComponent,
    ATVSideBySideUTVWindshieldsWindowsComponent,
    ATVSideBySideUTVCabsDoorsPartsComponent,
    ATVSideBySideUTVFendersComponent,
    ATVSideBySideUTVRoofsTopsComponent,
    ATVSideBySideUTVHoodsComponent,
    ATVSideBySideUTVFairingsPlasticsBodyKitsComponent,
    ATVSideBySideUTVGrillesComponent,
    ATVSideBySideUTVHVACPartsComponent,
    ATVSideBySideUTVWipersWashersPartsComponent,
    ATVSideBySideUTVUTVBedsComponent,
    AdditionalATVSideBySideUTVPanelsPartsComponent,
    ATVSideBySideUTVBumpersPartsComponent,
    ATVSideBySideUTVLicensePlatesFramesHoldersComponent,
    ATVSideBySideUTVMountsBracketsHardwareComponent,
    ATVSideBySideUTVRunningBoardsStepBarsComponent,
    ATVSideBySideUTVDashboardsConsolesPartsComponent,
    ATVSideBySideUTVDecalsVinylsComponent,
    ATVSideBySideUTVEmblemsOrnamentsComponent,
    ATVSideBySideUTVGrabBarsHandlesComponent,
    ATVSideBySideUTVFramesSubframesRollCagesComponent,
    ATVSideBySideUTVFramesSubframesComponent,
    ATVSideBySideUTVRollCagesComponent,
    OtherATVSideBySideUTVBodyFrameComponent,
    ATVSideBySideUTVBrakesBrakePartsComponent,
    ATVSideBySideUTVBrakeBlockoffsComponent,
    ATVSideBySideUTVBrakeCablesRodsComponent,
    ATVSideBySideUTVCalipersBracketsComponent,
    ATVSideBySideUTVBrakeComponentKitsComponent,
    ATVSideBySideUTVBrakeDiscRotorsComponent,
    ATVSideBySideUTVBrakeDrumsComponent,
    ATVSideBySideUTVBrakeLinesHosesFittingsComponent,
    ATVSideBySideUTVBrakeMasterCylindersComponent,
    ATVSideBySideUTVBrakePadsComponent,
    ATVSideBySideUTVBrakeShoesComponent,
    ATVSideBySideUTVBrakePadShoeHardwareComponent,
    ATVSideBySideUTVBrakeSensorsSwitchesComponent,
    ATVSideBySideUTVRebuildKitsPartsComponent,
    ATVSideBySideUTVReservoirsCapsCoversComponent,
    OtherATVSideBySideUTVBrakePartsComponent,
    ElectricATVSxSUTVPartsComponent,
    ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent,
    ElectricATVSxSUTVBatteriesComponent,
    ElectricATVSxSUTVBatteryAccessoriesComponent,
    ElectricATVSxSUTVBatteryManagementSystemsBMSComponent,
    ElectricATVSxSUTVChargingStationsComponent,
    ElectricATVSxSUTVBatteryBMSUnitsComponent,
    ElectricATVSxSUTVMobileChargingComponent,
    ElectricATVSxSUTVChargingComponentsComponent,
    ElectricATVSxSUTVChargingCablesComponent,
    ElectricATVSxSUTVChargerCarryCasesComponent,
    ElectricATVSxSUTVChargingConvertersComponent,
    ElectricATVSxSUTVChargerHoldersComponent,
    ElectricATVSxSUTVChargingUpgradeKitsComponent,
    OtherElectricATVSxSUTVChargingComponentsComponent,
    ElectricATVSxSUTVControlModulesComponent,
    ElectricATVSxSUTVConversionKitsComponent,
    ElectricATVSxSUTVConvertersInvertersComponent,
    ElectricATVSxSUTVCoolingComponentsComponent,
    ElectricATVSxSUTVCoolingPlatesComponent,
    ElectricATVSxSUTVFansComponent,
    ElectricATVSxSUTVHeatsinksCoolingFinsComponent,
    ElectricATVSxSUTVDriveMotorsPartsComponent,
    ElectricATVSxSUTVDriveMotorsComponent,
    ElectricATVSxSUTVDriveMotorPartsComponent,
    ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent,
    ElectricATVSxSUTVRelaysContactorsComponent,
    ElectricATVSxSUTVSwitchesComponent,
    ElectricATVSxSUTVWiringHarnessesCablesConnectorsComponent,
    OtherElectricATVSideBySideUTVPartsComponent,
    ATVSideBySideUTVElectricalIgnitionComponentsComponent,
    ATVSideBySideUTVAlternatorsGeneratorsComponent,
    ATVSideBySideUTVAlternatorGeneratorPartsComponent,
    ATVSideBySideUTVBatteriesComponent,
    ATVSideBySideUTVBatteryAccessoriesComponent,
    ATVSideBySideUTVDistributorsComponent,
    ATVSideBySideUTVDistributorPartsComponent,
    ATVSideBySideUTVECUsCDIsComputerModulesComponent,
    ATVSideBySideUTVElectricalIgnitionSensorsSwitchesComponent,
    ATVSideBySideUTVIgnitionKeySwitchesComponent,
    ATVSideBySideUTVSensorsSwitchesComponent,
    ATVSideBySideUTVFusesFuseBoxesComponent,
    ATVSideBySideUTVHornsHornCoversComponent,
    ATVSideBySideUTVIgnitionCoilsComponent,
    ATVSideBySideUTVIgnitionKitsComponent,
    ATVSideBySideUTVIgnitionWiresCapsBootsComponent,
    ATVSideBySideUTVRelaysComponent,
    ATVSideBySideUTVSparkPlugsGlowPlugsComponent,
    ATVSideBySideUTVStarterMotorsComponent,
    ATVSideBySideUTVStarterMotorPartsComponent,
    ATVSideBySideUTVStatorsMagnetosComponent,
    ATVSideBySideUTVStatorMagnetoPartsComponent,
    ATVSideBySideUTVVoltageRegulatorsRectifiersComponent,
    ElectricalIgnitionWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent,
    OtherATVSideBySideUTVElectricalIgnitionComponentsComponent,
    ATVSideBySideUTVEngineCoolingComponent,
    ATVSideBySideUTVEngineClampsHardwareComponent,
    ATVSideBySideUTVEngineExpansionOverflowTanksComponent,
    ATVSideBySideUTVEngineFansFanPartsComponent,
    ATVSideBySideUTVEngineGasketsSealsORingsComponent,
    ATVSideBySideUTVEngineOilCoolersLinesComponent,
    ATVSideBySideUTVEnginePipesHosesComponent,
    ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent,
    ATVSideBySideUTVEngineRadiatorsComponent,
    ATVSideBySideUTVEngineTemperatureSensorsSwitchesComponent,
    ATVSideBySideUTVEngineThermostatsHousingsComponent,
    ATVSideBySideUTVWaterPumpsComponent,
    OtherATVSideBySideUTVEngineCoolingPartsComponent,
    ATVSideBySideUTVEnginesEnginePartsComponent,
    ATVSideBySideUTVEngineBracketsHardwareComponent,
    ATVSideBySideUTVCompleteCylindersComponent,
    ATVSideBySideUTVCompleteEnginesComponent,
    ATVSideBySideUTVConnectingRodsPartsComponent,
    ATVSideBySideUTVCrankshaftsComponent,
    ATVSideBySideUTVCylinderBoltsComponent,
    ATVSideBySideUTVCylinderHeadsComponent,
    ATVSideBySideUTVEngineBearingsComponent,
    ATVSideBySideUTVEngineCoversComponent,
    ATVSideBySideUTVEngineCrankcasesComponent,
    ATVSideBySideUTVEngineMountsComponent,
    ATVSideBySideUTVEngineRebuildKitsComponentsComponent,
    ATVSideBySideUTVEngineSensorsSwitchesComponent,
    ATVSideBySideUTVFlywheelsFlywheelPartsComponent,
    ATVSideBySideUTVEngineGasketsSealsKitsComponent,
    ATVSideBySideUTVKickStartLeversComponent,
    ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent,
    ATVSideBySideUTVOilFiltersComponent,
    ATVSideBySideUTVOilPansComponent,
    ATVSideBySideUTVOilPumpsPartsComponent,
    ATVSideBySideUTVOilTanksComponent,
    ATVSideBySideUTVPistonsRingsPistonKitsComponent,
    ATVSideBySideUTVServiceKitsComponent,
    ATVSideBySideUTVTimingComponentsKitsComponent,
    ATVSideBySideUTVGuideRailsComponent,
    ATVSideBySideUTVSprocketsComponent,
    ATVSideBySideUTVTensionersPulleysComponent,
    ATVSideBySideUTVTimingBeltsChainsComponent,
    ATVSideBySideUTVEngineTimingKitsComponent,
    ATVSideBySideUTVValvetrainComponentsComponent,
    ATVSideBySideUTVCamshaftsComponent,
    ATVSideBySideUTVEngineValvesComponent,
    ATVSideBySideUTVPushRodsComponent,
    ATVSideBySideUTVRockerArmsPartsComponent,
    ATVSideBySideUTVTappetsLiftersComponent,
    ATVSideBySideUTVValveGuidesSpringsPartsComponent,
    ATVSideBySideUTVVariableValveTimingPartsComponent,
    OtherATVSideBySideUTVEnginePartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  providers: [
    MarkdownService,
    Web3Service,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
