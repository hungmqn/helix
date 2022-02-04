import { ComponentType } from 'react';

import { IconName } from '../../../shared/Icon';

import YogaMainPage from '../../yoga/components/MainPage';
import CompoundEffectFormula from '../../compoundEffectFormula/components/Form';

interface RouteType {
  name: string;
  title: string;
  icon: IconName;
  path: string;
  component?: ComponentType;
  showInNavigator?: boolean;
}

interface RoutesType extends Array<RouteType> {}

export const ROUTES: RoutesType = [
  {
    name: 'home',
    title: 'Home',
    icon: 'home',
    path: '/',
    component: CompoundEffectFormula,
    showInNavigator: true,
  },
  {
    name: 'about',
    title: 'About',
    icon: 'quill',
    path: '/about',
    showInNavigator: true,
  },
  {
    name: 'yoga',
    title: 'Yoga',
    icon: 'heart',
    path: '/yoga',
    component: YogaMainPage,
    showInNavigator: false,
  },
  {
    name: 'compound',
    title: 'Compound',
    icon: 'podcast',
    path: '/compound',
    component: CompoundEffectFormula,
    showInNavigator: true,
  },
];
