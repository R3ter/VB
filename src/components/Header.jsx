import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { DrawerBar } from "./DrawerBar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import HeadList from "./HeadList";
import { Divider } from "@mui/material";
function Header(props) {
  const { title } = props;
  const sections = [
    {
      title: "تفاعلي",
      url: "#",
    },
    {
      title: "محتوى",
      url: "#",
      items: [
        {
          title: "المقالات",
          url: "/articles",
        },
        {
          title: "فيديوهات",
          url: "/articles",
        },
        {
          title: "مش عارف شو",
          url: "/articles",
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <DrawerBar />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign in
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-around", overflowX: "auto" }}
      >
        {sections.map((section) => {
          let displayList;

          return (
            <Link
              color="inherit"
              underline="none"
              // noWrap
              key={section.title}
              // variant="body2"
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              <div
                onMouseEnter={() => {
                  displayList(true);
                }}
                onMouseLeave={() => {
                  displayList(false);
                }}
              >
                <Typography>
                  {section.title}
                  <HeadList
                    items={section.items}
                    displayFunc={(e) => {
                      displayList = e;
                    }}
                  ></HeadList>
                </Typography>
              </div>
            </Link>
          );
        })}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
