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

const getTodoById = async (id_rooms) => {
  try {
    const sql = "select * from tb_rooms where id_rooms=?";

    const [rows] = await connection.query(sql, [id_rooms]);

    return rows;
  } catch (error) {
    return error;
  }
};

const createRoom = async (
  nameperson,
  numRoom,
  typeRoom,
  dateStar,
  dateEnd,
  letteRoom,
  catDays,
  costRom,
  costTotal
) => {
  try {
    const sql =
      "insert into tb_rooms(tr_nameperson,tr_numRoom,tr_typeroom,tr_starDate,tr_dateEnd,tr_letterRoom,tr_catDays,tr_costRom,tr_costTotal) values (?,?,?,?,?,?,?,?,?)";

    const [rows] = await connection.query(sql, [
      nameperson,
      numRoom,
      typeRoom,
      dateStar,
      dateEnd,
      letteRoom,
      catDays,
      costRom,
      costTotal,
    ]);

    return rows;
  } catch (error) {
    return error;
  }
};

const updateRoom = async (
  id_rooms,
  nameperson,
  numRoom,
  typeRoom,
  dateStar,
  dateEnd,
  letteRoom,
  catDays,
  costRom,
  costTotal,
  completed
) => {
  try {
    const sql =
      "update tb_rooms set tr_nameperson=?,tr_numRoom=?,tr_typeroom=?,tr_starDate=?,tr_dateEnd=?,tr_letterRoom=?,tr_catDays=?,tr_costRom=?,tr_costTotal=?,tr_complet=? where id_rooms=?";
    const [rows] = await connection.query(sql, [
      nameperson,
      numRoom,
      typeRoom,
      dateStar,
      dateEnd,
      letteRoom,
      catDays,
      costRom,
      costTotal,
      completed,
      id_rooms,
    ]);
    return rows;
  } catch (error) {
    return error;
  }
};

const deleteRoom = async (id_rooms) => {
  const sql = "delete from tb_rooms where id_rooms=?";

  const [rows] = await connection.query(sql, [id_rooms]);

  return rows;
};

const completeRoom = async (id_rooms) => {
  const sql = "update tb_rooms set tr_complet=? where id_rooms=?";

  const [rows] = await connection.query(sql, [true, id_rooms]);

  return rows;
};

module.exports = {
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
  completeRoom,
  getTodoById,
};
