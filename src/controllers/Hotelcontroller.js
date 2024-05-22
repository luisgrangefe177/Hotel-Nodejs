const { getRoom } = require("../repository/Hotelrespository");

//donde enviamos el Hotel
const getHotel = async (req, res) => {
  let response = {};
  try {
    const { query, params } = req;
    response = await getRoom();
    if (query.id) {
      response = roomItems.find((x) => x.id === Number(query.id));
      if (!response) {
        response = {
          state: false,
          message: "No se encontro informacion con los parametros de busqueda",
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
  // let response = "";
  res.send(response);
};
const createHotel = (req, res) => {
  // logica para crear la reserva de hotel
  let response = {};
  res.send(response);
};
const updateteHotel = (req, res) => {
  // logica para la actualizacion del hotel
  let response = {};
  res.send(response);
};

module.exports = { getHotel };
