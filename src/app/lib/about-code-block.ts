interface About {
  title: string;
  years_of_experience: number;
  traits: string[];
}

export const shaneWilliams = {
  title: "Software Engineer",
  years_of_experience: 4,
  traits: [
    "Full Stack",
    "Growth obssessed",
    "Open source contributor",
    "NeoVim addict",
  ],
} as const satisfies About;
