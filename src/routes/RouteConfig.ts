export interface RouteConfig {
  path: string;
  component: any;
  routes?: RouteConfig[];
}