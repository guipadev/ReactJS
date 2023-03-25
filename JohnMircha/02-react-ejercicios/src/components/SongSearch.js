import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Evitar renderizado inecesario, salir del efecto si dato es nulo
    if (search === null) return;

    // Creación de variab async, si se colocaba en el useEffect genera un antipatron
    const fetchData = async () => {
      // Destructuramos datos de search
      const { artist, song } = search;

      // Obteción de la URL's
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);
      // Cargar Sniper de Cargando...
      setLoading(true);

      // Capturando respuestas de la promesa de las API, esta ya estara parsiada en JSON
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      // Guardando información del artista
      setBio(artistRes);
      // Guardando información de la letra
      setLyric(songRes);
      // Ya hemos recibido informacion ya no necesitamos que aparezca
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {/* Al estar cargando mostrar dicho componente */}
        {loading && <Loader />}
        {/* Cuando tenga información el search y loading sea falso mostrar componente */}
        {
          search && !loading && ( <SongDetails search={search} lyric={lyric} bio={bio} /> )
        }
      </article>
    </div>
  );
};

export default SongSearch;
