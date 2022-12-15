// import "./UsersList.scss";

// import React from "react";
// import UsersDataService from "../../services/users.services.jsx";

// import { Table, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";

// export default function UsersList({ getUserId }) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     const data = await UsersDataService.getAllUsers();
//     console.log(data.docs);
//     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   const deleteHandler = async (id) => {
//     await UsersDataService.deleteUser(id);
//     getUsers();
//   };

//   return (
//     <>
//       <div className="mb-2">
//         <Button variable="dark-edit" onClick={getUsers}>
//           Refresh list
//         </Button>
//       </div>
//       <section>
//         {/* <pre>{JSON.stringify(users, undefined, 2)}</pre> */}
//         <Table striped bordered hover size="sm">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Birth Date</th>
//               <th>City / Province</th>
//               <th>Country</th>
//               <th>Area(s) of Interest</th>
//               <th>Expertise Level</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((doc) => {
//               return (
//                 <tr key={doc.id}>
//                   <td>{doc.name}</td>
//                   <td>{doc.birthDate}</td>
//                   <td>{doc.cityAndProvince}</td>
//                   <td>{doc.country}</td>
//                   <td>{doc.areaOfInterest}</td>
//                   <td>{doc.expertiseLevel}</td>
//                   <td>
//                     <Button
//                       variant="secondary"
//                       className="edit"
//                       onClick={(event) => getUserId(doc.id)}
//                     ></Button>
//                     <Button
//                       variant="danger"
//                       className="delete"
//                       onClick={(event) => deleteHandler(doc.id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </section>
//     </>
//   );
// }
