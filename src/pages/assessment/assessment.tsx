import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AssessmentList from '../../components/assesmentList/assessmentList';

const Assessment: React.FunctionComponent = () => {
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUsers(res.data);
            setLoading(false);
        }).catch(err => {
            console.log("Fetch of users failed!");
            console.error(err);
        })
    }, [])


  return (
      <section className='container'>
          <h1>This is the assement for 303 Software!</h1>
          <p>Lets do this!</p>

            <AssessmentList
                users={users}
                loading={ loading }
            />
      </section>
  );
};

export default Assessment;