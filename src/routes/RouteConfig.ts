export interface RouteConfig {
  path: string;
  component: any;
  isExact: boolean;
  routes?: RouteConfig[];
}