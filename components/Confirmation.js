import React from 'react'


const Confirmation =() => {
 
  let{name,email,phone,address,dob,gender,noi,event,category,nop,acc}=JSON.parse(localStorage.getItem('details'));

  


  return (
    <>
      
       <table>
        <tbody>
            <tr>
              <td>Name : </td>
              <td>{name}</td>
            </tr>
 
            <tr>
              <td>Email : </td>
              <td>{email}</td>
            </tr>

            <tr>
              <td>Phone : </td>
              <td>{phone}</td>
            </tr>

            <tr>
              <td>Address : </td>
              <td>{address}</td>
            </tr>

            <tr>
              <td>Date of Birth : </td>
              <td>{dob}</td>
            </tr>

            <tr>
              <td>Gender : </td>
              <td>{gender}</td>
            </tr>

            <tr>
              <td>Name of Institution : </td>
              <td>{noi}</td>
            </tr>

            <tr>
              <td>Event : </td>
              <td>{event}</td>
            </tr>

            <tr>
              <td>Category : </td>
              <td>{category}</td>
            </tr>

            <tr>
              <td>Number of Participants : </td>
              <td>{nop}</td>
            </tr>

            <tr>
              <td>Accommodation : </td>
              <td>{acc}</td>
            </tr>

            
        </tbody>
    </table>
   
    </>
      
  )
  }

export default Confirmation