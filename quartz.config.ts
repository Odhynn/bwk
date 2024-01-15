import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🍁 Rhonwynbwk",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "odhynn.github.io/bwk",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Ubuntu",
        body: "Ubuntu",
        code: "Ubuntu",
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // faf8f8 - page background
          lightgray: "#e5e5e5", // e5e5e5 - borders
          gray: "#b8b8b8", // b8b8b8 - graph links, heavier borders
          darkgray: "#4e4e4e", // 4e4e4e - body text
          dark: "#9D0006", // 2b2b2b - header text and icons
          secondary: "#D65D0E", // 284b63 - link colour, current graph node
          tertiary: "#D79921", // 84a59d - hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // (143, 159, 169, 0.15) - internal link background, highlighted text
        },
        darkMode: {
          light: "#1D2021", // 161618
          lightgray: "#393639", // 393639
          gray: "#646464", // 646464
          darkgray: "#d4d4d4", // d4d4d4
          dark: "#83A598", // ebebec
          secondary: "#689D6A", // 7b97aa
          tertiary: "#458588", // 84a59d
          highlight: "rgba(143, 159, 169, 0.15)", // rgba(143, 159, 169, 0.15)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.HardLineBreaks(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
