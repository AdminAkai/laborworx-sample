interface IThemeColors {
  Blue: string;
  Black: string;
  Red: string;
  Green: string;
  background: {
    Primary: string;
    White: string;
    Green: string;
    Red: string;
  };
  border: {
    Gray: string;
    checkbox: string;
  };
  text: {
    Black: string;
    Gray: string;
  };
}

export const themeColors: IThemeColors = {
  Blue: "#0062A7",
  Black: "#1B2126",
  Red: "#F74646",
  Green: "#11706A",
  background: {
    Primary: "#F7F9FC",
    White: "#FFFFFF",
    Green: "#E8F7F5",
    Red: "#FEEFEF"
  },
  border: {
    Gray: "#F0F5F8",
    checkbox: "#E8E9E9"
  },
  text: {
    Black: "#2E3A59",
    Gray: "#8F9BB3"
  }
};
