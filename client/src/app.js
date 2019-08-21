import React, {useState} from 'react';

var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Thank You!');
    response.end();
}

http.createServer(onRequest).listen(8000);
function App(props) {
    
  
    return (
      <div>
        <h1>Client Works!</h1>
      </div>
    );
  }
  
  export default App;