import '../styles/sessions/UserSession.css';
import ReadMeElement from '../components/elements/ReadMeElement';
import RoutinesElement from '../components/elements/RoutinesElement';
import WavesElement from '../components/elements/WavesElements';
import GraphElement from '../components/elements/GraphElement';

function UserSession({ userData, setUserData }) {
  const testData = {
    routine:
      [
        {
          "routineId": 1,
          "routineName": "가슴",
          "routineCount": 1,
          "routineOpen": "true",
          "forkCount": 1,
        },
        {
          "routineId": 2,
          "routineName": "등",
          "routineCount": 1,
          "routineOpen": "true",
          "forkCount": 1,
        },
      ]
  }
  const testGraph = {
    1: [
      {
        "allWeight": 100,
        "time": "2022/08/09-12:36:42"
      },
      {
        "allWeight": 120,
        "time": "2022/08/10-13:36:42"
      },
      {
        "allWeight": 150,
        "time": "2022/08/11-14:36:42"
      },
      {
        "allWeight": 160,
        "time": "2022/08/09-12:36:42"
      },
      {
        "allWeight": 220,
        "time": "2022/08/10-13:36:42"
      },
      {
        "allWeight": 230,
        "time": "2022/08/11-14:36:42"
      }
    ],
    2: [
      {
        "allWeight":50,
        "time": "2022/08/07-12:36:42"
      },
      {
        "allWeight": 200,
        "time": "2022/08/10-13:36:42"
      },
      {
        "allWeight": 220,
        "time": "2022/08/12-14:36:42"
      }
    ]
  }

  return (
    <div className="UserSession">
      {userData['isFollow'] !== null && userData['isOpen'] === false
        ? <div className='usersession_private'>
          <img alt='잠금' src={`${process.env.REACT_APP_IMAGE}/media/images/icons/HH_icon_security.png`} />
          <div>private user</div>
        </div>
        : <>
          <div className='usersession_waves'>
            <WavesElement userData={userData} />
          </div>
          <div className='usersession_readme'>
            <ReadMeElement userData={userData} setUserData={setUserData} />
          </div>
          <div className='usersession_routines'>
            <RoutinesElement userData={userData} setUserData={setUserData} />
          </div>
          <div className='usersession_graph'>
            <GraphElement testData={testData} testGraph={testGraph} />
          </div>
        </>}
    </div>
  );
}

export default UserSession;