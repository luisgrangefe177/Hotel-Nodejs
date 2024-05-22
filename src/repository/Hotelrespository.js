const connection = require("../config/mysql.connection");

const getRoom = async () => {
  try {
    const sql = "select * from tb_rooms";

    const [rows, fields] = await connection.query(sql);

    return rows;
  } catch (error) {
    return error;
  }
};

const createRoom = (
  namePerson,
  numRoom,
  typeRoom,
  dateStar,
  dateEnd,
  letteRoom
) => {};

const updateRoom = (
  id_rooms,
  namePerson,
  numRoom,
  typeRoom,
  dateStar,
  dateEnd,
  letteRoom,
  completed
) => {};

const deleteRoom = (id_rooms) => {};

module.exports = {
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
};
