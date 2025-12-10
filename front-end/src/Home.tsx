import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

interface Student {
  id: number;
  name: string;
  course: string;
  email: string;
  phone: string;
}

function Home() {
  const [data, setData] = useState<Student[]>([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="container-fluid p-3">
        {/* Title */}
        <div className="text-center mt-4 mb-4">
          <h2>Student List</h2>
        </div>

        {/* Add button */}
        <div className="d-flex justify-content-start mb-3">
          <Link to="/create" className="btn btn-success">Add +</Link>
        </div>

        {/* Responsive table */}
        <div className="table-responsive">
          <table className="table table-striped table-hover text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="table-group-divider align-middle">
              {data.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>

                  <td className="d-flex gap-2 justify-content-center flex-wrap">
                    <button className="btn btn-info">Read</button>
                    <button className="btn btn-warning">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home