import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListTable from "./components/ListTable";
import Modal from "./components/Modal";
import { ToastSucess } from "./utils/Toast";
import { FormInputData } from "./data/data";
import AddContact from "./pages/AddContact";

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

    setContacts(data);
    setContactId(data.length);
    setIsEdit(false);
  }, []);

  const deleteData = useCallback(async (id) => {
    try {
      let res = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(res, "data is deleted");
      return res;
    } catch (err) {
      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        console.log(err.response);
      } else if (err.request) {
        // The client never received a response, and the request was never left
        console.log(err.request);
      } else {
        // Anything else
        console.log(err.message);
      }
      throw new Error("something went wrong", err?.message);
    }
  }, []);

  const handleEditcontact = (id) => {
    const editContact = contacts.filter((item) => {
      return item.id === id;
    });
    setIsEdit(true);
    setmodalToggle(true);
    setupdateFormFields(editContact[0]);
    setFormState(editContact[0]);
  };

  const handleDeletecontact = async (id) => {
    const { data } = await deleteData(id);
    // console.log("response from server ========> ", data);

    const updatedContacts = contacts.filter((item) => item.id !== id);

    setContacts([...updatedContacts]);

    document.getElementsByTagName("input")[0].value = "";
    document.getElementsByTagName("input")[1].value = "";
    document.getElementsByTagName("input")[2].value = "";
    document.getElementsByTagName("input")[3].value = "";
    ToastSucess("Contact deleted sucessfully");
  };

  return (
    <div className="App  w-full bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900    flex flex-col justify-start items-center">
      <Header
        setmodalToggle={setmodalToggle}
        setContacts={setContacts}
        contacts={contacts}
      />

      {/* <Modal
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
      /> */}

      <AddContact
        setContacts={setContacts}
        contacts={contacts}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setFormState={setFormState}
        formState={formState}
        contactId={contactId}
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
