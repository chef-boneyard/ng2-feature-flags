import { Component } from '@angular/core';
import { FeatureFlagsService, FeatureFlagsComponent } from 'ng2-feature-flags';


@Component({
  moduleId: module.id,
  selector: '-root',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],
  directives: [ FeatureFlagsComponent ],
  providers: [ FeatureFlagsService ]
})
export class AppComponent {
  features: Array<string> = [
    'Super Secret Feature 1',
    'Change Title'
  ];
  title = 'app works!';

  constructor(private featureFlagsService: FeatureFlagsService) {}
}
