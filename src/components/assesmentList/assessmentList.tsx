import React from 'react';
import './assessmentList.scss';

interface AssessmentListProps {
    users: any | object;
    loading: boolean
}
const AssessmentList: React.FunctionComponent<AssessmentListProps> = ({loading, users}) => {
    return (
    <div className="highlightBlock assessmentList">
      <table>
            <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
              </tr>
          {
              loading ? "" :
              (
                users.map((user: any) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))
              )
          }
      </table>
      {loading ? (<div className='assessmentListLoading'>Loading Users</div>) : ""}
    </div>
      
  );
};

export default AssessmentList;
// 