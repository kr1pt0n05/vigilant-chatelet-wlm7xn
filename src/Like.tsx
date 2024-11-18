import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import MessageIcon from "@mui/icons-material/Message";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export default function IconChips() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Chip icon={<AccessTimeFilledIcon />} label="5m" />
          <Chip icon={<MessageIcon />} label="11" />
          <Chip icon={<ThumbUpIcon />} />
          <Chip icon={<ThumbDownAltIcon />} />
        </Stack>
      </div>

      <div></div>
    </div>
  );
}
