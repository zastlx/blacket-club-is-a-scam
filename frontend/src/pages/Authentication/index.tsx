import Header from "./Header";
import Container from "./Container";
import Input from "../../components/Input";
import HeaderBody from "../../components/HeaderBody";
import SubmitButton from "./SubmitButton";
import { useEffect, useState, type FormEvent } from "react";

export enum AuthType {
    Login = 0,
    Register = 1
}

export default (props: {
    type: AuthType;
}) => {
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    const login = () => {
        console.log(username);
    };

    const register = () => {
        console.log(password);
    };

    useEffect(() => {
        console.log(username);
    }, [username]);


    return (
        <HeaderBody>
            <Container>
                <Header>{props.type === AuthType.Login ? "Login" : "Register"}</Header>

                <Input onChange={(e: FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} icon="fas fa-user" placeholder="Username" type="text" autoComplete="username" maxLength={16} />

                <Input onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} icon="fas fa-lock" placeholder="Password" type="password" autoComplete="password" />

                <SubmitButton onClick={props.type === AuthType.Login ? login : register}>Let's Go!</SubmitButton>
            </Container>
        </HeaderBody>
    );
};
