export default function MovieDisplay({movie}){
    const loaded = () => {
        return(
            <>
            <img src={movie.Poster} alt={movie.Title} width="100%" />
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <h2>{movie.Year}</h2>
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    return movie && movie.Title ? loaded() : loading();
}



{/* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> */}