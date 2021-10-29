import React from 'react';
import {render} from 'react-dom';

import App from '@layouts/App';

render(  
  <BrowserRouter>
    <App />
  </BrowserRouer>, 
  document.querySelector('#app'));
