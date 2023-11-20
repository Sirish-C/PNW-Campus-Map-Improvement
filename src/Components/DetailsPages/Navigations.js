

import { history } from 'react-router-dom';



// Modify your functions to accept the 'history' object
export const navigateToCloPage = (history) => {
  // Use the 'history' object to navigate
  history.push('/Clo'); 
};

export const navigateToAndersonPage = (history) => {
  // Use the 'history' object to navigate
  history.push('/Anderson'); 
};
export const navigateToLibraryPage = (history) => {
  // Use the 'history' object to navigate
  history.push('/Library'); 
};

export const navigateToLawshePage = (history) => {
  // Use the 'history' object to navigate
  history.push('/Lawshe'); 
};

// Other functions...
