import { mount } from './leibox/gradient-cover-wall/GradientCoverWall.ts';

const target = document.querySelector('#cover-wall');
if (target) mount(target, { height: 340 });
