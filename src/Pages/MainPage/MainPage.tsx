import { useAppSelector } from 'Root/Store/Store';

export function MainPage() {
    const isAuthorized = useAppSelector(
        (state) => state.appSettings.userData.isAuthorized
    );

    if (!isAuthorized) return <>About App</>;

    return <>App</>;
}
