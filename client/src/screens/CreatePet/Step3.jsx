import "./Step3.css";

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-group-3">
      <input
        className="create-image-address"
        id="imgURL"
        name="imgURL"
        type="text"
        placeholder="Enter Image Address"
        value={props.imgURL}
        onChange={props.handleChange}
        required
      />

      <select className="create-animal-type" required name="type" onChange={props.handleChange} id="dropdown2">
        <option value="" disable selected>Select Animal Type</option>
        <option value="Doggo">Doggo</option>
        <option value="Kitty">Kitty</option>
        <option value="Bunny">Bunny</option>  
      </select>
      
    </div>
  );
}
export default Step3;
