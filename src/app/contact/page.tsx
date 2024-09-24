export default function contact() {
  return (
    <div className="w-screen px-[20%] mt-[10vh]">
      <h2 className="text-teal-600 font-bold text-5xl">Contact Me</h2>

      <p className="text-lg my-3">If you have any questions or queries, please do contact me using any of the methods below.</p>
      <div className="mt-10">
        <div className="flex flex-row my-3">
          <h3 className="font-bold text-xl">Email:</h3>
          <h3 className="text-xl ml-2">tobywchambers@gmail.com</h3>
        </div>
        <div className="flex flex-row my-3">
          <h3 className="font-bold text-xl">Phone:</h3>
          <h3 className="text-xl ml-2">07479 219386</h3>
        </div>
      </div>
    </div>
  );
}
