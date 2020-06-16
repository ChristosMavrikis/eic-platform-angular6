import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { AppRoutingModule } from './app-routing.module';
import { neaniasAppComponent } from './neanias-app.component';
import {AppModule} from '../../../../src/app/app.module';
import {SharedModule} from '../../../../src/app/shared/shared.module';
import {TopmenuNeaniasComponent} from './shared/topmenu/topmenu-neanias.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreadcrumbsComponent} from './shared/breadcrumbs/breadcrumbs.component';
import {SideElementsComponent} from './shared/sideelements/side-elements.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeNeaniasComponent} from './pages/home/home-neanias.component';
import {ServiceLandingPageExtendedComponent} from './pages/landingpages/service/service-landing-page.extended.component';
import {ChartModule} from 'angular2-highcharts';
import {StarRatingModule} from 'angular-star-rating';
import {SearchExtendedComponent} from './pages/search/search.extended.component';
import {ReusableComponentsModule} from '../../../../src/app/shared/reusablecomponents/reusable-components.module';
import {CookieLawModule} from '../../../../src/app/shared/reusablecomponents/cookie-law/cookie-law.module';
import {TreeviewModule} from 'ngx-treeview';
import {CompareServicesExtendedComponent} from './pages/compare/compare-services.extended.component';
import {ServiceUploadExtendedComponent} from './pages/catrisService/service-upload-extended.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {ServiceEditExtendedComponent} from './pages/catrisService/service-edit-extended.component';
import {AccordionSectionCatrisComponent} from './pages/catrisService/accordion-section-catris.component';
import {AddFistServiceExtendedComponent} from './pages/catrisService/add-fist-service-extended.component';
import {BrowseSubcategoriesComponent} from './pages/browseSubcategories/browse-subcategories.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    neaniasAppComponent,
    TopmenuNeaniasComponent,
    BreadcrumbsComponent,
    SideElementsComponent,
    FooterComponent,
    HomeNeaniasComponent,
    ServiceLandingPageExtendedComponent,
    SearchExtendedComponent,
    CompareServicesExtendedComponent,
    AccordionSectionCatrisComponent,
    ServiceUploadExtendedComponent,
    ServiceEditExtendedComponent,
    AddFistServiceExtendedComponent,
    BrowseSubcategoriesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ReusableComponentsModule,
    StarRatingModule.forRoot(),
    TreeviewModule.forRoot(),
    ChartModule,
    CookieLawModule,
    CKEditorModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [neaniasAppComponent]
})
export class neaniasAppModule { }
