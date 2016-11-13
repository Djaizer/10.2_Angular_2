import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AlbumsComponent} from "./albums.component";
import {ContactComponent} from "./contact.component";
import {AlbumComponent} from "./album.component";
import {ROUTER_PROVIDERS} from "angular2/src/router/router_providers";
import {HomeComponent} from "./home.component";
import {ArchivesComponent} from "./archives.component";

@RouteConfig([
    {path: '/albums', component: AlbumsComponent, name: 'Albums'},
    {path: '/album/:id', component: AlbumComponent, name: 'Album'},
    {path: '/contact', component: ContactComponent, name: 'Contact'},
    {path: '/home', component: HomeComponent, name: 'Home', useAsDefault: true},
    {path: '/home/:year/:month', component: ArchivesComponent, name: 'Archives'},
    {path: '/**', redirectTo: ['Albums'], name: 'Other'}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}