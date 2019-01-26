import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>Book</strong>
                </label>
                <input
                    className="form-control"
                    id="Title"
                    type="text"
                    value={q}
                    placeholder="Ready for Action"
                    name="q"
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="pull-right">
                <button
                    // onClick={(e) => console.log("hey")}
                    type="submit"
                    className="btn btn-lg btn-danger float-right"
                >Search</button>
            </div>
        </form>
    );
}

export default Form;