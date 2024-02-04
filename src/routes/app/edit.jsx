import { Form } from "react-router-dom";

export function Edit() {
  return (
    <>
      <h1>Edit Media Listing</h1>
      <Form className='flex flex-col space-y-4 mt-4'>
        <input type='text' placeholder='Listing Name' />
        <input type='text' placeholder='Media Title' />
        <input type='text' placeholder='Media Description' />
        <input type='text' placeholder='Media URL' />
        <input type='text' placeholder='Image URL' />
        <select>
          <option value='audio'>Audio</option>
          <option value='video'>Video</option>
        </select>
        <div className='flex flex-row space-x-4 ms-auto'>
          <button className='button' role='button'>
            Save
          </button>
          <button className='button bg-stone-500' role='button'>
            Cancel
          </button>
        </div>
      </Form>
    </>
  );
}
