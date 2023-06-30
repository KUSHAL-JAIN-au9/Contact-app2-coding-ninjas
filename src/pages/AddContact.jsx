import React, { useState } from "react";
import { FormInputData } from "../data/data";
import AddContactImg from "../assets/add-contact.png";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastSucess } from "../utils/Toast";

const AddContact = ({
  setContacts,
  contacts,
  isEdit,
  setIsEdit,
  setFormState,
  formState,
}) => {
  //   const [formState, setFormState] = useState({});

  console.log(isEdit);
  const history = useNavigate();
  //   const {
  //     state: { isEdit, contacts },
  //   } = useLocation();

  //   console.log(useLocation());

  const handleFormContact = (e) => {
    const { value, name } = e.target;
    console.log(name);
    const formData = { [name]: value };
    console.log(formData);
    // console.log("id2", id);
    console.log("formstate", formState);
    setFormState((currentData) => {
      return { ...currentData, [name]: value };
    });
  };

  const handleContactSubmit = (e) => {
    console.log("hello", e);
    console.log(
      "all contacts after addine new ",
      formState,
      contacts[contacts.length - 1]
    );

    if (!isEdit) {
      setContacts((currentData) => {
        return [
          ...currentData,
          { ...formState, id: contacts[contacts.length - 1] + 1 },
        ];
      });

      ToastSucess("Contact added sucessfully");
    }
    if (isEdit) {
      const editContactIndex = contacts.findIndex(
        (state) => state.id === formState.id
      );
      console.log("edit index", editContactIndex);
      contacts[editContactIndex] = formState;
      ToastSucess("Contact updated sucessfully");
    }

    // setIsupdate(!isUpdate);
    setFormState({});
    // setmodalToggle(false);
    setIsEdit(false);

    // history("/");
  };
  return (
    <div className=" fluid-container w-full bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900  grid place-items-center">
      <div class=" w-96 flex !border-white-800 flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-7">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Add a contact
          </h3>

          {FormInputData.map((item) => {
            return (
              <div key={item.id}>
                <label
                  for={`input-label-${item.label}`}
                  class="block text-sm font-medium mb-2 dark:text-white"
                >
                  {item.label}
                </label>

                <input
                  key={item.id}
                  type={item.type}
                  name={item.label}
                  id={`input-label-${item.label}`}
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder={item.placeholder}
                  autofocus
                  onChange={handleFormContact}
                  value={formState[item.label] || formState?.address?.city}
                  required

                  // value: formState[item.label] || formState?.address?.city
                />
              </div>
            );
          })}
          <div className="w-full mt-4 flex flex-row flex-wrap justify-start items-center ">
            <button
              type="button"
              class="py-3 px-4  inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800  text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              //   data-hs-overlay="#hs-focus-management-modal"
              onClick={handleContactSubmit}
            >
              <img
                src={AddContactImg}
                className="inline mr-2"
                alt="add contact icon"
                width={20}
                height={20}
              />
              Add Contact
            </button>
            <button
              type="button"
              class="py-3  px-4 ml-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800  text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              // data-hs-overlay="#hs-focus-management-modal"
              onClick={() => {
                history("/");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
