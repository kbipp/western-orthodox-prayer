import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "net.kbipp.wop",
  appName: "Western Orthodox Prayer",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
