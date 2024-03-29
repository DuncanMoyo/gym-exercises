import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({
  exerciseDetail: { bodyPart, gifUrl, name, target, equipment },
}) => {
  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { xs: "20px", lg: "35px" } }}>
        <Typography variant="h3" style={{textTransform: 'capitalize'}} >{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong.
          <span style={{textTransform: 'capitalize'}}> {name}</span> is one of the best exercises to target your {target}.It will
          help you improve your mood and gain energy
        </Typography>
        {extraDetail.map(({ name, icon }, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "110px",
                height: "110px",
              }}
            >
              <img
                src={icon}
                alt={bodyPart}
                style={{ width: "30px", height: "30px" }}
              />
              <Typography variant="h6" textTransform="capitalize">
                {name}
              </Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
