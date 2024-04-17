import { useEffect } from "react";
import Center from "./Center";

export default (props: {
    setBar: (bar: boolean) => void;
}) => {
    useEffect(() => {
        props.setBar(true);
    }, []);

    return (
        <div>
            <Center>
                <div>
                    <h1>Accounts</h1>
                </div>
            </Center>
        </div>
    );
};
