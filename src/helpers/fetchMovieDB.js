import axios from "axios"

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDM5NTYyY2FkNGI0YjNlMDA3NWYyOWQyYjdmMDE0NSIsInN1YiI6IjY0ZTUyYjYxMDZmOTg0MDBhZTQ3NTk0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KDU8YFcPTRDxjiTzjDuqeFxmORtyHedoyQ64yfOF5tE'

async function fetchMovieDB(endpoint,method,setFunction){
    try{
      const url = `https://api.themoviedb.org/3${endpoint}`
      const options = {
          method,
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          } 
      }

      const response = await fetch(url,options)
      const data = await response.json();
      return data
    } catch (error){
      console.log(error)
    }
  
    
}

// function axiosMovieDB(){
//   const apiKey = '1039562cad4b4b3e0075f29d2b7f0145'
//   const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

//   axios.get(apiUrl)
//   .then(response => {
//       setData(response.data)
//       console.log(data)
//   })
//   .catch(error => {
//       console.error('Error en la solicitud:', error);
//   });
// }



export {fetchMovieDB}