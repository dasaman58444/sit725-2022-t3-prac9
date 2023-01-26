
  
  // connect to the socket
  let socket = io();
  socket.on("number", (msg) => {
    console.log("Random number: " + msg);
  });
  

  console.log('test')
$(document).ready(function(){
  console.log('Ready')
  
  //bind the button
  $('#testButton').click(testButtonFunction)
  
  const getProjects = () => {
    $.get("/api/projects", (res) => {
        console.log(result)
    });
  };
});


