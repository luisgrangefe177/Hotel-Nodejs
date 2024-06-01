const {
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  completeRoom,
} = require("../repository/Hotelrespository");

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

const createHotel = async (req, res) => {
  let response = {};
  // logica para crear la reserva de hotel
  try {
    const { body } = req;
    console.log("body", body);
    if (
      body.nameperson &&
      body.numRoom &&
      body.typeRoom &&
      body.dataStar &&
      body.dataEnd
    ) {
      response = await createRoom(
        body.nameperson,
        Number(body.numRoom),
        Number(body.typeRoom),
        body.dataStar,
        body.dataEnd
      );
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
      const updateProcess = await updateRoom(
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
      const deleteProcess = await deleteRoom(id_rooms);
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

module.exports = {
  getHotel,
  createHotel,
  updateteHotel,
  deleteHotel,
  UpdateComple,
};
