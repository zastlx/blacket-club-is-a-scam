import { observer } from "mobx-react";
import authStore from "../../stores/AuthStore";
import { Navigate } from "react-router-dom";

// const withAuth = observer(({ children }: { children: React.ReactNode }) => {
//     if (!authStore.isLoggedIn) return <Navigate to="/login" />;

//     return <>{children}</>;
// });

const withAuth = (Component: React.FC) => observer((props: any) => {
    if (!authStore.isLoggedIn) return <Navigate to="/login" />;

    return <Component {...props} />;
});

export default withAuth;
