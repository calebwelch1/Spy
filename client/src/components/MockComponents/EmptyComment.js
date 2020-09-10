import React from "react";
import NoSsr from "@material-ui/core/NoSsr";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import { useChatzInfoStyles } from "@mui-treasury/styles/info/chatz";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { useGradientAvatarStyles } from "@mui-treasury/styles/avatar/gradient";
import SpyLogo1 from "../../assets/Backgrounds/BrightEyeWhitebluegradient.png";
import SpyLogo2 from "../../assets/Backgrounds/BrightEyeWhiteGreenGradient.png";
import SpyLogo3 from "../../assets/Backgrounds/BrightEyeWhitebluegradient.png";
import SpyLogo4 from "../../assets/Backgrounds/BrightEyeWhiteorangegradient.png";
import SpyLogo5 from "../../assets/Backgrounds/BrightEyeWhitePinkBlue.png";
import SpyLogo6 from "../../assets/Backgrounds/CrossEyeBlueGradient.png";
import SpyLogo7 from "../../assets/Backgrounds/CrossEyeBlueonBlack.png";
import SpyLogo8 from "../../assets/Backgrounds/CrossEyeBlueonWhite.png";
import SpyLogo9 from "../../assets/Backgrounds/CrossEyeOrangegradient.png";
import SpyLogo10 from "../../assets/Backgrounds/CrossEyeOrangeonblack.png";
import SpyLogo11 from "../../assets/Backgrounds/CrossEyePinkonblack.png";
import SpyLogo12 from "../../assets/Backgrounds/CrossEyeWhiteBlueGradient.png";
import SpyLogo13 from "../../assets/Backgrounds/CrossEyeWhitegradientbluepink.png";
import SpyLogo14 from "../../assets/Backgrounds/CrossEyeWhitegreengradient.png";
import SpyLogo15 from "../../assets/Backgrounds/CrossEyeWhiteonBlack.png";
import SpyLogo16 from "../../assets/Backgrounds/CrossEyeWhitepinkGradient.png";
import SpyLogo17 from "../../assets/Backgrounds/TargetEyeGreenonBlack.png";
import SpyLogo18 from "../../assets/Backgrounds/TargetEyePurpleonBlack.png";
const backgroundArr = [
  SpyLogo1,
  SpyLogo2,
  SpyLogo3,
  SpyLogo4,
  SpyLogo5,
  SpyLogo6,
  SpyLogo7,
  SpyLogo8,
  SpyLogo9,
  SpyLogo10,
  SpyLogo11,
  SpyLogo12,
  SpyLogo13,
  SpyLogo14,
  SpyLogo15,
  SpyLogo16,
  SpyLogo17,
  SpyLogo18,
];
export const EmptyComment = React.memo(function ChatzListItem(props) {
  const avatarStyles = useGradientAvatarStyles({
    size: 72,
    thickness: 3,
    color: "linear-gradient(to right, #8a2387, #e94057, #f27121);",
    gapColor: "#f4f7fa",
  });
  const avatarStyles2 = useDynamicAvatarStyles({ size: 72 });
  return (
    <>
      <NoSsr></NoSsr>
      <Column gap={2}>
        <Row alignItems={"center"}>
          <Item position={"middle"}>
            <div className={avatarStyles.root}>
              <Avatar src={backgroundArr[props.img]} />
            </div>
          </Item>
          <Info useStyles={useChatzInfoStyles}>
            <InfoTitle>
              {props.firstName}
              {""}
              {props.lastName}
            </InfoTitle>
            <InfoSubtitle>{props.comment}</InfoSubtitle>
            <InfoCaption>{props.time}</InfoCaption>
          </Info>
          <Item minWidth={48} textAlign={"right"}>
            {/* <Chip color={"secondary"} label={2} size={"small"} /> */}
          </Item>
        </Row>
      </Column>
    </>
  );
});
export default EmptyComment;
