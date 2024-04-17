import Header from "./Header";
import Container from "./Container";
import Input from "../../components/Input";
import HeaderBody from "../../components/HeaderBody";
import SubmitButton from "./SubmitButton";

export enum AuthType {
    Login = 0,
    Register = 1
}

export default (props: {
    type: AuthType;
}) => {
    return (
        <HeaderBody>
            <Container>
                <Header>{props.type === AuthType.Login ? "Login" : "Register"}</Header>

                <Input icon="fas fa-user" placeholder="Username" type="text" autoComplete="username" maxLength={16} />

                <Input icon="fas fa-lock" placeholder="Password" type="password" autoComplete="password" />

                <SubmitButton>Let's Go!</SubmitButton>
            </Container>
        </HeaderBody>
    );
};
