import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, getUser, updateUser } from "../services/UserService";

const UserComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((response) => {
          const userData = response.data;
          console.log(userData);
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
          setMobile(userData.mobile);
          setAddress1(userData.address1);
          setAddress2(userData.address2);
          setCountry(userData.country);
          setState(userData.state);
          setZipCode(userData.zipCode);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const saveOrUpdateUser = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      mobile,
      address1,
      address2,
      country,
      state,
      zipCode,
    };
    console.log(user);

    if (id) {
      updateUser(id, user)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createUser(user)
        .then((response) => {
          console.log(response.data);
          navigate("/users");
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
    }
  };

  const validateForm = () => {
    if (firstName.length < 5) {
      alert("First Name must be at least 5 characters");
      return false;
    }
    if (lastName.length < 5) {
      alert("Last Name must be at least 5 characters");
      return false;
    }
    if (!isValidEmail(email)) {
      alert("Invalid Email format");
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function pageTitle() {
    if (id) {
      return (
        <h1 className="text-xl font-bold mb-0 text-center">Update User</h1>
      );
    }
    return <h1 className="text-xl font-bold mb-0 text-center">Create User</h1>;
  }

  return (
    <div className="container mx-auto my-8">
      {/* <h1 className="text-xl font-bold mb-0 text-center">Create User</h1> */}
      {/* <form onSubmit={handleSubmit} className="max-w-lg mx-auto"> */}

      {pageTitle()}
      <form className="max-w-lg mx-auto">
        <div className="mb-1">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="mobile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter mobile"
            required
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="address1"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address 1
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter address 1"
            required
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="address2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address 2
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter address 2"
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter country"
            required
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="state"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter state"
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="zipCode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter zip code"
          />
        </div>

        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={saveOrUpdateUser}
          >
            Submit
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserComponent;
