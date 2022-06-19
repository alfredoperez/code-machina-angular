export interface NavigationItem {
  title?: string;
  subtitle?: string;
  icon?: string;
  active?: boolean;
  disabled?: boolean;
  tooltip?: string;
  link?: string;
  target?: string;
}

export interface NavigationConfig {
  sections: Array<NavigationSection>;
}

export interface NavigationSection {
  items: Array<NavigationItem>;
  title?: string;
  subtitle?: string;
  showDivider?: boolean;
}
