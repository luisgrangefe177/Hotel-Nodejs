const {
  gethotelById,
  getRoom,
  createRoom,
} = require("../repository/Hotelrespository");
const { checkPriority } = require("./sharedService");

const checkIdIsNumber = (id_rooms) => {
  if (isNaN(id_rooms)) return false;

  return true;
};

const getHotelService = async (params) => {
  let response = {};
  if (checkIdIsNumber(params.id_rooms)) {
    response = await gethotelById(params.id_rooms);
    if (!response) {
      response = {
        state: false,
        message: "No se encontró información con los parámetros de búsqueda.",
      };
    }
  } else {
    response = {
      state: false,
      message: "El id proporcionado no es un número",
    };
  }
  return response;
};

const getHotelsService = async () => {
  let response = {};

  response = await getRoom();

  return response;
};

const createHotelService = async (body) => {
  let response = {};
  try {
    const { nameperson, numRoom, typeRoom, dateStar, dateEnd } = body;
    const validationtypeRoom = checkPriority(typeRoom);
    if (validationtypeRoom.state) {
      const inserted = await createRoom(
        nameperson,
        numRoom,
        typeRoom,
        dateStar,
        dateEnd
      );
      if (inserted) {
        response.state = true;
        response.data = inserted;
      }
    } else {
      response = validationtypeRoom;
    }
  } catch (error) {
    response = {
      state: false,
      message: error,
    };
  }
  return response;
};

module.exports = {
  getHotelsService,
  getHotelService,
  createHotelService,
};
