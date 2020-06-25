import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [ heroId ]);

  if (!hero) {
    return <Redirect to="/" />
  }

  const {
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = hero;

  const handleGoBack = () => {
  
    if(history.length <= 2 ) {
      return history.push(`/`);
    }
    history.goBack();

  }


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__backInLeft"
          src={`./../../assets/heroes/${heroId}.jpg`}
          alt={superhero} />
      </div>


      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">

          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>

          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>

        </ul>

        <h5 className="mt-4">Characters</h5>
        <p>{characters}</p>

        <button
          onClick={handleGoBack}
          className="btn btn-outline-danger mt-5">
          Go back
        </button>
        
      </div>
    </div>
  )
}
