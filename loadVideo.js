function fetchMovieData(movieId) {
    fetch("./moviesDB.json")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            const movie = data.moviesDatabase.find(m => m.MovieID == movieId);
            if (movie) {
                const MovieDetails = document.getElementById('VideoSection');
                MovieDetails.innerHTML = `
                
                <div class="video-container-custom">
          <div class="video-movie-body-section">
            <div class="video-movie-body-section-image-container">
              <div class="video-movie-body-section-image">
                <img src="${movie.image_path}" class="info-card" alt="${movie.title}">
              </div>  
              
              <div class="image-info-container">
                
                <p class="clock" id="duration"><i class="fas fa-clock"></i> Duration: ${movie.duration} </p>
              </div>

            </div>

            <div class="video-movie-body-section-text-custom">
              <div class="video-movie-body-section-text">
                <div class="video-movie-body-section-text-title">
                  <h2 class="video-movie-title" id="movie-title">${movie.title}</h2>
                </div>
                <div class="video-movie-body-section-text-sub-title">
                </div>
                <div class="video-movie-body-section-text-sub-title-description">
                  <p id="movie-description">
                  ${movie.description}
                  </p>
                  <div class="episode-season-info-container">
                    <div class="episode-season-info-realease-director">
                      <p id="movie-release-date"><i class="fas fa-calendar-alt"></i> Release: ${movie.releaseDate}</p>
                      <p id="movie-cast"><i class="fas fa-users"></i> Cast: ${movie.cast.join(', ')}
                      </p>
                      <p id="movie-director"><i class="fas fa-film"></i> Director: ${movie.director}</p>
                    </div>
                    <div class="genres-tags">
                      
                        <p id="genres-container"> <span class="genres-text">Genres:</span> ${movie.genres.join(', ')}</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container-section-vimeo">
          <div class="video-container">
              <div class="video-main-custom-size">
                <div style="position: relative; padding-top: 56.25%;">
                  <iframe
                    src="${movie.LinkSource}"
                    loading="lazy"
                    style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowfullscreen="true"
                  ></iframe>
                </div>
              </div>
          </div>
      </div>


      </div>
                
                `;
            } else {
                console.error("Movie not found.");
            }
        })
        .catch(error => {
            console.error("Unable to fetch data:", error);
        });
}

// Get the movie ID from the URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get('movieid');

if (movieId) {
    fetchMovieData(movieId); // Fetch only the data for the clicked movie
}