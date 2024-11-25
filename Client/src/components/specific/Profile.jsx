import { Avatar, Stack, Typography } from '@mui/material';
import React from "react";
import  moment  from "moment";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
      sx={{
        width: 200,
        height: 200,
        objectFit: "contain",
        marginBottom : "1rme",
        border: "4px solid white",
      }}
      />

      <ProfileCard  heading = {"Bio"} text = {"sadas dashboard and this is the our style"} />
      <ProfileCard  heading = {"username"} text = {"rohitsikarwar"} Icon={<UserNameIcon />}/>
      <ProfileCard  heading = {"name"} text = {"Rohit Singh Sikarwar"} Icon={<FaceIcon />} />
      <ProfileCard  heading = {"Joined"} text = {moment('2023-12-04T18:30:00.000Z').fromNow()} Icon={<CalendarIcon />} />
    </Stack>
  );
};
const ProfileCard = ({text, Icon, heading}) => (
<Stack 
direction={"row"}
alignItems={"center"}
spacing={"1rem"}
color={"white"}
textAlign={"center"}
>
  {Icon && Icon}

    <Stack>
      <Typography variant="body1"> {text}</Typography>
      <Typography color={"gray"} variant="caption"> {heading}</Typography>
    </Stack>

</Stack> 
);
export default Profile;
