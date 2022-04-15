import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { GetServerSideProps, NextPage } from 'next'
import { ChangeEvent, useState } from "react";
import { Layout } from "../components/layouts";
import Cookies from 'js-cookie';

interface Props {
    theme: string;
}

const PageThemeChanger: NextPage<Props> = ({ theme }) => {


  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
        setCurrentTheme(event.target.value);
        Cookies.set('theme', event.target.value);
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={ currentTheme } onChange= { onThemeChange }>
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

    const { theme = 'light' } = req.cookies;

    const validThemes= ['light', 'dark', 'custom'];


    return {
        props: {
            theme: validThemes.includes(theme) ? theme : 'dark',
        }
    }
}

export default PageThemeChanger;
