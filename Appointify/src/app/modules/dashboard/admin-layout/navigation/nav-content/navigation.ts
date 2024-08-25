export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    classes: 'nav-item',
    url: '/dashboard',
    icon: 'dashboard',
    breadcrumbs: false
  },
  {
    id: 'account',
    title: 'Manage Account',
    type: 'collapse',
    icon: 'setting',
    url: '/dashboard/manage',
    children: [
      {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/manage/profile',
        icon: 'profile',
        breadcrumbs: true
      },
      {
        id: 'setting',
        title: 'Settings',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/manage/settings',
        icon: 'setting',
        breadcrumbs: true
      }
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/auth/login',
        icon: 'login',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/auth/register',
        icon: 'profile',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'utilities',
    title: 'UI Components',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'Typography',
        type: 'collapse',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
        children: [
          {
            id: 'default1',
            title: 'Default 1',
            type: 'item',
            classes: 'nav-item',
            url: '/dashboard/default',
            icon: 'dashboard',
            breadcrumbs: false
          },
          {
            id: 'default',
            title: 'Default 2',
            type: 'item',
            classes: 'nav-item',
            url: '/dashboard/default',
            icon: 'dashboard',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'color',
        title: 'Colors',
        type: 'collapse',
        classes: 'nav-item',
        url: '/color',
        icon: 'bg-colors'
      },
      {
        id: 'tabler',
        title: 'Tabler',
        type: 'item',
        classes: 'nav-item',
        url: 'https://ant.design/components/icon',
        icon: 'ant-design',
        target: true,
        external: true
      }
    ]
  },

  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome'
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: '',
        icon: 'question',
        target: true,
        external: true
      }
    ]
  }
];
