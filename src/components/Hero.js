import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  heroTitle1: {
    color: theme.palette.diamondBlack.main,
    fontWeight: "Bold",
  },
  heroTitle2: {
    fontWeight: "Bold",
  },
  heroSubTitle: {
    color: theme.palette.subtitle.main,
  },
  heroContent: {
    marginTop: 24,
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography variant="h3" align="center" gutterBottom>
        <span className={classes.heroTitle2}>{"Secure"}</span>
        <span className={classes.heroTitle1}>{"Docs"}</span>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          className={classes.heroSubTitle}
        >
          {"Secure Your Files By Encryption And Decryption Process"}
          <br />
        </Typography>
        &nbsp;
        <img src="/shield.png" height="28" width="28" />
      </div>
    </Container>
  );
}
