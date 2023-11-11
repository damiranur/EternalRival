import { useNavigate, useParams } from 'react-router-dom';
import './styled.css';
import useOnePerson from '../../../peopleHook/useOnePerson';

function Details() {
  const nav = useNavigate();
  const { id } = useParams();
  const personId = Number(id);
  const propsData = {
    id: personId,
  };
  const [loader, data] = useOnePerson({ propsData });

  return (
    <div className="detail_container alert alert-dismissible alert-success">
      {loader ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {data?.name}
          </p>
          <p>
            <strong>Height:</strong> {data?.height}
          </p>
          <p>
            <strong>Mass:</strong> {data?.mass}
          </p>
          <p>
            <strong>Hair color:</strong> {data?.hair_color}
          </p>
          <p>
            <strong>Skin color:</strong> {data?.skin_color}
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            onClick={() => nav(`/${location.search}`)}
          />
        </>
      )}
    </div>
  );
}

export default Details;
