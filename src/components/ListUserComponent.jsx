import React, { useEffect, useState } from "react";
import { deleteUser, listUsers } from "../services/UserService";
import { useNavigate } from "react-router-dom";

const ListUserComponent = () => {
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewUser() {
    navigator(`/add-user`);
  }

  function updateUser(id) {
    navigator(`/edit-user/${id}`);
  }

  function removeUser(id) {
    console.log(id);

    deleteUser(id)
      .then((response) => {
        listUsers()
          .then((response) => {
            setUsers(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="flex justify-center h-screen">
      <div className="container mx-auto my-8">
        <h1 className="text-xl font-bold mb-2 text-center">List of Users</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-md overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Mobile</th>
                <th className="py-2 px-4">Address1</th>
                <th className="py-2 px-4">Address2</th>
                <th className="py-2 px-4">Country</th>
                <th className="py-2 px-4">State</th>
                <th className="py-2 px-4">ZipCode</th>
                <th className="py-2 px-4">Update/Delete</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="transition duration-300 hover:bg-gray-300"
                >
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{`${user.firstName} ${user.lastName}`}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.mobile}</td>
                  <td className="py-2 px-4">{user.address1}</td>
                  <td className="py-2 px-4">{user.address2}</td>
                  <td className="py-2 px-4">{user.country}</td>
                  <td className="py-2 px-4">{user.state}</td>
                  <td className="py-2 px-4">{user.zipCode}</td>
                  <td className="flex justify-content">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white 
                      font-bold py-2 px-4 m-2 rounded"
                      onClick={() => updateUser(user.id)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white 
                      font-bold py-2 px-4 m-2 rounded"
                      onClick={() => removeUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addNewUser}
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default ListUserComponent;
