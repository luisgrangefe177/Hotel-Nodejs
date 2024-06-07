const checkDate = (date) => {
  let response = {
    state: false,
    message: "La fecha ingresada debe ser mayor a la actual",
  };
  const currentDate = new Date();
  const todoDate = new Date(date);

  if (todoDate > currentDate) {
    response = {
      state: true,
      message: "La fecha es mayor o válida",
    };
  }

  return response;
};

const checkPriority = (priority) => {
  let response = {
    state: false,
    message: "La opcion no es valida no es válida",
  };
  // medianita
  const priorityOptions = ["1", "2", "3"];
  if (priorityOptions.includes(priority)) {
    response = {
      state: true,
      message: "La opcion es válida",
    };
  }

  return response;
};

module.exports = { checkDate, checkPriority };
