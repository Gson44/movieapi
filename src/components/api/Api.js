import React from 'react';

const Api = () => {

    const fetchMovie = () => {
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTU0OWRjMTU5YmI0ZDk2YTI4OGVhM2U0OWNjMjI1YyIsInN1YiI6IjY0NzdhYTk5OTM4MjhlMDEzMzc1ZmM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RA-0-Gq7111Yy9bWBij_q2J9N3btX1YOqwK05EWd_HY'
                }
            };
            
            fetch('https://api.themoviedb.org/3/discover/movie', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response.results[0].original_title)
                })
                .catch(err => console.error(err));
    }
    

    return (
        <div>
            <button onClick={fetchMovie}>Fetch Movie</button>
        </div>
    );
}

export default Api;

