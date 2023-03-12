import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'

function Home() {
 

  const navigate = useNavigate();

  function handleAndroidApp()
  {
    window.location.href="https://play.google.com/store/apps/details?id=com.statueofunity"
  }
  function handleIOSApp()
  {
    window.localStorage.href="https://apps.apple.com/in/app/statue-of-unity-official/id1541305476#?platform=iphone"
  }
  function handleTicket()
  {
    navigate('/BookTickets')
  }
  return (
    <>
     {
     
    <div className="MainContainer">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.soutickets.in/assets/images/banner_home_img.jpg" className="d-block w-100" alt="..."/>
        <div className='PhotoText'>
          <h3>COME, VISIT</h3>
          <h2>THE STATUE OF</h2>
          <h2>UNITY</h2>
          <h4>WORLD'S</h4>
          <h4>TALLEST STATUE</h4>
          <button type="button" class="btn btn-warning" onClick={handleTicket}>Book Your Ticket Today</button>
        </div>
        <div className='OtherPhotoInfo'>
          <div className="first">
            <h1>Opens at 8:00 AM</h1>
              <h1>Closes at 6:00 PM</h1>
          </div>
          <div className="second">
          <h2>Download Tourist Guide App</h2>
              <h1 className='app' onClick={handleAndroidApp}>Android</h1>
              <h1 className='app' onClick={handleIOSApp}>IOS</h1>
          </div>
          <div className="third">
          <h2>Projection Mapping Show</h2>
            <h1>7:15 PM</h1>
            <h1>Sharp</h1>
          </div>
          <div className="forth">
          <h2>Statue Of Unity Will Remain</h2>
          <h1 style={{color:'Black'}}>Closed On Monday</h1>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.soutickets.in/assets/images/banner_home_img.jpg" className="d-block w-100" alt="..."/>
        <div className='PhotoText'>
        <h3>COME, VISIT</h3>
          <h2>THE STATUE OF</h2>
          <h2>UNITY</h2>
          <h4>WORLD'S</h4>
          <h4>TALLEST STATUE</h4>
        </div>
        <div className='OtherPhotoInfo'>
        <div className="first">
            <h1>Opens at 8:00 AM</h1>
              <h1>Closes at 6:00 PM</h1>
          </div>
          <div className="second">
          <h2>Download Tourist Guide App</h2>
              <h1 className='app' onClick={handleAndroidApp}>Android</h1>
              <h1 className='app' onClick={handleIOSApp}>IOS</h1>
          </div>
          <div className="third">
          <h2>Projection Mapping Show</h2>
            <h1>7:15 PM</h1>
            <h1>Sharp</h1>
          </div>
          <div className="forth">
          <h2>Statue Of Unity Will Remain</h2>
          <h1 style={{color:'Black'}}>Closed On Monday</h1>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://www.soutickets.in/assets/images/banner_home_img.jpg" className="d-block w-100" alt="..."/>
        <div className='PhotoText'>
        <h3>COME, VISIT</h3>
          <h2>THE STATUE OF</h2>
          <h2>UNITY</h2>
          <h4>WORLD'S</h4>
          <h4>TALLEST STATUE</h4>
        </div>
        <div className='OtherPhotoInfo'>
        <div className="first">
            <h1>Opens at 8:00 AM</h1>
              <h1>Closes at 6:00 PM</h1>
          </div>
          <div className="second">
          <h2>Download Tourist Guide App</h2>
              <h1 className='app' onClick={handleAndroidApp}>Android</h1>
              <h1 className='app' onClick={handleIOSApp}>IOS</h1>
          </div>
          <div className="third">
          <h2>Projection Mapping Show</h2>
            <h1>7:15 PM</h1>
            <h1>Sharp</h1>
          </div>
          <div className="forth">
          <h2>Statue Of Unity Will Remain</h2>
              <h1 style={{color:'Black'}}>Closed On Monday</h1>
          </div>
        </div>
      </div>
    </div>





    <div className='handleDetails'>
        <button className="btn btn-primary" id='Details' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Timing Details</button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Timing Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <h2>Opens At :- 8:00 AM</h2>
            <h2>Closes At :- 6:00 PM</h2>
            <hr></hr>
            <hr></hr>
            <h1>Statue Of Unity Will Remain</h1>
            <h2 style={{color:"red"}}>Closed On Monday</h2>
          </div>
        </div>
        <div>
        <button className="btn btn-primary" id='Details1' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Download Application</button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Click Below For Download</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
          <h1 className='app' onClick={handleAndroidApp}>Android</h1>
              <h1 className='app' onClick={handleIOSApp}>IOS</h1>
          </div>
        </div>
      </div>
     
      </div>





    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>











    <h1 style={{textAlign:"center",marginTop:"3rem"}}>: Ticket Window Timings :</h1>
    <div className="table-adjust">
    <div className="table-details">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Age</th>
      <th scope="col">Viewing Gallery</th>
      <th scope="col">Entry Ticket</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">Under 5</th>
      <td>50 Ruppes</td>
      <td>50 Ruppes</td>
      <td>100 Ruppes</td>
    </tr>
    <tr>
      <th scope="row">Between 5-18</th>
      <td>150 Ruppes</td>
      <td>150 Ruppes</td>
      <td>300 Ruppes</td>
    </tr>
    <tr>
    <th scope="row">Between 18-100</th>
      <td>250 Ruppes</td>
      <td>250 Ruppes</td>
      <td>500 Ruppes</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>






  
  <h1 style={{textAlign:"center",marginTop:"3rem"}}>: Ticket Cancellation Policy :</h1>
    <div className="table-adjust">
    <div className="table-details">
    <table className="table">
  <thead>
    <tr>
      <th scope="col">96 hours or more prior to Visit Date</th>
      <th scope="col">96 hours to 48 hours prior to Visit Date</th>
      <th scope="col">48 hours prior to Visit Date</th>
      <th scope="col">On the Date of Visit</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">100%</th>
      <td>80%</td>
      <td>50%</td>
      <td>0%</td>
    </tr>
    <tr>
    <th scope="row">100%</th>
      <td>80%</td>
      <td>50%</td>
      <td>0%</td>
    </tr>
    <tr>
    <th scope="row">100%</th>
      <td>80%</td>
      <td>50%</td>
      <td>0%</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
    </div>
    </div>
}
    </>
    )
}

export default Home