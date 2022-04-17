import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Layout } from "../components/layouts";
import Cookies from "js-cookie";
import { UIContext } from "../context/ui";

interface Props {
  theme: string;
}

const PageThemeChanger: NextPage<Props> = ({ theme }) => {
  const { changeTheme, themeSelected } = useContext(UIContext);
  // changeTheme(theme);
  // const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    // setCurrentTheme(event.target.value);
    Cookies.set("theme", event.target.value);
    changeTheme(event.target.value);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={themeSelected} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light" } = req.cookies;

  const validThemes = ["light", "dark", "custom"];

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "light",
    },
  };
};

export default PageThemeChanger;
