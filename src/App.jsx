import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListTable from "./components/ListTable";
import Modal from "./components/Modal";
import { ToastSucess } from "./utils/Toast";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isUpdate, setIsupdate] = useState(false);
  const [updateFormFields, setupdateFormFields] = useState({});
  const [contactId, setContactId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [formState, setFormState] = useState({});
  const [modalToggle, setmodalToggle] = useState(false);

  useEffect(() => {
    fetchData().catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setContactId(contacts.length);
  }, [contactId, isUpdate, updateFormFields, isEdit]);

  const fetchData = useCallback(async () => {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(data, "rerender");

    setContacts(data);
    setContactId(data.length);
    setIsEdit(false);
  }, []);

  const handleEditcontact = (id) => {
    console.log("edit contact", id, contacts);

    const editContact = contacts.filter((item) => {
      return item.id === id;
    });
    setIsEdit(true);
    setmodalToggle(true);
    console.log("edit contact is ==========", editContact[0]);
    setupdateFormFields(editContact[0]);
    setFormState(editContact[0]);
  };

  const handleDeletecontact = (id) => {
    console.log("delete contact", id);

    const updatedContacts = contacts.filter((item) => item.id !== id);

    setContacts([...updatedContacts]);
    ToastSucess("Contact deleted sucessfully");
  };

  // const getContactList = async () => {
  //   let { data } = await axios.get(
  //     `https://jsonplaceholder.typicode.com/users`
  //   );
  //   console.log(data);
  // };

  console.log("contacts", contacts, contactId, isUpdate);
  console.log("updateFormFields", updateFormFields);
  return (
    <div className="App min-h-screen w-full  bg-amber-400 flex flex-col justify-start items-center">
      <Header setmodalToggle={setmodalToggle} />

      <Modal
        setContacts={setContacts}
        id={contactId}
        setIsupdate={setIsupdate}
        isUpdate={isUpdate}
        isEdit={isEdit}
        setFormState={setFormState}
        formState={formState}
        updateFormFields={updateFormFields}
        name={"hs-focus-management-modal"}
        setmodalToggle={setmodalToggle}
        modalToggle={modalToggle}
        contacts={contacts}
        setIsEdit={setIsEdit}
      />
      <ListTable
        contacts={contacts}
        handleEditcontact={handleEditcontact}
        handleDeletecontact={handleDeletecontact}
        setIsEdit={setIsEdit}
      />
    </div>
  );
}

export default App;
