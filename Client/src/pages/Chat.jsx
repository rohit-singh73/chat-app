import React, { Fragment, useRef } from "react"
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import { Form } from "react-router-dom";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "ThisIsTheChatId",
  name: "Rohit Singh",
}

const Chat = () => {
  const containerRef = useRef(null);

  return(
    
    <Fragment>
      <Stack
      ref = {containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      spacing={"1rem"}
      bgcolor={grayColor}
      height={"90%"}
      sx={{
        overflowX: "hidden",
        overflowY: "auto",
      }}
      >
      
        {sampleMessages.map((i) => (
          <MessageComponent key={i._id} message = {i}  user = {user} />
        ))
        
        }
      </Stack>
      
      <form
      style={{
        height: "10%",
      }}
      >
      <Stack 
        direction={"row"}
        height={"100%"}
        padding = {"1rem"}
        alignItems= {"center"}
        position={"relative"}
        >
        <IconButton
        sx={{
          position: "absolute",
          left: "1.5rem",
          rotate: "90deg",
        }}
        >
          <AttachFileIcon />

        </IconButton>
      <InputBox placeholder="Type Message Here..."/>

      <IconButton type="submit" sx={{
        rotate: "-10deg",
        bgcolor: orange,
        color : "white",
        marginLeft: "1rem",
        padding: "0.5rem",
        "&:hover": {
          bgcolor: "error.dark",
        }
      }} >
        <SendIcon />
      </IconButton>

      </Stack>
      </form>

      <FileMenu />




    </Fragment>
  );
};

export default AppLayout()(Chat);
