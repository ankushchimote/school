import React from 'react'
import { useForm } from 'react-hook-form';
import jsPDF from 'jspdf';

const Admission = () => {

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    alert("Submit successful!");

    const doc = new jsPDF();
    doc.text(`Name: ${data.name}`, 10, 10);
    doc.text(`Email: ${data.email}`, 10, 20);
    doc.text(`10th Marksheet: ${data.marksheet10[0].name}`, 10, 30);
    doc.text(`12th Marksheet: ${data.marksheet12[0].name}`, 10, 40);
    doc.save('form.pdf');

    reset();
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>Name:</label>
      <input type="text" {...register('name', { required: true })} />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" {...register('email', { required: true })} />
    </div>
    <div>
      <label>10th Marksheet:</label>
      <input type="file" {...register('marksheet10', { required: true })} />
    </div>
    <div>
      <label>12th Marksheet:</label>
      <input type="file" {...register('marksheet12', { required: true })} />
    </div>
    <button type="submit">Submit</button>
  </form>
    <div>
      <h2>Important Dates</h2>
      <p>"Admission Form Availability: March 1st"<br />
          "Last Date for Submission: March 31st"<br />
          "Entrance Test: April 15th"<br />
           "Announcement of Results: April 30th"</p>
    </div>
    </>
  )
}

export default Admission