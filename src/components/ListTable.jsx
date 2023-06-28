import React from "react";
import { contactHeader } from "../data/data";
import DeleteIcon from "../assets/trash.png";
import EditIcon from "../assets/pencil.png";
import ModalBtnWrapper from "./ModalBtnWrapper";

const ListTable = ({
  contacts,
  handleEditcontact,
  handleDeletecontact,
  setIsEdit,
}) => {
  console.log("c", contacts);
  return (
    <div className="flex min-h-0  flex-col w-3/4 h-auto mt-10 rounded-xl listtable">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden rounded-xl">
            <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700 bg-gray-700 rounded-xl ">
              <thead className=" top-3 bg-gray-50 dark:bg-gray-700 w-3/4 text-center  ">
                <tr>
                  {contactHeader.map((item, index) => (
                    <th
                      key={index}
                      scope="col"
                      className=" px-6 py-3 text-center  text-gray-50 uppercase font-bold  text-l "
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contacts.map((item) => (
                  <tr
                    key={item.id}
                    className="odd:bg-white text-center even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {item.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {item?.address?.city || item.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      <ModalBtnWrapper
                        overlayMoadal={"#hs-focus-management-modal"}
                      >
                        <img
                          className="inline "
                          src={EditIcon}
                          alt="edit icon"
                          width={20}
                          height={20}
                          onClick={() => handleEditcontact(item.id)}
                        />
                      </ModalBtnWrapper>

                      <ModalBtnWrapper overlayMoadal={"confirm-modal"}>
                        <img
                          className="inline ml-5 mr-5"
                          src={DeleteIcon}
                          alt="delete icon"
                          width={20}
                          height={20}
                          onClick={() => handleDeletecontact(item.id)}
                        />
                      </ModalBtnWrapper>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTable;
