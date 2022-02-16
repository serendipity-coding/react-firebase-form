import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { projectFirestore } from "../firebase/config";

const Form = () => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptCdt, setAcceptCdt] = useState(true);
  const [nameTwo, setNameTwo] = useState("");
  const [familyNameTwo, setFamilyNameTwo] = useState("");
  const [emailTwo, setEmailTwo] = useState("");
  const [acceptCdtTwo, setAcceptCdtTwo] = useState(true);
  const [numberInscription, setNumberInscription] = useState(1);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [withGuest, setWithGuest] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !familyName || !email) {
      setErrorSubmit(true);
    } else {
      setErrorSubmit(false);
      const doc = {
        name,
        familyName,
        email,
        acceptCdt,
      };
      try {
        await projectFirestore.collection("users").add(doc);
        setSuccessMessage(true);
        setEmail("");
        setFamilyName("");
        setName("");
        setErrorSubmit(false);
        setTimeout(function () {
          window.location.replace("https://avaulxcross.com/");
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleTwoUsers = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !familyName ||
      !email ||
      !nameTwo ||
      !familyNameTwo ||
      !emailTwo
    ) {
      setErrorSubmit(true);
    } else {
      setErrorSubmit(false);
      const doc1 = {
        name,
        familyName,
        email,
        acceptCdt,
      };
      const doc2 = {
        nameTwo,
        familyNameTwo,
        emailTwo,
        acceptCdtTwo,
      };
      try {
        await projectFirestore.collection("users").add(doc1);
        await projectFirestore.collection("users").add(doc2);
        setSuccessMessage(true);
        setEmail("");
        setFamilyName("");
        setName("");
        setEmailTwo("");
        setFamilyNameTwo("");
        setNameTwo("");
        setErrorSubmit(false);
        setTimeout(function () {
          window.location.replace("https://avaulxcross.com/");
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="form bg-white m-6 mt-10 mb-10 w-1/3 rounded-xl ">
      <div className=" flex items-center flex-col justify-center py-16  sm:px-6 lg:px-8">
        <h3 className="text-primary text-3xl font-bold text-center">
          J’ACCEPTE L’INVITATION
        </h3>
        <div className="mt-2 w-full">
          <div className="select">
            <label className="mr-2">Nombre de personnes</label>
            <select
              id="form-select"
              className="appearance-none relative block w-1/5 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
              onChange={(e) => {
                setNumberInscription(e.target.value);
                if (e.target.value === "2") {
                  setWithGuest(true);
                } else {
                  setWithGuest(false);
                }
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          {!withGuest ? (
            <form className=" space-y-8 ">
              <div className="rounded-lg shadow-sm mt-4  ">
                <div className="mb-4  ">
                  <label htmlFor="text" className="sr-only">
                    Nom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="nom"
                    required
                    value={name}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Nom *"
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrorSubmit(false);
                    }}
                  />
                </div>
                <div className="mb-4  ">
                  <label htmlFor="text" className="sr-only">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="prenom"
                    value={familyName}
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Prénom *"
                    onChange={(e) => {
                      setFamilyName(e.target.value);
                      setErrorSubmit(false);
                    }}
                  />
                </div>
                <div className="mb-4  ">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Address email *"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorSubmit(false);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={acceptCdt}
                    onChange={(e) => {
                      setAcceptCdt(e.target.checked);
                    }}
                    className="h-4 w-4 text-primary  border-gray-300 rounded bg-primary"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Je reconnais avoir pris connaissance
                  </label>
                </div>
              </div>

              <div>
                <button
                  // type="submit"
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-white focus:outline-none focus:ring-2 hover:text-primary focus:ring-offset-2 hover:border-primary"
                >
                  J’accepte
                </button>
              </div>
              {errorSubmit && (
                <div className="error">Merci de remplir tous les champs</div>
              )}
              {successMessage && (
                <div className="text-green-600 text-bold">
                  Merci d'avoir accepté notre invitation
                </div>
              )}
            </form>
          ) : (
            // two guests
            <>
              <div class="grid grid-cols-2 gap-4">
                {/* first guest */}
                <div>
                  <form className=" space-y-8 ">
                    <div className="rounded-lg shadow-sm mt-4  ">
                      <div className="mb-4  ">
                        <label htmlFor="text" className="sr-only">
                          Nom
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="nom"
                          required
                          value={name}
                          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                          placeholder="Nom *"
                          onChange={(e) => {
                            setName(e.target.value);
                            setErrorSubmit(false);
                          }}
                        />
                      </div>
                      <div className="mb-4  ">
                        <label htmlFor="text" className="sr-only">
                          Prénom
                        </label>
                        <input
                          id="prenom"
                          name="prenom"
                          type="prenom"
                          value={familyName}
                          required
                          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                          placeholder="Prénom *"
                          onChange={(e) => {
                            setFamilyName(e.target.value);
                            setErrorSubmit(false);
                          }}
                        />
                      </div>
                      <div className="mb-4  ">
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          value={email}
                          autoComplete="email"
                          required
                          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                          placeholder="Address email  *"
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setErrorSubmit(false);
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={acceptCdt}
                          onChange={(e) => {
                            setAcceptCdt(e.target.checked);
                          }}
                          className="h-4 w-4 text-primary  border-gray-300 rounded bg-primary"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Je reconnais avoir pris connaissance
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                {/* second guest */}
                <div>
                  <form className=" space-y-8 ">
                    <div className="rounded-lg shadow-sm mt-4  ">
                      <div className="mb-4  ">
                        <label htmlFor="text" className="sr-only">
                          Nom
                        </label>
                        <input
                          id="nom"
                          name="nom"
                          type="nom"
                          required
                          value={nameTwo}
                          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                          placeholder="Nom *"
                          onChange={(e) => {
                            setNameTwo(e.target.value);
                            setErrorSubmit(false);
                          }}
                        />
                      </div>
                      <div className="mb-4  ">
                        <label htmlFor="text" className="sr-only">
                          Prénom
                        </label>
                        <input
                          id="prenom"
                          name="prenom"
                          type="prenom"
                          value={familyNameTwo}
                          required
                          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                          placeholder="Prénom *"
                          onChange={(e) => {
                            setFamilyNameTwo(e.target.value);
                            setErrorSubmit(false);
                          }}
                        />
                      </div>
                      <div className="mb-4  ">
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          value={emailTwo}
                          autoComplete="email"
                          required
                          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:primary focus:border-primary focus:z-10 sm:text-sm"
                          placeholder="Address email  *"
                          onChange={(e) => {
                            setEmailTwo(e.target.value);
                            setErrorSubmit(false);
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={acceptCdtTwo}
                          onChange={(e) => {
                            setAcceptCdtTwo(e.target.checked);
                          }}
                          className="h-4 w-4 text-primary  border-gray-300 rounded bg-primary"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Je reconnais avoir pris connaissance
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <button
                  onClick={handleTwoUsers}
                  className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-white focus:outline-none focus:ring-2 hover:text-primary focus:ring-offset-2 hover:border-primary"
                >
                  J’accepte
                </button>
              </div>
              {errorSubmit && (
                <div className="error">Merci de remplir tous les champs</div>
              )}
              {successMessage && (
                <div className="text-green-600 text-bold">
                  Merci d'avoir accepté notre invitation
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
