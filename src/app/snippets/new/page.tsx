import { db } from '@/db'

export default function SnippetCreatePage() {
 async function createSnippet() {
   // This needs to be a server function.
   
   // Check the user's inputs and make sure they're valid.
   
   // Create a new record in the database.

 }

return
  <form>
    <h3 className="font-bold m-3">Create a Snippet</h3>
    <div className="flex flex-col gap-4">
      <div className=" flex gap-4">
        <lable className="w-12" htmlFor="title">
          Title
        </lable>
        <input
        name="title"
        className="border rounded p-2 w-full"
	      id="title"
        />
      </div>
      <div className="flex gap-4">
        <lable className="w-12" htmlFor="code">
          Code
        </lable>
        <textarea
          name="code"
          className="border rounded p-2 w-full"
          id="code"
        />
      </div>
      <button type="submit" className="rounded p-2 bg-blue-200">
        submit button
      </button>
    </div>
  </form> 
}

