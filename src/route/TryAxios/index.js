import React from "react";
import axios from "axios";

export default class Tryaxios extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // persons: [
  //     //   { name_th: "oksir", profileposition_en: "aaaaa" },
  //     //   { name_th: "kikikikikiiki", profileposition_en: "ooPRESIDENT" },
  //     // ],
  //     persons: [],
  //   };
  // }

  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(
        "http://backoffice.thaicc.org/Backoffice/ApiArea/Profile?menu=ทำเนียบคณะกรรมการ"
      )
      .then((res) => {
        const persons = res.data;
        console.log(res.data);
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div>
        {/* {this.state.persons.map((person) => (
          <div>
            {person.profileposition_en == "VICE PRESIDENT" ? (
              <div>{person.name_th}</div>
            ) : (
              <div></div>
            )}
          </div>
        ))} */}
      </div>


    );
  }
}

// https://jsonplaceholder.typicode.com/users
// http://backoffice.thaicc.org/ApiArea/Banner
