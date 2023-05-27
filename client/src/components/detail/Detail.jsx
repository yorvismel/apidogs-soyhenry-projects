import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDog, clearDetail } from "../../redux/actions/actions";
import "./Detail.css";  

export default function Detail(props) {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetail);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getDog(props.match.params.id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, props.match.params.id]);

  return (
    
    <div className="detail-container">
      
      <Link to="/home">
        <button className="go-home-btn">Go Home</button>
      </Link>
      
      {Object.keys(dog).length ? (
        <div className="detail-content">
          <div className="detail-image">
          {!dog[0].createdInDb && (
  <div  className="detail-api">
    ***This dog was retrieved from the API***
  </div>
)}
{dog[0].createdInDb && (
  <div className="detail-createdInDb">
    ***This dog was created in the database***
  </div>
)}

            <img
              src={dog[0].image ? dog[0].image : "./img/missing.jpg"}
              alt="Dog"
            />
          </div>
          <div className="detail-info">
          <h1 className="detail-id"> Id: {dog[0].id + (dog[0].createdInDb ?  ' ' : ' ')} </h1>

        
            <h3 className="detail-name"> Name: {dog[0].name}</h3>
            <div className="detail-stats">
              <div className="detail-stat">
                <div className="detail-stat-label">Life Span:</div>
                <div className="detail-stat-value">{dog[0].lifeTime}</div>
              </div>
              <div className="detail-stat">
                <div className="detail-stat-label">Weight:</div>
                <div className="detail-stat-value">{`${dog[0].weight_min} - ${dog[0].weight_max} KG`}</div>
              </div>
              <div className="detail-stat">
                <div className="detail-stat-label">Height:</div>
                <div className="detail-stat-value">{`${dog[0].height} CM`}</div>
              </div>
            </div>
        
            <div className="detail-temperaments">
              <div className="detail-temperaments-label">
              Temperaments:
              <div className="detail-temperaments-list">
              
                {dog[0].temperament.split(",").map((t) => (
                  <div key={t} className="detail-temperament">
                    {t.trim()}
                  </div>
                ))}
              </div>
            </div>
              </div>
              
          </div>
        </div>
      ) : (
        <div >
          <img src="../../loading.gif" alt="" />
        </div>
      )}
    </div>
  );
}
