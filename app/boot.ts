import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent1} from './app1.component'
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent1, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);