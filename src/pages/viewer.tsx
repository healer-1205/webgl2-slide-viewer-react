import { useImageContext } from "../contexts";

export const Viewer = () => {
    const { name } = useImageContext();
    return <div>{name}</div>;
};
