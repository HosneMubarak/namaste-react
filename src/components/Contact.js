const Contact = () => {
  return (
    <div className="max-w-sm mx-auto mt-10">
      <h1 className="text-2xl text-center font-bold m-5">Contact us!</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border rounded px-3 py-2"
          required
        />
        <textarea
          placeholder="Message"
          className="border rounded px-3 py-2"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
