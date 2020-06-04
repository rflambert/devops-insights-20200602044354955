import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

function City(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (value) => {
        setValidationError('');
        props.onCityNameChange(value);
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="City name..."
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event.target.value);
                            }
                        }}
                    ></input> 
                </div>
                <Button
                    variant={"primary"}
                    onClick={() => {
                        validate(document.getElementById("usr").value);
                    }}
                >Search</Button>  
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default City