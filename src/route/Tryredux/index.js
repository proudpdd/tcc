import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, Route } from "react-router-dom";

const Tryredux = () => {
  const [persons, setPersons] = useState([]);

  const history = useHistory();
  //   const OnClickTry = () => {
  //     history.push({ pathname: "/media/"${name_en} });
  //   };

  axios
    .get(
      `http://backoffice.thaicc.org/Backoffice/ApiArea/Profile?menu=ทำเนียบคณะกรรมการ`
    )
    .then((res) => {
      const letti = res.data;
      setPersons(letti);
    });

  return (
    <div>
      {persons.map((person) => (
        <div>
          {/* <Link to={`/test/${person.name_en}`}>{person.name_th}</Link>; */}sldc ncsiud
        </div>
      ))}
    </div>
  );
};

export default Tryredux;
