import { withStyles, createStyles, Theme, Switch } from "@material-ui/core";

export const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 35,
      height: 20,
      padding: 4,
        display: "relative",
    },
    switchBase: {
      padding: 4,
      color: theme.palette.grey[500],
      "&$checked": {
        transform: "translateX(12px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: "none",
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  })
)(Switch);
