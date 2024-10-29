import { FC } from "react";

function name<T>(params: T): T {
    return params;
}

export const AboutPage: FC = () => {
    return (
        <div>
            <p>{name<string>("aiueo")}</p>
            <p>{name<number>(123)}</p>
        </div>
    );
};

export default AboutPage;
