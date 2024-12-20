import './style.css';
import _ from 'lodash';
import { loadInitialPage } from './home.js';
import { loadContactPage } from './contact.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const contactButton = document.getElementById('contact-button');
const menuButton = document.getElementById('menu-button');
const homeButton = document.getElementById('home-button');

document.addEventListener('DOMContentLoaded', () => {
  loadInitialPage();
});

homeButton.addEventListener('click', () => {
  loadInitialPage();
});

contactButton.addEventListener('click', () => {
  loadContactPage();
});

menuButton.addEventListener('click', () => {
  // loadContactPage();
});

