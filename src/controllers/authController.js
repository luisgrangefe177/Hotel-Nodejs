const bcrypt = require("bcrypt");

const { checkUserDB, signToken } = require("../repository/authRepository");

const checkUser = async (req, res) => {
  let response = {};
  try {
    const { email, password } = req.body;
    if (email && password) {
      //revisar que exista un usuario (enviado)
      const [user] = await checkUserDB(email);
      console.log(`user`, user);
      if (user) {
        //const encrypt = await bcrypt.hashSync(password, saltRounds);
        // $2b$10$SWnj6UFl57muSOJcyqCDhuQipINaFv4NVEoBI/Lz2nMbxVHoCwKAW
        // $2b$10$BZ19UpEgJuPliVwVyvixxuEAfHGtmulYxwHMCgkZrwGaucnXQIOPK
        // $2b$10$dHhg/gt0BYXXS4jLsKqgcuXXtOvFYSRtWyPTdxnd4knpglhifsDd2
        //console.log("encriptada: ", encrypt);
        //revisión del usuario en la base de datos.
        //encriptar la contraseña que me envian
        // aaabbbccddd->j3298jf9r3jfef98jsdlfkj3fjj389sd

        //revisó esa contraseña y la comparo con la de la base de datos.
        const match = await bcrypt.compare(password, user.tr_password);
        if (match) {
          const {
            tr_id: id,
            tr_name: name,
            tr_last_name: lastName,
            tr_email: email,
            tr_rol: rol,
          } = user;
          const userClear = { id, name, lastName, email, rol };
          const token = signToken(userClear);
          // response = { state: true, token, user: userClear };
          response = { state: true, data: { token, user: userClear } };
        } else {
          response = {
            state: false,
            message: "Usuario o contraseña no son válidos",
          };
        }
      } else {
        response = { state: false, message: "Usuario no existe" };
      }
    } else {
      response = {
        state: false,
        message: "no proporcionó un usuario y contraseña",
      };
    }
  } catch (error) {
    console.log(error);
  }
  res.send(response);
};

module.exports = { checkUser };
