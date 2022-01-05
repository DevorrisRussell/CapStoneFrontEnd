// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./addEquipment.css";

// function DeleteEquipment() {
//   const jwt = localStorage.getItem("token");
//   let configObject = {
//     headers: {
//       "x-auth-token": jwt,
//     },
//   };
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [color, setColor] = useState("");
//   const [serialNumber, setserialNumber] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     let response = await axios.post("http://localhost:5000/api/equipments", {
//       name: name,
//       description: description,
//       color: color,
//       serialNumber: serialNumber,
//     });
//     console.log(response.data);

//     window.location = "/Home";
//   }

//   return (
//     <div>
//       <h1>Add a new Equipment</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group" size="lg" controlId="Name">
//           <label className="form-label">
//             <h2>Name of Equipment</h2>
//           </label>
//           <input
//             autoFocus
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <div className="form-group" size="lg" controlId="Description">
//             <label className="form-label">
//               <h2>Description</h2>
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             ></textarea>

//             <div className="form-group" size="lg" controlId="Name">
//               <label className="form-label">
//                 <h2>Color</h2>
//               </label>
//               <input
//                 autoFocus
//                 type="text"
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//               />
//               <div className="form-group" size="lg" controlId="Name">
//                 <label className="form-label">
//                   <h2>Serial Number</h2>
//                 </label>
//                 <input
//                   autoFocus
//                   type="text"
//                   value={serialNumber}
//                   onChange={(e) => setserialNumber(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div class="d-grid gap-2 col-1 mx-auto float-right">
//               <button class="btn btn-secondary" type="submit">
//                 <h3>Add</h3>
//               </button>
//             </div>

//             <div class="col-md-3">
//               <img
//                 src="https://media.istockphoto.com/photos/using-lawn-mower-picture-id96926811?b=1&k=20&m=96926811&s=170667a&w=0&h=lFvhJ-TI2Tak4dHryZrSeLMcJxPs1qL-lCBOxYdo-Ao="
//                 class="rounded float-start"
//               ></img>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default DeleteEquipment;
