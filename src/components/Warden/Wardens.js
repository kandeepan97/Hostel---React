import React, { Component } from "react";
import { connect } from "react-redux";
import { getWardens,deleteWarden } from "../../actions/wardenActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import ManageCard from '../../common/ManageCard' 


class Wardens extends Component {
  componentDidMount(){
    this.props.getWardens();
  }

  onDeleteClick = (id) => {
    this.props.deleteWarden(id);
  };
  


  render() {
    const { wardens } = this.props.warden;
    return (
      
    <div className="container">
      <div className="card card-body bg-light mb-3">
          <div className="row">
                  <div className="col-lg-2 col-md-2 col-4">
                  <h3>Wardens</h3>
                  </div>
          </div>
          <hr/>

        {wardens.map(warden => (
      
        <div class="ui list" style={{backgroundColor:'#e3e3e3', padding:'20px', marginBottom:'10px', }}>
         <div class="item" style={{display: "flex", justifyContent: "space-between",}}>
          <img class="ui avatar image" style={{height: '100%', width: '80px'}} src="https://www.w3schools.com/howto/img_avatar.png"/>
                         <div class="content" style={{paddingLeft: '5px'}}>
                            <h3 class="header" style={{textTransform: "uppercase", marginBottom:"10px"}} >{warden.firstName +"_"+ warden.lastName}</h3>
                                  <div class="description">
                                        <h5>
                                        {warden.email} 
                                        </h5>
                                        {warden.wardenid}
                                        
                                  </div>
                                  <div>
                                      {warden.hostelId}
                                  </div>
                          </div>

             
                        <div class="extra content">
                            <div class="ui two buttons" >
                              <div class="ui basic green button" style={{margin:'15px'}}>
                                  <Link to={`/updateWarden/${warden.wardenid}`}>
                                    Update
                                  </Link>
                              </div>
                            <div class="ui basic red button" style={{margin:'15px'}} onClick={this.onDeleteClick.bind(this, warden.wardenid)}>
                            Delete
                            </div>
                        </div>    
        </div>
      </div>
   </div>

          ))}
  </div>
</div>

        
      
    );
  }
}

Wardens.propTypes = {
  warden: PropTypes.object.isRequired,
  getWardens: PropTypes.func.isRequired,
  deleteWarden:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  warden: state.warden
});

export default connect(
  mapStateToProps,
  {getWardens,deleteWarden}
  ) (Wardens);
