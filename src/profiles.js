function Profile(props) {
  const profile = props.person;

  return (
    <div className="profile_card">
      <h1>{profile.name}</h1>
      <img src={profile.picture} alt="you" className="me" />
      <p>{profile.description1}</p>
      <p>{profile.description2}</p>
    </div>
  );
}

const Profiles = () => {
  const profiles = [
    {
      name: "SUDEEP FULLEL",
      description1: "hello guys . Do you wanna see a magic?",
      description2: "Then click here",
      picture: "/images/234.webp",
    },
    {
      name: "Abhash rai",
      description1: "hello guys . Do you wanna see a magic?",
      description2: "Then click here",
      picture: "/images/789.jpg",
    },
    {
      name: "Dikshant madai",
      description1: "hello guys . Do you wanna see a magic?",
      description2: "Then click here",
      picture: "/images/456.webp",
    },
    {
      name: "prameya don",
      description1: "hello guys . Do you wanna see a magic?",
      description2: "Then click here",
      picture: "/images/567.jpg",
    },
    {
      name: "Praharsha chor",
      description1: "hello guys . Do you wanna see a magic?",
      description2: "Then click here",
      picture: "/images/678.jpeg",
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
