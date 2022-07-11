import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'list';
  title = 'Sample Shopping';

  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
}
