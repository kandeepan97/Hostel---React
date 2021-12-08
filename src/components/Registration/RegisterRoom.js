import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { registerRoom } from "../../actions/registrationActions";
import { getRooms,deleteRoom,getRoomForRegistration} from "../../actions/roomActions";
import axios from "axios";
import { RestoreOutlined } from "@material-ui/icons";

class RegisterRoom extends Component {
  constructor() {
    super();

    this.state = {
      firstName:"",
      lastName:"",
      province:"",
      district:"",
      distance:"",
      address:"",
      bankAddress:"",
      roomId: "",
      selectedRoom: "",
      paymentId:"",
      paymentDate:"",
      status:"",
      email:"",
      floorNumber:"",
      numberOfBeds:"",
      availableBeds:"",

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    let email = localStorage.getItem("email");
    console.log(email);
    let roomIds = getRoomForRegistration(email);

    this.state.roomId =  roomIds

    console.log(this.state.roomId);
    
    this.props.getRoomForRegistration(email);
  }

  

  //life cycle hooks
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors:nextProps.errors});
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(e.target.name);
  }

  onChangeRadio(e) {
    this.setState({ "selectedRoom": e.target.value });

  }
  
  // onValueChange(event) {
  //   this.setState({
  //     selectedOption: event.target.value
  //   });
  // }


  onSubmit(e) {
    e.preventDefault();
    const myRoom = {
      firstName: this.state.firstName,
      lastName:this.state.lastName,
      province:this.state.province,
      district:this.state.district,
      distance:this.state.distance,
      address:this.state.address,
      bankAddress:this.state.bankAddress,
      roomId: this.state.selectedRoom,
      paymentId:this.state.paymentId,
      paymentDate:this.state.paymentDate,
      status:"PENDING",
      email:localStorage.getItem("email"),
      

    };
    console.log("Hello");
    console.log(myRoom);

    this.props.registerRoom(myRoom, this.props.history, myRoom.roomId);
  }

  render() {
    console.log("Actual room property " + this.props.room);
    console.log("Our needed array is " + JSON.stringify(this.props.room.room));
    const {rooms}  = this.props.room;
    console.log("Important " + JSON.stringify(rooms));
    
    return (
      <div>
      <div className="container">
      <div className="row" style={{width:'1000px', margin:'10 auto' ,marginTop:'50px'}}>
              <div className="col-md-12 m-auto"></div>
      <div class="ui form">
      <h1 class="ui dividing header">Register Your Room</h1>
      <form onSubmit={this.onSubmit}>
      <br/>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input type="text" 
            name="firstName" 
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onChange}
            required
            />
          </div>
          <div class="field">
            <input type="text"
             name="lastName" 
             placeholder="Last Name"
             value={this.state.lastName}
             onChange={this.onChange}
             required
             />
          </div>
        </div>
      </div>
      <br/>
      <div class="field">
        
        <div class="fields">

          <div class="ten wide field">
          <label>Address</label>
            <input type="text" 
            name="address" 
            placeholder="Address"
            value={this.state.address}
            onChange={this.onChange}
            required
            />
          </div>
          
          <div class="six wide field">
          <label>Distance From University</label>
            <input type="text" 
            name="distance" 
            placeholder="Distance"
            value={this.state.distance}
            onChange={this.onChange}
            required
            />
          </div>
        </div>
      </div>
      <br/>
      <div class="two fields">
        <div class="field">
          <label>district</label>
          <select class="ui fluid dropdown" value={this.state.district}
          onChange={this.onChange}
          name = 'district'>
            <option value=""></option>
        <option value="Ampara">Ampara</option>
        <option value="Anuradhapura">Anuradhapura</option>
        <option value="Badulla">Badulla</option>
        <option value="Batticaloa">Batticaloa</option>
        <option value="Colombo">Colombo</option>
        <option value="Galle">Galle</option>
        <option value="Gampaha">Gampaha</option>
        <option value="Hambantota">Hambantota</option>
        <option value="Jaffna">Jaffna</option>
        <option value="Kalutara">Kalutara</option>
        <option value="Kandy">Kandy</option>
        <option value="Kegalle">Kegalle</option>
        <option value="Kilinochchi">Kilinochchi</option>
        <option value="Kurunagala">Kurunagala</option>
        <option value="Mannar">Mannar</option>
        <option value="Matale">Matale</option>
        <option value="Matara">Matara</option>
        <option value="Moneragala">Moneragala</option>
        <option value="Mullaitivu">Mullaitivu</option>
        <option value="Nuwara Eliya">Nuwara Eliya</option>
        <option value="Polonnaruwa">Polonnaruwa</option>
        <option value="Puttalam">Puttalam</option>
        <option value="Ratnapura">Ratnapura</option>
        <option value="Trincomalee">Trincomalee</option>
        <option value="Vavuniya">Vavuniya</option>
        
        </select>
        </div>
        <div class="field">
          <label>province</label>
          <select class="ui fluid dropdown" value={this.state.province} onChange={this.onChange} name = 'province'>
            <option value=""></option>
        <option value="Central">Central</option>
        <option value="Eastern">Eastern</option>
        <option value="North Central">North Central</option>
        <option value="Northern">Northern</option>
        <option value="North Westren">North Westren</option>
        <option value="Sabaragamuwa">Sabaragamuwa</option>
        <option value="Southern">Southern</option>
        <option value="Uva">Uva</option>
        <option value="Westren">Westren</option>
        
        </select>
        </div>
        </div>
      <br/>
      <h4 class="ui dividing header">Payment Information</h4>
      <br/>
      <div class="field">
        <label>Bank & Address</label>
        <div class="field">
          <input type="text" 
          name="bankAddress"
          placeholder="Bank Address"
          value={this.state.bankAddress}
          onChange={this.onChange}
          required
          />
        </div>
      </div>
      <br/>
      <div class="fields">
        <div class="ten wide field">
          <label>Receipt Number</label>
          <input type="text" 
          name="paymentId" 
          placeholder="paymentId"
          value={this.state.paymentId}
          onChange={this.onChange}
          required
          />
        </div>
        
        <div class="six wide field">
          <label>Date</label>
            
            <input type="date" 
            name="paymentDate" 
            placeholder="Date"
            value={this.state.date}
            onChange={this.onChange}
            required
            /> 
            </div>
            
          </div>

          <br/>
      <h4 class="ui dividing header">Select Your Room</h4>
      <br/>

      <table class="ui compact celled definition table">
      <thead>
        <tr>
          
          <th>Room Id</th>
          <th>Hostel Id</th>
          <th>Hostel Name</th>
          <th>Floor No</th>
          <th>Number Of Beds</th>
          <th>Available Beds</th>
        </tr>
      </thead>

            {rooms.map(room => (

              <tbody>
              <tr>
                <td><input type="radio" name="selectedRoom" value={room.roomid}  onChange={this.onChange}
               />{"   " + room.roomid}</td>
                <td>{room.hostel.hostelid}</td>
                <td>{room.hostel.hostelName}</td>
                <td>{room.floorNumber}</td>
                <td>{room.numberOfBeds}</td>
                <td>{room.availableBeds}</td>
                </tr>
                </tbody> 
             
            
            ))}
        </table>
        
        
      <input
       type="submit"
       className="btn btn-primary btn-block mt-4"
       />
      <br/>
      </form>
    </div>
      </div>
      </div>
      </div>
    );
  }
}




RegisterRoom.propTypes = {
  getRoomIds:PropTypes.func.isRequired,
  registerRoom: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
  getRoomForRegistration: PropTypes.func.isRequired,
  deleteRoom: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  room: state.room
});


export default connect(
  mapStateToProps,
  {registerRoom,getRoomForRegistration,getRooms}
)(RegisterRoom);