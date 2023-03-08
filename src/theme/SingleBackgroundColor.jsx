import { useThemeContext } from "../context/theme-switch-context";

export function SingleBackgroundColor({ className }) {
    const { themeHandler } = useThemeContext();

    return (
        <button
            className={className}
            onClick={() => themeHandler(className)}
        ></button>
    );
}

export default SingleBackgroundColor;
