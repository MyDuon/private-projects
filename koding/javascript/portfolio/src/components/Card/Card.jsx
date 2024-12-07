import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import "./Card.css";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import picture from "../../resources/calculator.png";

export default function BasicCard({ name, link, url }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link className="link1" to={link}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={url} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
