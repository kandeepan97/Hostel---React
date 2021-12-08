import { blue } from "@material-ui/core/colors";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.jpg"
import user from "../../assets/user2.png"

class Landing extends Component {
  
  componentDidMount() {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if (reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload(false);
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }

  render() {

    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div>
                  <div style={{       zIndex: 2,
                    borderRadius:' 12px',
                    top: '64px',
                    width: '662px',
                    padding:'40px',
                    right: '0px',
                    background: '#FFFFFF 0% 0% no-repeat padding-box',
                  //  boxShadow: ' 0px 12px 32px #383B470F',
                    boxShadow: '0px 0px 108px -12px rgba(0,0,0,0.75)',
                    position:' relative',
                    fontWeight:' bold',

                  }}>
                    <h1 className="display-3 mb-4">
                      Hostel Registration System
                    </h1>
                    <h3 className="display-7 mb-2">
                      Sabaragamuwa University Of SriLanka
                    </h3>
                  </div>
                  <div
                      style={{
                    background: 'linear-gradient(90deg, rgba(230,230,224,1) 44%, rgba(255,255,255,1) 50%)',
                             }}
                  >
                    <img
                        style={{
                      borderRadius: '8px',
                          boxShadow: '0px 0px 73px 0px rgba(0,0,0,0.75)',
                          zIndex: 1
                    }}
                         src={home}
                         alt={home}
                    />
                  </div>
                </div>

                <hr/>

                <div style={{
                  zIndex:' 2',
                  borderRadius:' 39px',
                  top:' -272px',
                  width:' 597px',
                  right: '-263px',
                  height: '424px',
                  margin:'0 auto',
                  background: '#FFFFFF 0% 0% no-repeat padding-box',
                 // boxShadow: ' 0px 12px 32px #383B470F',
                  boxShadow: '0px 0px 108px -12px rgba(0,0,0,0.75)',

                  position: 'relative',
                  color: 'lemonchiffon',
                  fontWeight: 'bold',



                }}>
                <h3   style={{
                  color: 'black',
                  paddingTop:' 46px',
                  width: '451px',
                  marginLeft: '75px',
                }} className="display-5 mb-4">
                  Create your account to Register Your Rooms
                </h3>
                  <img
                      style={{
                        zIndex: 1,
                        width:'200px',
                        height:'200px',
                      }}
                      src={user}
                      alt={user}
                  />
                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                  Login
                </Link>
                <br/>
                <Link class="card-text" style={{fontSize: '30px', color:"black"}} to="/ForgetPassword">
                Forget Password
                </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

     <div style={{width:'600px',margin:'0 auto',textAlign:'center'}}>

     <div class="card">
     <div class="card-header" style={{fontSize: '30px'}}>
     About
     </div>
     <div class="card-body">
       <p class="card-text" style={{fontSize: '20px'}}>Our system enables students to select and register hostel rooms, and also  Allows warden to manage hostel records easily</p>
       
     </div>
   </div>


     </div>









          <hr/>
        <div  style={{
          backgroundColor:'blue',
          margin:'0 auto',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          color:'lemonchiffon'
         // height:'400px',
        }}>
         <p> @ All Rights Reserved</p>

        </div>
      </div>
    );
  }
}

export default Landing;