interface Settings {
    volume?: number;
    brightness?: number;
}

const defaultSettings: Required<Settings> = {
    volume: 50,
    brightness: 70,
};
