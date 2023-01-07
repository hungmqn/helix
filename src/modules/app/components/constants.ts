import { ComponentType } from 'react';

import { IconName } from '../../../shared/Icon';

import { HomePage } from '../../home';
import { AboutPage } from '../../about';
import { BlogPage } from '../../blog';
import { Gallery } from '../../gallery';
import { MainPage as YogaMainPage } from '../../yoga';

interface RouteType {
  name: string;
  title: string;
  icon: IconName;
  path: string;
  component?: ComponentType;
  showInNavigator?: boolean;
  renderWithoutHeaderAndFooter?: boolean;
}

interface RoutesType extends Array<RouteType> {}

export const ROUTES: RoutesType = [
  {
    name: 'home',
    title: 'Home',
    icon: 'home',
    path: '/',
    component: HomePage,
    showInNavigator: false,
  },
  {
    name: 'about',
    title: 'About',
    icon: 'user',
    path: '/about',
    component: AboutPage,
    showInNavigator: true,
  },
  {
    name: 'blog',
    title: 'Blog',
    icon: 'quill',
    path: '/blog',
    component: BlogPage,
    showInNavigator: false,
  },
  {
    name: 'gallery',
    title: 'Gallery',
    icon: 'images',
    path: '/gallery',
    component: Gallery,
    showInNavigator: false,
    renderWithoutHeaderAndFooter: true,
  },
  {
    name: 'yoga',
    title: 'Yoga',
    icon: 'heart',
    path: '/yoga',
    component: YogaMainPage,
    showInNavigator: false,
  },
];
