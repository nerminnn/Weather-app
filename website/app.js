  /* Global Variables */
   const baseUrl  =   "https://api.openweathermap.org/data/2.5/weather?q="
   const metric   =   "&units=metric"
   const apiKey   =   "&appid=76c5069562d747a58b45fc5e21041876"
   
    //add eventListener
   const generate = document.getElementById("generate"); ///get it from the dom 
   generate.addEventListener("click",sendData);
   
   // Create a new date instance dynamically with JS  /// update url
   let d = new Date();
   let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

    /* Function to get data from openweather */
    const getData = async (baseUrl,zipCode,metric,apiKey) => {
        //call api
      const request = await fetch(baseUrl+zipCode+metric+apiKey);

      try {
          const dataBack = await request.json()
          console.log(dataBack);
          return dataBack;
      } catch (error) {
          // appropriately handle the error
          console.log("error", error);  
      }

    };


   /* Function to POST data */
   const postData = async (url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
      //configurations
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
      const newData = response;
      return newData;
      } catch (error) {
      // appropriately handle the error
          console.log("error", error);
    }

  };

    
  //Get the data from server and update UI
  const updateUI = async () => {
    
  const updateData = await fetch('/all'); //where you find user input
  
  try {
    const dataUI = await updateData.json();
      document.getElementById("temp").innerHTML    = `Tempreture: ${dataUI.temp}°C`;
      document.getElementById("date").innerHTML    = `Date: ${dataUI.date}`;
      document.getElementById("content").innerHTML = `Feels like: ${dataUI.feelings}`;
   } catch (error) {
      console.log('error', error);
    }
};


  /// once I clicked I call senData 
  function sendData(e){

      const zipCode   = document.getElementById("zip").value;
      const feelings  = document.getElementById("feelings").value;
        
        if (zipCode === "") {
          e.preventDefault();
          alert('please check your zip code!');
        } else {

          getData(baseUrl,zipCode,metric,apiKey)
          .then((dataBack)=>{
           postData('/add', { temp:dataBack.main.temp, date: newDate, feelings: feelings })

          .then(() => {
            updateUI();
          });   
      
          });  

    };
  };
