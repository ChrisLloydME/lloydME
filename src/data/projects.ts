import audiomatorIcon from "../assets/projects/audiomator-icon.png";

export type ProjectCapability = {
  title: string;
  summary: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  icon: string;
  headline: string;
  heroHeadline: string;
  summary: string;
  intro: string;
  privacy: string;
  tags: string[];
  capabilities: ProjectCapability[];
};

export const projects: Project[] = [
  {
    slug: "audiomator",
    name: "AudioMator",
    category: "macOS App",
    icon: audiomatorIcon.src,
    headline: "Clean Up Your Audio Metadata, Right on Your Mac",
    heroHeadline: "Metadata, in order.",
    summary:
      "AudioMator is a focused macOS app for inspecting, editing, and organizing metadata in your local audio files. Review tags, fix inconsistencies, compare tracks, and save changes with confidence in a fast, native interface.",
    intro:
      "Built for anyone managing a local music or audio library, AudioMator makes metadata cleanup straightforward. Import the files you want to work on, inspect key fields like title, artist, album, and track number, then make precise edits and write them back to disk. When you need more control, you can compare multiple selections, inspect raw metadata, renumber tracks in batch, reveal files in Finder, and keep your library organized without leaving your desktop.",
    privacy:
      "No accounts, no cloud dependency, and no background scanning. AudioMator keeps the entire workflow local to your Mac, so your files stay under your control.",
    tags: ["macOS", "Local-first", "Audio Metadata"],
    capabilities: [
      {
        title: "Inspect and edit core fields",
        summary:
          "Review title, artist, album, and track numbers in one place, then make exact edits before writing them back to disk.",
      },
      {
        title: "Compare tracks when details diverge",
        summary:
          "Compare multiple selections, inspect raw metadata, and catch the inconsistencies that are easy to miss in a larger library.",
      },
      {
        title: "Tidy collections in batches",
        summary:
          "Renumber tracks, reveal files in Finder, and keep albums and folders organized without leaving your desktop workflow.",
      },
    ],
  },
];
