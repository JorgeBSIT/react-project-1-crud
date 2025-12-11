import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [student, setStudent] = React.useState<any>(null);

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
        .then(res => {
            setStudent(res.data[0]);
            console.log(res.data[0]);
        })
        .catch(err => console.log(err));
    }, [id])

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <div className="p-4 border rounded shadow-sm" style={{ maxWidth: "600px", width: "100%" }}>
                    
                    <h2 className="mb-4 text-center">Student Information</h2>

                    <form>
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter a name"
                        value={student?.name || ''}
                        readOnly
                        />
                    </div>

                    {/* Course */}
                    <div className="mb-3">
                        <label className="form-label">Course</label>
                        <input
                        type="text"
                        name="course"
                        className="form-control"
                        placeholder="Enter a course"
                        value={student?.course || ''}
                        readOnly
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter an email"
                        value={student?.email || ''}
                        readOnly
                        />
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                        <label className="form-label">Phone No.</label>
                        <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Enter a phone number"
                        value={student?.phone || ''}
                        readOnly
                        />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2">
                        <Link to="/" className="btn btn-secondary">
                            Back
                        </Link>
                        <Link to={`/update/${id}`} className="btn btn-info text-white">
                            Update
                        </Link>
                    </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Read