

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

// Other functions...
