import './../../style/base.css';
import './style.css';
const HomeScreen = () => {
  return (
    <div >
      <div className="card flex justify-center align-center">
        <div className="card-content ">
          <div className='flex space-around'>
            <div className="card-number">32</div>
            <img src="/images/user.png" />
          </div>

          <div className="card-text">Number of Skinly Users</div>

        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Users</th>
              <th>Companies</th>
            </tr>
            <tr>
              <th>User's name</th>
              <th>nb of requests</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index}>
                <td>Lyne</td>
                <td>10</td>
                <td>
                  <button className="ban">Ban</button>
                  <button className="unban">Unban</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="view-more">View more</div>
      </div>
    </div>

  )
}

export default HomeScreen;
