const {
  getRoom,
  createRoom: createDB,
  updateRoom: updateDB,
  deleteRoom: deleteDB,
  completeRoom,
} = require("../repository/Hotelrespository");
const {
  createHotelService,
  getHotelService,
  getHotelsService,
} = require("../service/HotelService");

//donde enviamos el Hotel
const getHotel = async (req, res) => {
  //   console.log(`req`, req);
  const { query, params } = req;
  // https://mipagina.com?id=4 -> query params
  // https://mipagina.com/1 -> path params

  console.log(`query`, query);
  console.log(`params`, params);
  let response = [];
  console.log(`response`, response);
  if (params.id) {
    response = await getHotelService(params);
  } else {
    response = await getHotelsService();
  }

  res.send(response);
};

const createHotel = async (req, res) => {
  let response = {};
  // logica para crear la reserva de hotel
  try {
    const { body } = req;
    if (
      body.nameperson &&
      body.numRoom &&
      body.typeRoom &&
      body.dataStar &&
      body.dataEnd
    ) {
      response = await createHotelService(body);
      if (inserted) {
        response.state = true;
        response.data = inserted;
      }
    }
  } catch (error) {
    response = {
      state: false,
      message: "Ocurrio un error por favor consultar a Luis",
    };
    console.log(error);
  }
  res.send(response);
};

const updateteHotel = async (req, res) => {
  // logica para la actualizacion del hotel
  let response = {
    state: false,
  };

  try {
    const {
      params: { id_rooms },
    } = req;
    const {
      body: { nameperson, numRoom, typeRoom, dataStar, dataEnd },
    } = req;

    if (id_rooms && nameperson && numRoom && typeRoom && dataStar && dataEnd) {
      const updateProcess = await updateDB(
        id_rooms,
        nameperson,
        numRoom,
        typeRoom,
        dataStar,
        dataEnd
      );
      console.log(updateProcess);
      response.state = true;
      response.process = updateProcess;
    } else {
      response.message = "No indicó un id o un parametro para actualizar";
    }
  } catch (error) {
    response = {
      state: false,
      message: "Ocurrió un error inesperado, consulta al administrador",
    };
    console.log(error);
  }

  res.send(response);
};

const deleteHotel = async (req, res) => {
  let response = {
    state: false,
  };
  try {
    const {
      params: { id_rooms },
    } = req;

    if (id_rooms) {
      const deleteProcess = await deleteDB(id_rooms);
      response.state = true;
      response.process = deleteProcess;
    } else {
      response.message = "No hay un id a eliminar";
    }
  } catch (error) {
    response = {
      state: false,
      message: "Ocurrió un error inesperado, consulta al administrador",
    };
    console.log(error);
  }

  //lógica para eliminar una reserva
  res.send(response);
};

const UpdateComple = async (req, res) => {
  let response = {
    state: false,
  };
  try {
    const {
      params: { id_room },
    } = req;
    if (id_room) {
      const completeProcess = await completeRoom(id_room);
      response.state = true;
      response.process = completeProcess;
    } else {
      response.message = "No indicó un id o una prioridad a actualizar";
    }
  } catch (error) {
    response = {
      state: false,
      message: "Ocurrió un error inesperado, consulta al administrador",
    };
    console.log(error);
  }

  res.send(response);
};

const getAllHotels = async (req, res) => {
  const { query, params } = req;
  let response = [];
  if (params.id_room) {
  } else {
    const responseSQL = await getRoom(); // ->sql
    response = [...responseSQL];
  }

  res.send(response);
};
module.exports = {
  getHotel,
  createHotel,
  updateteHotel,
  deleteHotel,
  UpdateComple,
  getAllHotels,
};
