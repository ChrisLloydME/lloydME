import audiomatorIcon from "../assets/projects/audiomator-icon.png";

export type ProjectCapability = {
  title: string;
  summary: string;
  details?: string[];
};

export type ProjectFact = {
  value: string;
  label: string;
};

export type ProjectWorkflowStep = {
  title: string;
  summary: string;
  pane: string;
};

export type ProjectStackItem = {
  name: string;
  description: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  icon: string;
  status: string;
  headline: string;
  heroHeadline: string;
  summary: string;
  intro: string;
  privacy: string;
  tags: string[];
  facts: ProjectFact[];
  workflow: ProjectWorkflowStep[];
  capabilities: ProjectCapability[];
  stack: ProjectStackItem[];
  formatHighlights: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "audiomator",
    name: "AudioMator",
    category: "macOS App",
    icon: audiomatorIcon.src,
    status: "In active development",
    headline: "The best mate of your audio library.",
    heroHeadline: "Inspect, clean, rename, and rewrite audio tags without leaving your Mac.",
    summary: "A local-first desktop editor for cleaning audio metadata with precision.",
    intro:
      "AudioMator is built around a deliberate desktop workflow instead of a cloud dashboard. Start with a temporary session or a watched folder, work through your library in a sortable middle list, and use the inspector to make single-file or multi-file edits with enough technical context to trust each write.",
    privacy:
      "No accounts, no remote upload flow, and no background cloud dependency. Audio files stay on your Mac, watched folders are stored locally, and the only network-backed feature in the current build is the optional MusicBrainz Browser.",
    tags: ["macOS Application", "SwiftUI", "Student Project"],
    facts: [
      {
        value: "3 panes",
        label: "Sidebar, track table, and inspector work as one editing surface.",
      },
      {
        value: "14 fields + art",
        label: "Editable metadata, multi-file changes, and artwork workflows in the current build.",
      },
      {
        value: "23 formats",
        label: "Import and inspection support across common local audio containers.",
      },
      {
        value: "Optional MusicBrainz",
        label: "Reference lookup is available without turning the app into a cloud product.",
      },
    ],
    workflow: [
      {
        pane: "Sidebar",
        title: "Start with a session or watched folder",
        summary:
          "Use Current Session for one-off cleanup, or pin watched folders that stay available across launches and rescan when files change.",
      },
      {
        pane: "Center List",
        title: "Sort, compare, and reorder the working set",
        summary:
          "Browse files in a table, customize visible columns, select single or multiple tracks, and use the visible order as the source for track renumbering.",
      },
      {
        pane: "Inspector",
        title: "Edit with enough context to trust each write",
        summary:
          "The inspector handles single-file edits, mixed multi-select states, artwork changes, technical fields, and raw metadata inspection in one place.",
      },
    ],
    capabilities: [
      {
        title: "Precise metadata editing",
        summary:
          "AudioMator is built for controlled edits instead of bulk guesswork, so you can clean libraries field by field without losing context.",
        details: [
          "Single-file editing and multi-file shared-field editing.",
          "Mixed-value placeholders with keep-unchanged behavior for untouched fields.",
          "Success, warning, partial-save, and failure HUD feedback after writes.",
        ],
      },
      {
        title: "Inspection before write-back",
        summary:
          "The app makes it easy to verify what is actually in a file before you commit a change, including technical fields and raw tag output.",
        details: [
          "Raw Tag Inspector combines TagLib and AVFoundation output.",
          "Technical metadata includes duration, bitrate, sample rate, channels, and format.",
          "Artwork, ISRC, barcode, MusicBrainz IDs, and credits are surfaced when present.",
        ],
      },
      {
        title: "Batch tools for messy libraries",
        summary:
          "Focused utilities help clean larger collections without turning the interface into an opaque automation pipeline.",
        details: [
          "Renumber tracks from the current visible order with padding and custom start values.",
          "Rename selected files from metadata tokens while preserving file extensions.",
          "Reveal files in Finder, open selections, copy paths, and erase supported fields.",
        ],
      },
      {
        title: "Optional reference workflow",
        summary:
          "AudioMator can look outward when you need context, but the editing model stays local-first and desktop-native.",
        details: [
          "Open a dedicated MusicBrainz Browser window from the toolbar or menu.",
          "Seed searches from the current selection, selected file metadata, or direct links.",
          "Keep MusicBrainz as a reference surface while doing all actual edits locally.",
        ],
      },
    ],
    stack: [
      {
        name: "SwiftUI",
        description:
          "A native macOS interface with a balanced three-column layout, toolbar commands, sheets, and keyboard-driven desktop behavior.",
      },
      {
        name: "TagLib Bridge",
        description:
          "A bundled bridge layer handles local metadata reads and writes instead of pushing the workflow through a remote service.",
      },
      {
        name: "AVFoundation",
        description:
          "Used for additional metadata inspection and audio-specific technical detail alongside the TagLib write path.",
      },
      {
        name: "MusicBrainz",
        description:
          "Integrated as an optional browser and lookup workflow for comparison, not as a mandatory backend.",
      },
    ],
    formatHighlights: ["MP3", "AAC", "M4A", "FLAC", "WAV", "AIFF", "DSF", "OGG"],
    links: [
      {
        label: "View Repository",
        href: "https://github.com/ChrisLloydME/AudioMator",
      },
    ],
  },
];
