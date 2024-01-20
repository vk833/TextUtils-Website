// Feedback.js
import React from 'react'
export default function Feedback(props) {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 mt-12">
        <div className="w-50 border p-4 rounded shadow text-lg" style={{color:props.mode==='dark'?'white':'black'}}>
          <form>
            <h2 className="mb-4"style={{color:props.mode==='dark'?'white':'black'}}>Feedback & Queries</h2>
            <div className="form-group">
              <label className="text-sm">Select Issue*</label>
              <select className="form-control">
                <option value="">-- Select Your Query --</option>
                <option value="Feedback">Feedback</option>
                <option value="CourseRelated">Course Related Queries</option>
                <option value="Payment">Payment Related Issue</option>
                <option value="Hiring">Hiring Related Queries</option>
                <option value="Advertise">Advertise With Us</option>
              </select>
            </div>
            <div className="form-group">
              <label className="text-sm">Email Address*</label>
              <input
                type="email"
                className="form-control"
                placeholder="Write"
              />
            </div>
            <div className="form-group">
              <label className="text-sm">Contact No.</label>
              <input
                type="text"
                className="form-control"
                placeholder="1234567890"
              />
            </div>
            <div className="form-group">
              <label className="text-sm">Drop Your Query</label>
              <textarea
                className="form-control"
                rows="4"
                maxLength="300"
                placeholder="Max Allowed Characters: 300"
              ></textarea>
            </div>
            <button
              className="btn btn-primary btn-block mt-3"
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  