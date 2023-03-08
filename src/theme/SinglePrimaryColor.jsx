import { useThemeContext } from "../context/theme-switch-context";

export function SinglePrimaryColor({ className }) {
    const { themeHandler } = useThemeContext();
    return (
        <button
            className={className}
            onClick={() => themeHandler(className)}
        ></button>
    );
}

export default SinglePrimaryColor;
