import { FC } from "react";
import Button from "@mui/material/Button";

function name<T>(params: T): T {
    return params;
}

export const AboutPage: FC = () => {
    return (
        <div>
            <h1>ああああ</h1>
            <p>{name<string>("aiueo")}</p>
            <p>{name<number>(123)}</p>
            <Button variant='outlined'>Hello world</Button>
        </div>
    );
};

export default AboutPage;
