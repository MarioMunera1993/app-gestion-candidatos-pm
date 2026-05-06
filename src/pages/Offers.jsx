import { useState, useEffect } from "react";
import { end_points } from "../services/api";

function Offers() {
  const [offers, setOffers] = useState([]);

  function getOffers() {
    fetch(end_points.offers)
      .then((response) => response.json())
      .then((data) => setOffers(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getOffers();
  }, []);

  function deleteOffers(id) {
    fetch(end_points.offers + "/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getOffers();
      });
  }

  console.log(offers);
  return (
    <div>
      {offers.length <= 0 ? (
        <h1>No hay ofertas disponibles</h1>
      ) : (
        <div className="flex flex-wrap">
          {offers.map((item) => (
            <div class="bg-white w-48 h-64 rounded-lg">
              <div class="flex p-2 gap-1">
                <div class="">
                  <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div class="circle">
                  <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div class="circle">
                  <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                </div>
              </div>
              <div class="card__content">
                <p>{item.id}</p>
                <p>Nombre: {item.title}</p>
                <p>Empresa: {item.company}</p>
                <p>Experiencia: {item.seniority}</p>
                <p>Modalidad: {item.modality}</p>
                <div>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button onClick={() => deleteOffers(item.id)}>
                    <i class="fa-solid fa-delete-left"></i>
                  </button>
                  <button>
                    <i class="fa-solid fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Offers;
