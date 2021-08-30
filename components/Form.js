import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Form extends Component {
    

    constructor(props) {
        super(props);
   

        this.state = {
            name: '',
            email: '',
            phone: '',
            address:'',
            dob:'',
            gender:'',
            noi:'',
            event:'',
            category:'',
            nop:'',
            acc:''
        }
        this.initialState = this.state 
    }


    // Form Values-changes whenever a user input or select something

    onChangeName=(e)=> {
        this.setState({ name: e.target.value })
    }

    onChangeEmail=(e)=> {
        this.setState({ email: e.target.value })
    }

    onChangePhone=(e)=> {
        this.setState({ phone: e.target.value })
    }

    onChangeAddress=(e)=>{
        this.setState({ address: e.target.value })
    }

    onChangeDob=(e)=>{
        this.setState({ dob: e.target.value })
    }

    onChangeGender=(e)=>{
        this.setState({ gender: e.target.value })
    }

    onChangeNoi=(e)=>{
        this.setState({ noi: e.target.value })
    }

    onChangeEvent=(e)=>{
        this.setState({ event: e.target.value })
    }
    onChangeCategory=(e)=>{
        this.setState({ category: e.target.value })
    }
    onChangeNop=(e)=>{
        this.setState({ nop: e.target.value })
    }
    onChangeAcc=(e)=>{
        this.setState({ acc: e.target.value })
    }
    
    resetForm = (e) => {
        this.setState(this.initialState)
      }

    onSubmit = (e) => {
        let det={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            address:this.state.address,
            dob:this.state.dob,
            gender:this.state.gender,
            noi:this.state.noi,
            event:this.state.event,
            category:this.state.category,
            nop:this.state.nop,
            acc:this.state.acc
        
        }
        localStorage.setItem('details', JSON.stringify(det));
        alert('Submitted Successfully');
        e.preventDefault();
        this.props.history.push('/confirmation')
        
    }

   
    render() {

        return (
            <form id="form" onSubmit={this.onSubmit}>
            <div className="container">
            <h1>Cultural Event Registration</h1>
                <div class="login">
                    <div className="form-group full">
                        <label>Full Name : </label>
                        <input type="text" className="form-control" id="fname" placeholder="Full Name" value={this.state.name} onChange={this.onChangeName} />
                    </div>


                    <div className="form-group full">
                        <label>Email : </label>
                        <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>


                    <div className="form-group diff">
                        <label>Phone : </label>
                        <input type="tel" className="form-control" id="phone" placeholder="Phone" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>


                    <div className="form-group det full">
                        <label>Address : </label>
                        <input type="text" className="form-control" id="address" placeholder="Address" value={this.state.address} onChange={this.onChangeAddress} />
                    </div>


                    <div className="form-group date diff">
                        <label>Date of Birth : </label>
                        <input type="date" className="form-control" id="date" min="1998-01-01" max="2010-01-01" value={this.state.dob} onChange={this.onChangeDob} />
                    </div>


                    <div className="form-group diff">
                    <label>Gender : </label>
                    <label><input type="radio" value="Male" id="gender" checked={this.state.gender === "Male"} onChange={this.onChangeGender}/>
                    Male
                    </label>
                    <label><input type="radio" value="Female" id="gender" checked={this.state.gender === "Female"} onChange={this.onChangeGender}/>
                    Female
                    </label>
                    </div>

                    
                    <div className="form-group full">
                        <label>Name of Institution : </label>
                        <input type="text" className="form-control" id="iname" placeholder="Name of Institution" value={this.state.noi} onChange={this.onChangeNoi} />
                    </div>



                    <div className="form-group diff">
                    <label>
                     Events : 
                    <select value={this.state.event} id="event" className="event" onChange={this.onChangeEvent}>
                    <option hidden selected>Select</option>
                    <option value="Singing">Singing</option>
                    <option value="Dance">Dance</option>
                    <option value="Skit">Skit</option>
                    <option value="Fashion Show">Fashion Show</option>
                    <option value="Band Battle">Band Battle</option>
                    </select>
                    </label>
                    </div>



                    <div className="form-group diff">
                    <label>Category : </label> 
                    <label><input type="radio" value="Solo" id="category" checked={this.state.category === "Solo"} onChange={this.onChangeCategory}/>
                    Solo
                    </label>
                    <label><input type="radio" value="Duet" id="category"  checked={this.state.category === "Duet"} onChange={this.onChangeCategory}/>
                    Duet
                    </label>
                    <label><input type="radio" value="Group" id="category"  checked={this.state.category === "Group"} onChange={this.onChangeCategory}/>
                    Group
                    </label>

                    
                    </div>
                    <div className="form-group diff">
                    <label>Number of Participants : </label>
                    <input type="number" min="1" max="10" value={this.state.nop} id="participants" onChange={this.onChangeNop}/>
                    </div>


                   <div className="form-group diff">
                   <label for="accommodation">Accommodation : </label>
                 
                   <input type="checkbox" value="Required" id="accommodation" checked={this.state.acc === "Required"} onChange={this.onChangeAcc} />
                   <label for="required">Required</label>
                   
            
                   <input type="checkbox" value="Not Required"id="accommodation"  checked={this.state.acc === "Not Required"} onChange={this.onChangeAcc}/>
                   <label for="notrequired">Not Required</label>
                   </div>
                
                    <div className="form-group button-group">
                    <button type="reset" id="cancel" onClick={this.resetForm}>Reset</button>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div> 
                    </div> 
                
            </div>
            </form>
        )
    }
}

export default withRouter(Form)




