import Header from "./Header";
import Container from "./Container";
import Input from "../../components/Input";
import HeaderBody from "../../components/HeaderBody";
import SubmitButton from "./SubmitButton";
import { useState, type FormEvent } from "react";
import authStore from "../../stores/AuthStore";
import ApiManager from "../../services/ApiManager";
import { useNavigate } from "react-router-dom";

export enum AuthType {
    Login = 0,
    Register = 1
}



export default (props: {
    type: AuthType;
}) => {
    const navigate = useNavigate();
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [error, setError] = useState<string | null>();
    const authErrors = {
        "401": "Invalid username or password",
        "500": "Something went wrong"
    };

    const login = () => {
        ApiManager.post("/auth/login", {
            username,
            password
        }).then(response => {
            if (response.status === 200) {
                authStore.login(response.data);
                navigate("/");
            }
            // dont touch, it works
            else setError(authErrors[response.status as unknown as keyof typeof authErrors] || "Something went wrong");
        });
    };

    const register = () => {
        ApiManager.post("/auth/register", {
            username,
            password
        }).then(response => {
            if (response.status === 200) {
                authStore.login(response.data);
                navigate("/");
            }
            // dont touch, it works
            else setError(authErrors[response.status as unknown as keyof typeof authErrors] || "Something went wrong");
        });
    };


    return (
        <HeaderBody>
            <Container>
                <Header>{props.type === AuthType.Login ? "Login" : "Register"}</Header>

                <Input onChange={(e: FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} icon="fas fa-user" placeholder="Username" type="text" autoComplete="username" maxLength={16} />

                <Input onChange={(e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} icon="fas fa-lock" placeholder="Password" type="password" autoComplete="password" />

                <SubmitButton onClick={props.type === AuthType.Login ? login : register}>Let's Go!</SubmitButton>
                <p>{error}</p>
            </Container>
        </HeaderBody>
    );
};
