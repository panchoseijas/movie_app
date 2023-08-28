import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../Header/Header";
import './MoviePage.css'
import MovieSlider from "../MovieSlider/MovieSlider";
import Footer from "../Footer";

const token = process.env.REACT_APP_TOKEN

// console.log(token)
const data = {
    "adult": false,
    "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "belongs_to_collection": {
        "id": 573436,
        "name": "Spider-Man: Spider-Verse Collection",
        "poster_path": "/eD4bGQNfmqExIAzKdvX5gDHhI2.jpg",
        "backdrop_path": "/14F6gMaRjzgsN6EEpiwH87R1I00.jpg"
    },
    "budget": 100000000,
    "genres": [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        }
    ],
    "homepage": "https://www.acrossthespiderverse.movie",
    "id": 569094,
    "imdb_id": "tt9362722",
    "original_language": "en",
    "original_title": "Spider-Man: Across the Spider-Verse",
    "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "popularity": 3407.083,
    "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "production_companies": [
        {
            "id": 5,
            "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            "name": "Columbia Pictures",
            "origin_country": "US"
        },
        {
            "id": 2251,
            "logo_path": "/5ilV5mH3gxTEU7p5wjxptHvXkyr.png",
            "name": "Sony Pictures Animation",
            "origin_country": "US"
        },
        {
            "id": 77973,
            "logo_path": "/9y5lW86HnxKUZOFencYk3TIIRCM.png",
            "name": "Lord Miller",
            "origin_country": "US"
        },
        {
            "id": 84041,
            "logo_path": "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
            "name": "Pascal Pictures",
            "origin_country": "US"
        },
        {
            "id": 14439,
            "logo_path": null,
            "name": "Arad Productions",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2023-05-31",
    "revenue": 683241751,
    "runtime": 140,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Hindi",
            "iso_639_1": "hi",
            "name": "हिन्दी"
        },
        {
            "english_name": "Italian",
            "iso_639_1": "it",
            "name": "Italiano"
        },
        {
            "english_name": "Spanish",
            "iso_639_1": "es",
            "name": "Español"
        }
    ],
    "status": "Released",
    "tagline": "It's how you wear the mask that matters.",
    "title": "Spider-Man: Across the Spider-Verse",
    "video": false,
    "vote_average": 8.449,
    "vote_count": 3763
}

// const plataformas = [
//     {
//         "logo_path": "/Ajqyt5aNxNGjmF9uOfxArGrdf3X.jpg",
//         "provider_id": 384,
//         "provider_name": "HBO Max",
//         "display_priority": 5
//     },
//     {
//         "logo_path": "/cDzkhgvozSr4GW2aRdV22uDuFpw.jpg",
//         "provider_id": 339,
//         "provider_name": "Movistar Play",
//         "display_priority": 9
//     },
//     {
//         "logo_path": "/lJT7r1nprk1Z8t1ywiIa8h9d3rc.jpg",
//         "provider_id": 167,
//         "provider_name": "Claro video",
//         "display_priority": 10
//     },
//     {
//         "logo_path": "/9pdeflA0P1b8qlkeDA1oLfyvR06.jpg",
//         "provider_id": 1853,
//         "provider_name": "Paramount Plus Apple TV Channel ",
//         "display_priority": 57
//     }
// ]

function Plataformas({plataformas=[]}){

    if (plataformas.length===0){
        return <h2>No esta dinsponible en ninguna plataforma</h2>
    }


    return (
        plataformas.map(provider => (
            <li key={provider.provider_id} className="plataforma">
                <img
                    src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                    alt={provider.provider_name}
                    className='imagen_plataforma'
                />
                <h3>{provider.provider_name}</h3>
            </li>
            
        ))
    )
}

function Recomendaciones({array = []}){   

    const movies = array.filter( (movie) => {
        if (movie.poster_path){
            return movie
        }
    }) 


    return(
        <>
        <h2>Te puede gustar</h2>
        <div className="carrousel">
            <MovieSlider movies={movies}></MovieSlider>
        </div>
        </>
    )
}


function MoviePage(){
    const { id } = useParams();
    const [data,setData] = useState([])
    const [plataformas,setPlataformas] = useState([])
    const [region,setRegion] = useState('AR')
    const [resultados,setResultados] = useState([])
    const [recomendaciones,setRecomendaciones] = useState([])

    function convertMinutesToHoursAndMinutes(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
    
        let result = '';
        if (hours > 0) {
            result += hours + 'h ';
        }
        if (remainingMinutes > 0) {
            result += remainingMinutes + 'min';
        }
    
        return result;
    }   

    
    const handleOptionChange = (e) => {
        setRegion(e.target.value)
        
    }
    
    useEffect( () => {

        const fetchData = async() => {
        
            try{
                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: `Bearer ${token}`
                    }
                  };
                  
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options)
                const json = await response.json();
                
                setData(json)
            }catch (error){
                console.log('fetchData:',error)
            }
            
        }
    
        const fetchPlataformas = async() => {
            
            try{
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                };
                    
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options)
                const json = await response.json();
                setResultados(json.results)
                setPlataformas(json.results[region].flatrate);
            }catch (error){
                console.log('fetchPlataforma:',error)
            }
            
        }
        
        const fetchRecomendaciones = async() => {
            try{
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                };
                    
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, options)
                const json = await response.json();
                setRecomendaciones(json.results)
                // console.log(recomendaciones)
            }catch (error){
                console.log('fetchPlataforma:',error)
            }
        }
    

        fetchData()
        fetchPlataformas()
        fetchRecomendaciones()
        
    },[])
    
    useEffect( () => {
        if (resultados && resultados[region] && resultados[region].flatrate) {
            setPlataformas(resultados[region].flatrate);
        }

    },[region,resultados])


    return(
        <>
        <Header/>

        <div className="info_box">
            <div className="info_box-sidebar">
                <aside>
                <img className='title_poster' src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}></img>
                <div className="details">
                    <h3>Clasificacion</h3>
                    <p>{data.vote_average}</p>
                    <hr></hr>
                </div>
                <div className="details">
                    <h3>Generos</h3>
                    <p>{data.genres && data.genres.map(genre => genre.name).join(', ')}</p>
                    <hr></hr>
                </div>
                <div className="details">
                    <h3>Duración</h3>
                    <p >{convertMinutesToHoursAndMinutes(data.runtime)}</p>
                    <hr></hr>
                </div>
                <div className="details">
                    <h3>Fecha de estreno</h3>
                    <p >{data.release_date}</p>
                    <hr></hr>
                </div>
                </aside>
            </div>
            <div className="info_box-content">
                <h1 className="titulo">{data.original_title}</h1><span className="year"> ({data.release_date ? data.release_date.slice(0,4) : ""})</span>
                <div className="watch_providers">
                    <h2>Ver ahora</h2>
                    <select className="region_selector" value={region} onChange={handleOptionChange}>
                        <option value="AR">🇦🇷 | Argentina</option>
                        <option value="BR">🇧🇷 | Brasil</option>
                        <option value="US">🇺🇸 | USA</option>
                        <option value="UY">🇺🇾 | Uruguay</option>
                        <option value="DE">🇩🇪 | Alemania</option>
                    </select>
                </div>
                <ul className="plataformas-container">
                    <Plataformas plataformas={plataformas}/>
                </ul>
                <div className="sinopsis">
                    <h2>Sinopsis</h2>
                    <p>{data.overview}</p>
                </div>
                <div className="container_recomendaciones">
                    <Recomendaciones array={recomendaciones}/>
                </div>
            </div>
        </div>
        
        <Footer/>
        </>


    )
}

export default MoviePage