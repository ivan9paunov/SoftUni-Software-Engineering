export default function withAuth(Component) {
    const ComponentWrapper = (props) => {
        return <Component {...props} />;
    }

    return ComponentWrapper;
}