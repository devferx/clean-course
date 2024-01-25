(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // function getActorsByMovieId(movieId: string)
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // function getActorBioById(actorId: string)
  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  interface Actor {
    fullName: string;
    birthdate: Date;
  }
  function createActor({ fullName, birthdate }: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor', birthdate);
    return true;
  }
})();
