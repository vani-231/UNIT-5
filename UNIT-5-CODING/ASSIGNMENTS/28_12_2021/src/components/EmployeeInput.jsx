export const FormInput = ({ submit, handleChange, isMarried }) => {
    return (
        <>
            <div
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div>
                    <div>
                        <div>
                            <h5 id="staticBackdropLabel">User Details Form</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submit}>
                                <input
                                    onChange={handleChange}
                                    name="fullName"
                                    type="text"
                                    placeholder="Name"
                                />
                                <input
                                    onChange={handleChange}
                                    name="age"
                                    type="number"
                                    placeholder="Age"
                                />
                                <input
                                    onChange={handleChange}
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                />
                                <select onChange={handleChange} name="department">
                                    <option value="">Select Department</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Sales">Sales</option>
                                    <option value="DevOps">DevOps</option>
                                </select>
                                <input
                                    onChange={handleChange}
                                    name="salary"
                                    type="number"
                                    placeholder="Salary"
                                />
                                <div>
                                    <input
                                        onChange={handleChange}
                                        checked={isMarried}
                                        name="isMarried"
                                        type="checkbox"
                                        id="defaultCheck1"
                                    />
                                    <label htmlFor="defaultCheck1">Marital Status</label>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                    <input type="submit" data-bs-dismiss="modal" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};