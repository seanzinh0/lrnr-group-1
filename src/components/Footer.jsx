const Footer = () => {
  return (
    <>
      {/*footer will go to bottom with more stuff added to page*/}
      <footer className="h-fit w-full flex justify-center items-center bg-blue-600 text-white p-10">
        <div className="flex justify-between align-top">
          <p className="w-1/2">
            "Embrace the power of our app and unlock the secrets of the
            universe, one quiz at a time. As i always sat, Yesterday is history,
            tomorrow is a mystery, but today is a gift. that is why it is called
            the present."
          </p>
          <div>
            <h1 className="text-3xl">Links</h1>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
