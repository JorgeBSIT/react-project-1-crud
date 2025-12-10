import axios from 'axios';
import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name: '',
        course: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <div className="p-4 border rounded shadow-sm" style={{ maxWidth: "600px", width: "100%" }}>
                    
                    <h2 className="mb-4 text-center">Add a new student</h2>

                    <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter a name"
                        required
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
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
                        required
                        onChange={(e) => setValues({ ...values, course: e.target.value })}
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
                        required
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
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
                        required
                        onChange={(e) => setValues({ ...values, phone: e.target.value })}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-2">
                        <Link to="/" className="btn btn-secondary">
                        Back
                        </Link>
                        <button type="submit" className="btn btn-info text-white">
                        Submit Information
                        </button>
                    </div>

                    </form>

                </div>
            </div>
        </>
    );
}

export default Create