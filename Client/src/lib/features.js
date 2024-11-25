import moment from "moment";

const fileFormat =  (url="") => {
const fileExt = url.split(".").pop();

if(fileExt === "mp4" || fileExt === "webm" || fileExt === "ogg" ) 
  return "video";
if(fileExt === "mp3" || fileExt === "wav" ) 
  return "audio";
if(fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif" ) 
  return "image";
return "file";
};

const transformImage = (url = "", width = 100 ) => url;

export const getLastSevenDays = () => {
  const currentDate = moment();

  const lastSevenDays = [];

  for(let i = 0; i < 7; i++){
    const dayDate = currentDate.clone().subtract(i, "days");
    const dayName = dayDate.format("dddd");
    lastSevenDays.unshift(dayName);
  }
  return lastSevenDays;
};

export {fileFormat, transformImage };