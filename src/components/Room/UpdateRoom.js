import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getRoom,updateRoom } from "../../actions/roomActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

 class UpdateRoom extends Component {

    constructor(){
        super();

        this.state = {
            hostelid: "",
            roomid: "",
            numberOfBeds: "",
            gender:"",
            floorNumber:"",
            faculty:"",
            year:""
            
      
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            hostelid,
            roomid,
            numberOfBeds,
            gender,
            floorNumber,
            faculty,
            year
        } = nextProps.room;

       this.setState({
            hostelid,
            roomid,
            numberOfBeds,
            gender,
            floorNumber,
            faculty,
            year
       });

    } 


     componentDidMount(){
         const { id } = this.props.match.params;
         this.props.getRoom(id, this.props.history);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();

         const updateRoom = {

            hostelid:this.state.hostelid,
            roomid:this.state.roomid,
            numberOfBeds:this.state.numberOfBeds,
            gender:this.state.gender,
            floorNumber:this.state.floorNumber,
            faculty:this.state.faculty,
            year:this.state.year
         };
         this.props.updateRoom(updateRoom,this.props.history);
     }
    render() {
        return (
            <div className="project">
            <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Room</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg "
                             placeholder="Room Id"
                             name="roomid"
                             value={this.state.roomid} 
                             onChange={this.onChange}
                             required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            placeholder="Hostel Id"
                            name="hostelid"
                            value={this.state.hostelid}
                            onChange={this.onChange}
                            required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                             placeholder="Number Of Beds"
                             name="numberOfBeds"
                             value={this.state.numberOfBeds}
                             onChange={this.onChange}
                             required/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Room Type"
                         name="gender"
                         value={this.state.gender}
                         onChange={this.onChange}
                         required/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                     placeholder="Floor Number"
                     name="floorNumber"
                     value={this.state.floorNumber}
                     onChange={this.onChange}
                     required/>
                </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                     placeholder="Faculty"
                     name="faculty"
                     value={this.state.faculty}
                     onChange={this.onChange}
                     required/>
                </div>
                
                <div className="form-group">
                <input type="text" className="form-control form-control-lg"
                 placeholder="Year"
                 name="year"
                 value={this.state.year}
                 onChange={this.onChange}
                 required/>
            </div>


                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

UpdateRoom.propTypes = {
    getRoom: PropTypes.func.isRequired,
    updateRoom:PropTypes.func.isRequired,
    room: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    room: state.room.room
});

export default connect(
    mapStateToProps,
    {getRoom,updateRoom} 
    )(UpdateRoom);