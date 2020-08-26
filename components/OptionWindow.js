import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "next/link";

export default function OptionWindow(title, subtitle, link) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea>
          <CardMedia title={title} />
          <Link href={link}>
            <div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
