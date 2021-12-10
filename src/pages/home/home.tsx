import React from 'react';


export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <section className="container">
      <h1>
        Welcome to the homepage of{' '}303 Software's react assessment!
      </h1>
      

      <div className="highlightBlock">
        <h3>Features!</h3>
        <ul>
          <li>Built using parcel, for ez building and hotloading.</li>
          <li>Router, from react-router-dom!</li>
          <li>Typing, from typscript!</li>
          <li>All done in SCSS</li>
          <li>API helped along with Axios!</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
