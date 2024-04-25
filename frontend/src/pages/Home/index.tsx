import { useEffect } from "react";
import Center from "./Center";
import withAuth from "../../components/HOCs/withAuths";
import InfoContainer from "../../components/InfoContainer";

const Home = ({
    setBar
}: {
    setBar: (bar: boolean) => void;
}) => {
    useEffect(() => {
        setBar(true);
    }, []);

    return (
        <div>
            <Center>
                <InfoContainer>Womp</InfoContainer>
            </Center>
        </div>
    );
};
export default withAuth(Home as React.FC);
