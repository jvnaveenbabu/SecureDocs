import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-10px",
  },

  footer: {
    textAlign: "center",
    color: theme.palette.mineShaft.main,
    padding: theme.spacing(3, 2),
  },

  heartIcon: {
    fontSize: "15px",
    color: "#0096FF",
  },

  topScrollPaper: {
    alignItems: "start",
    marginTop: "10vh",
  },
  topPaperScrollBody: {
    verticalAlign: "middle",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Developed with{" "}
            <strong>
              <FavoriteIcon className={classes.heartIcon} />
            </strong>{" "}
            by{" "}
            <Link
              href="https://github.com/jvnaveenbabu"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              {"Naveen & Team"}
            </Link>
            .
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
