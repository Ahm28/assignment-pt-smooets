import React from "react";
import HeroesComp from "../Components/Heroes/HeroesComp";
import About from "../Components/Profile/About";
import Profile from "../Components/Profile/Profile";
import { API } from "../config/api";

export default function Resume() {
  const [profile, setProfile] = React.useState();

  document.title = `Resume ${profile ? profile.username : ""}`;

  const getProfile = async () => {
    try {
      const response = await API.get("/user");
      setProfile(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProfile();
  }, []);

  console.log(profile);

  return (
    <>
      <HeroesComp profile={profile} />
      <Profile profile={profile} />
      <About profile={profile} />
    </>
  );
}
