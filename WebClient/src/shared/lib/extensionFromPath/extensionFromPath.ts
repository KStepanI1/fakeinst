const extensionFromPath = (url: string): string => {
    const splited = url?.split(".");

    if (splited.length < 2) {
        return "";
    }

    return splited[splited.length - 1];
};

export default extensionFromPath;
