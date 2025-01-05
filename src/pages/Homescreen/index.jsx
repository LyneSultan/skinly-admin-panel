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

    </div >
  )
}
export default HomeScreen;
