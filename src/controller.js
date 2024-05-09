const handleHome = (req, res) => {
    const todos = [
      {
        description: "ir al gimnasio",
        priority: "alta",
        date: "2024-09-13",
      },
    ];
    res.send(todos);
  };
  
  const handleReport = (req, res) => {
    // engine
    let responsex = `
    <table>
    <thead>
      <tr>
      <td>name</td>
      <td>last name</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>pedro</td>
      <td>perez</td>
      </tr>
    </tbody>
    </table>
    `;
  
    // res.send(response);
    const title = "pedro";
    const users = [
      { name: "pedro", lastName: "perez" },
      { name: "juan", lastName: "gomez" },
      { name: "maria", lastName: "martinez" },
      { name: "fede", lastName: "feliz" },
      { name: "ana", lastName: "diaz" },
    ];
  
    res.render("../src/views/report", { title, users });
  };
  
  module.exports = { handleHome, handleReport };
  