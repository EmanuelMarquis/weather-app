import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError();
    console.error(err);

    return (
        <div>
            <h1>An Unexpected Error has occured :(</h1>
            <p className="text-gray-400">{err.statusText || err.message}</p>
        </div>
    );
}