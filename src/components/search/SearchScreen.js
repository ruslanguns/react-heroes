import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  
  const [ searchFormValues, handleInputChange ] = useForm({searchTerm: q });
  const { searchTerm } = searchFormValues;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchTerm}`);
  }

  return (
    <>
      <h1 className="mt-2">Search Screen</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h2>Search form</h2>
          <form onSubmit={handleSearch}>
            <input
              name="searchTerm"
              onChange={handleInputChange}
              type="text"
              autoComplete="off"
              placeholder="Find your hero"
              className="form-control"/>

            <button className="btn btn-primary mt-2" type="submit">Search...</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            (q !== '' && !heroesFiltered.length )
            &&
            <div className="alert alert-danger">
              There is no hero with "<b>{ searchTerm }</b>" name
            </div>
          }

          {
            (q === '')
            &&
            <div className="alert alert-info">
              Search a hero
            </div>
          }



          {
            heroesFiltered.map( hero =>
              (
                <HeroCard
                key={hero.id}
                {...hero }/>
            ))
          }
        </div>
      </div>
    </>
  )
}
