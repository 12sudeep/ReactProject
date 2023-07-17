const clickFunction = () => {
  window.location.href = 'https://aminoapps.com/c/anime-empire-1/page/item/shiba-tatsuya/QxNQ_6sYIJ74wqp4RMk8YPGzDgK0BzXJY';
};

function Profile(props) {
  const profile = props.person;

  return (
    <div className="profile_card">
      <h1>{profile.name}</h1>
      <img src={profile.picture} alt="you" className="me hover-image" />
      <p>{profile.description1}</p>
      <p>{profile.description2}</p>
      <button className="clicked" id="next-button" onClick={clickFunction}>
        Click here
      </button>
    </div>
  );
}

const Profiles = () => {
  const profiles = [
    {
      name: "SUDEEP FULLEL",
      description1: "Hello guys . I am the magician from the red clouds",
      description2: "click here to know more",
      picture: "/images/234.webp",
    },
    {
      name: "Abhash rai",
      description1: "Hello guys . I am Guardian from the dark forest",
      description2: "click here to know more",
      picture: "/images/789.jpg",
    },
    {
      name: "Dikshant madai",
      description1: "Hello guys . I am the Fighter from yellow river",
      description2: "click here to know more",
      picture: "/images/456.webp",
    },
    {
      name: "prameya don",
      description1: "Hello guys . I am the Healer from white mountains",
      description2: "click here to know more",
      picture: "/images/567.jpg",
    },
    {
      name: "Raunak chor",
      description1: "Hello guys . I am the thief from ancient gardens",
      description2: "click here to know more",
      picture: "/images/678.jpeg",
    },
    {
      name: "Sadikshya gwache",
      description1: "Hello guys . I am the Witch from brown swamps",
      description2: "click here to know more",
      picture: "/images/543.jpg",
    },
  ];



  return (
    <>
      <div className="profile_cards">
        {profiles.map((profile) => (
          <Profile person={profile} key={profile.name} />
        ))}
      </div>
    </>
  );
};

export default Profiles;
